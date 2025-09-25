<script lang="ts">
	import { goto } from "$app/navigation";
	import { resolve } from "$app/paths";
	import {
		ACCOMMODATION_TYPES,
		APPS_SCRIPT_URL,
		EXPECTED_PARTICIPANTS,
		RATES,
		SATURDAY_DINNER_RATE,
	} from "$lib/consts";
	import type { AccommodationCosts, FormState, FormValues } from "$lib/types";
	import { tick } from "svelte";
	import AccommodationCard from "./(cards)/AccommodationCard.svelte";
	import FamilyDetailsCard from "./(cards)/FamilyDetailsCard.svelte";
	import MyDetailsCard from "./(cards)/MyDetailsCard.svelte";
	import OtherCard from "./(cards)/OtherCard.svelte";
	import StayingWithCard from "./(cards)/StayingWithCard.svelte";
	import SummaryCard from "./(cards)/SummaryCard.svelte";
	import WelcomeCard from "./(cards)/WelcomeCard.svelte";

	const steps = [
		WelcomeCard,
		MyDetailsCard,
		StayingWithCard,
		FamilyDetailsCard,
		AccommodationCard,
		OtherCard,
		SummaryCard,
	];

	let formState: FormState = $state({
		stepIndex: 0,
		isLoading: false,
	});

	let formValues: FormValues = $state({
		givenName: "",
		familyName: "",
		emailAddress: "",
		mobileNumber: "",
		accommodationSharing: "",
		familyMembers: [],
		arrivalTime: "Friday Evening",
		departureTime: "Sunday Afternoon",
		preferredAccommodationType: "",
		additionalAdults: 0,
		additionalChildren: 0,
		costs: {
			accommodationTotal: 0,
			accommodationSplit: 0,
			sharedTotal: 0,
			grandTotal: 0,
		},
		dietaryRequirements: "",
		notes: "",
	});

	let accommodationCosts: AccommodationCosts = $state({
		nights: 0,
		additionalAdults: 0,
		additionalChildren: 0,

		total: {
			nightly: {
				room: 0,
				additionalAdults: 0,
				additionalChildren: 0,
				total: 0,
			},

			total: 0,
		},

		split: {
			nightly: {
				room: 0,
				additionalAdults: 0,
				additionalChildren: 0,
				total: 0,
			},

			total: 0,
		},
	});

	const onback = () => goToStep(formState.stepIndex - 1);
	const onnext = () => goToStep(formState.stepIndex + 1);
	const onsubmit = async () => {
		formState.isLoading = true;
		await fetch(APPS_SCRIPT_URL, {
			redirect: "follow",
			method: "POST",
			headers: { "Content-Type": "text/plain" },
			body: JSON.stringify($state.snapshot(formValues)),
		});
		goto(resolve("/form-submitted"));
	};

	async function goToStep(index: number) {
		formState.stepIndex = index;
		await tick();
		let scrollCatch = document.getElementsByClassName("scroll-catch")[index];
		scrollCatch.scrollIntoView({ behavior: "smooth" });
	}

	function calculateCosts(): void {
		if (!formValues.preferredAccommodationType) {
			resetCosts();
			return;
		}

		// setup
		// get values to update
		const nightsCount = calculateNights();
		const nightlyRates = accommodationCosts!.total.nightly;
		const myNightlyRates = accommodationCosts!.split.nightly;

		// get accommodation details
		const accommodation = ACCOMMODATION_TYPES.find(
			(t) => t.name === formValues.preferredAccommodationType,
		);

		// calculate party details
		const myChildrenCount = formValues.familyMembers.filter(
			(m) => m.ageGroup === "child",
		).length;
		const myAdultsCount = formValues.familyMembers.length - myChildrenCount + 1;
		let childrenCount = formValues.additionalChildren || 0;
		let adultsCount = formValues.additionalAdults || 0;
		const bunkmates = adultsCount + childrenCount > 0;
		adultsCount += myAdultsCount;
		childrenCount += myChildrenCount;

		// calculate additional occupants (beyond 2)
		let additionalAdultsCount = adultsCount;
		let additionalChildrenCount = childrenCount;
		for (let i = 0; i < 2; i++) {
			if (additionalAdultsCount > 0) additionalAdultsCount--;
			else if (additionalChildrenCount > 0) additionalChildrenCount--;
		}

		// calculate nightly rates
		// nightly room rate
		nightlyRates.room = accommodation!.rate;
		myNightlyRates.room = accommodation!.rate;

		// nightly room rate for user if splitting
		if (bunkmates) {
			const perAdultRate = nightlyRates.room / adultsCount;
			myNightlyRates.room = Math.ceil(perAdultRate * myAdultsCount);
		}

		// nightly additional occupants rates
		accommodationCosts!.nights = nightsCount;
		accommodationCosts!.additionalAdults = additionalAdultsCount;
		accommodationCosts!.additionalChildren = additionalChildrenCount;
		nightlyRates.additionalAdults =
			additionalAdultsCount * RATES.nightly.additionalAdult;
		nightlyRates.additionalChildren =
			additionalChildrenCount * RATES.nightly.additionalChild;
		myNightlyRates.additionalAdults = nightlyRates.additionalAdults;
		myNightlyRates.additionalChildren = nightlyRates.additionalChildren;

		// nightly additional occupants rates for user if splitting
		if (bunkmates) {
			if (nightlyRates.additionalAdults) {
				const perAdult = nightlyRates.additionalAdults / adultsCount;
				myNightlyRates.additionalAdults = Math.ceil(perAdult * myAdultsCount);
			}

			if (nightlyRates.additionalChildren && childrenCount) {
				const perChild = nightlyRates.additionalChildren / childrenCount;
				myNightlyRates.additionalChildren = Math.ceil(
					perChild * myChildrenCount,
				);
			}
		}

		// nightly rate
		nightlyRates.total =
			nightlyRates.room +
			nightlyRates.additionalAdults +
			nightlyRates.additionalChildren;

		// nightly rate for user
		myNightlyRates.total =
			myNightlyRates.room +
			myNightlyRates.additionalAdults +
			myNightlyRates.additionalChildren;

		// total costs
		accommodationCosts!.total.total = nightlyRates.total * nightsCount;
		accommodationCosts!.split.total = myNightlyRates.total * nightsCount;

		formValues.costs.accommodationTotal = accommodationCosts!.total.total;
		formValues.costs.accommodationSplit = accommodationCosts!.split.total;
		formValues.costs.sharedTotal =
			((RATES.nightly.lakesideHall * 2) / EXPECTED_PARTICIPANTS +
				SATURDAY_DINNER_RATE) *
			(formValues.familyMembers.length + 1);
		formValues.costs.grandTotal =
			formValues.costs.accommodationSplit + formValues.costs.sharedTotal;
	}

	function resetCosts(): void {
		accommodationCosts!.total = {
			nightly: {
				room: 0,
				additionalAdults: 0,
				additionalChildren: 0,
				total: 0,
			},
			total: 0,
		};

		accommodationCosts!.split = {
			nightly: {
				room: 0,
				additionalAdults: 0,
				additionalChildren: 0,
				total: 0,
			},
			total: 0,
		};
	}

	function calculateNights(): number {
		const arrivingFriday = formValues.arrivalTime === "Friday Evening";
		const departingSunday =
			formValues.departureTime === "Sunday Morning" ||
			formValues.departureTime === "Sunday Afternoon";

		let nightsCount = 0;
		if (arrivingFriday) nightsCount += 1;
		if (departingSunday) nightsCount += 1;
		return nightsCount;
	}
</script>

<div class="flex flex-col items-center gap-4 p-4">
	{#each steps as Step, i}
		<Step
			bind:formValues
			{formState}
			{accommodationCosts}
			{calculateCosts}
			active={i === formState.stepIndex}
			visited={i < formState.stepIndex}
			onback={i > 0 ? onback : undefined}
			onnext={i < steps.length - 1 ? onnext : undefined}
			onsubmit={i === steps.length - 1 ? onsubmit : undefined}
		/>
	{/each}
</div>
