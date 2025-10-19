<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import {
		ACCOMMODATION_TYPES,
		APPS_SCRIPT_URL,
		EXPECTED_PARTICIPANTS,
		RATES,
		SATURDAY_DINNER_RATE,
	} from '$lib/consts';
	import type { AccommodationCosts, FormState, FormValues } from '$lib/types';
	import { tick } from 'svelte';
	import AccommodationCard from './(cards)/AccommodationCard.svelte';
	import BunkmatesDetailsCard from './(cards)/BunkmatesDetailsCard.svelte';
	import FamilyDetailsCard from './(cards)/FamilyDetailsCard.svelte';
	import MyDetailsCard from './(cards)/MyDetailsCard.svelte';
	import OtherCard from './(cards)/OtherCard.svelte';
	import StayingWithCard from './(cards)/StayingWithCard.svelte';
	import SummaryCard from './(cards)/SummaryCard.svelte';
	import WelcomeCard from './(cards)/WelcomeCard.svelte';

	let formState: FormState = $state({
		stepIndex: 0,
		isLoading: false,
	});

	let formValues: FormValues = $state({
		givenName: '',
		familyName: '',
		emailAddress: '',
		mobileNumber: '',
		payingFor: '',
		sharingWith: 'nobody',
		familyMembers: [
			{
				name: '',
				ageGroup: 'adult',
			},
		],
		bunkmates: [
			{
				name: '',
				ageGroup: 'adult',
			},
		],
		arrivalTime: 'Friday Evening',
		departureTime: 'Sunday Afternoon',
		stayingNights: 2,
		sharingDinner: true,
		preferredAccommodationType: '',
		costs: {
			accommodationTotal: 0,
			accommodationSplit: 0,
			sharedTotal: 0,
			grandTotal: 0,
		},
		dietaryRequirements: '',
		offeringLift: false,
		acceptingLift: false,
		notes: '',
	});

	let accommodationCosts: AccommodationCosts = $state({
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

	let steps = $derived.by(() => {
		let steps = [WelcomeCard, MyDetailsCard, StayingWithCard];

		if (formValues.payingFor === 'family') {
			steps.push(FamilyDetailsCard);
		}

		if (formValues.sharingWith === 'friends') {
			steps.push(BunkmatesDetailsCard);
		}

		steps.push(AccommodationCard);
		steps.push(OtherCard);
		steps.push(SummaryCard);
		return steps;
	});

	const onback = () => goToStep(formState.stepIndex - 1);
	const onnext = () => goToStep(formState.stepIndex + 1);
	const onsubmit = async () => {
		formState.isLoading = true;
		await fetch(APPS_SCRIPT_URL, {
			redirect: 'follow',
			method: 'POST',
			headers: { 'Content-Type': 'text/plain' },
			body: JSON.stringify($state.snapshot(formValues)),
		});

		goto(resolve('/form-submitted'));
	};

	async function goToStep(index: number) {
		formState.stepIndex = index;
		await tick();
		let scrollCatch = document.getElementsByClassName('scroll-catch')[index];
		scrollCatch.scrollIntoView({ behavior: 'smooth' });
	}

	function calculateCosts(): void {
		calculateNights();

		if (formValues.preferredAccommodationType) {
			calculateAccommodationCosts();
		} else {
			resetCosts();
		}

		let familyCount = 1;
		if (formValues.payingFor === 'family') {
			familyCount += formValues.familyMembers.length;
		}

		formValues.costs.sharedTotal = formValues.sharingDinner
			? SATURDAY_DINNER_RATE * familyCount
			: 0;
		formValues.costs.grandTotal =
			formValues.costs.accommodationSplit + formValues.costs.sharedTotal;
	}

	function calculateNights(): void {
		const arrivingFriday = formValues.arrivalTime === 'Friday Evening';
		const departingSunday =
			formValues.departureTime === 'Sunday Morning' ||
			formValues.departureTime === 'Sunday Afternoon';

		let nightsCount = 0;
		if (arrivingFriday) nightsCount += 1;
		if (departingSunday) nightsCount += 1;
		formValues.stayingNights = nightsCount;

		formValues.sharingDinner =
			formValues.arrivalTime !== 'Saturday Evening (After Dinner)' &&
			formValues.departureTime !== 'Saturday Afternoon (Before Dinner)';
	}

	function calculateAccommodationCosts(): void {
		// setup
		// get values to update
		const nightlyRates = accommodationCosts!.total.nightly;
		const myNightlyRates = accommodationCosts!.split.nightly;

		// get accommodation details
		const accommodation = ACCOMMODATION_TYPES.find(
			(t) => t.name === formValues.preferredAccommodationType
		);

		// calculate party details
		let myChildrenCount = 0;
		let myAdultsCount = 1;
		if (formValues.payingFor === 'family') {
			const family = formValues.familyMembers;
			myChildrenCount += family.filter((m) => m.ageGroup === 'child').length;
			myAdultsCount += family.length - myChildrenCount;
		}

		let childrenCount = 0;
		let adultsCount = 0;
		if (formValues.sharingWith === 'friends') {
			const friends = formValues.bunkmates;
			childrenCount += friends.filter((m) => m.ageGroup === 'child').length;
			adultsCount += friends.length - childrenCount;
		}

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
					perChild * myChildrenCount
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
		accommodationCosts!.total.total =
			nightlyRates.total * formValues.stayingNights;
		accommodationCosts!.split.total =
			myNightlyRates.total * formValues.stayingNights;

		formValues.costs.accommodationTotal = accommodationCosts!.total.total;
		formValues.costs.accommodationSplit = accommodationCosts!.split.total;
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
