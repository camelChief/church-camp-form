<script lang="ts">
	import FormCard from "$lib/components/FormCard.svelte";
	import {
		ACCOMMODATION_TYPES,
		PAYING_FOR_OPTIONS,
		SHARING_WITH_OPTIONS,
	} from "$lib/consts";
	import type { CardProps, FormControl } from "$lib/types";
	import { required } from "$lib/validators";
	import { Tent } from "@lucide/svelte";

	let {
		formValues = $bindable(),
		accommodationCosts,
		calculateCosts,
		active,
		visited,
		onback,
		onnext,
	}: CardProps = $props();

	const bunkmates = $derived.by(() => {
		return (
			(formValues.additionalAdults || 0) + (formValues.additionalChildren || 0)
		);
	});

	const partySize = $derived.by(() => {
		return formValues.familyMembers.length + 1 + bunkmates;
	});

	const accommodationOptionsHidden = $derived.by(() => {
		const roomSizes = ACCOMMODATION_TYPES.map((t) => t.sleeps);
		return partySize > Math.min(...roomSizes);
	});

	const formControls: { [id: string]: FormControl } = $state({
		"accommodation-type": {
			field: null,
			type: "select",
			validators: [required],
		},
	});
</script>

<FormCard
	Icon={Tent}
	title="Who I'm Staying With"
	controls={Object.values(formControls)}
	{active}
	{visited}
	{onback}
	{onnext}
>
	<p>
		Please select the option that best describes your accommodation situation.
		Camp Elim prices their accommodation based on the number of adults and
		children sharing a room, hence the need to provide this information to
		calculate your costs.
	</p>

	<p>
		If you are happy to share your accommodation but have not organised a group
		yourself, select the fifth option. If there are others who are also looking
		for a bunkmate, you may be put together (we'll contact you first to
		discuss). You will receive a cost estimate for camp, but the final price
		will be calculated and communicated to you after registration closes.
	</p>

	<p class="mb-2">
		The more bunkmates you have, the cheaper the cost will be per person!
	</p>

	<div class="flex flex-col gap-2">
		<p class="label">I am paying for accommodation for...</p>

		{#each PAYING_FOR_OPTIONS as option}
			<div class="flex gap-2">
				<input
					type="radio"
					id="paying-for-{option.value}"
					bind:group={formValues.payingFor}
					value={option.value}
					class="radio"
				/>
				<label for="paying-for-{option.value}">{option.label}</label>
			</div>
		{/each}
	</div>

	<div class="flex flex-col gap-2">
		<p class="label">
			{!formValues.payingFor || formValues.payingFor === "myself" ? "I" : "We"} will
			be sharing {!formValues.payingFor || formValues.payingFor === "myself"
				? "my"
				: "our"} accommodation with...
		</p>

		{#each SHARING_WITH_OPTIONS as option}
			<div class="flex gap-2">
				<input
					type="radio"
					id="sharing-with-{option.value}"
					bind:group={formValues.sharingWith}
					value={option.value}
					class="radio"
				/>
				<div class="flex flex-col">
					<label for="sharing-with-{option.value}">{option.label}</label>
					<span class="label text-xs whitespace-normal">
						{#if option.value === "friends"}
							I've organised a group of friends who I will be sharing my
							accommodation with.
						{:else if option.value === "anyone"}
							I have not organised a group, but I am willing to share my
							accommodation with others if needed.
						{/if}
					</span>
				</div>
			</div>
		{/each}
	</div>
</FormCard>
