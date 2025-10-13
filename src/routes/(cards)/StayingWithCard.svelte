<script lang="ts">
	import FormCard from '$lib/components/FormCard.svelte';
	import { PAYING_FOR_OPTIONS, SHARING_WITH_OPTIONS } from '$lib/consts';
	import type { CardProps, FormControl } from '$lib/types';
	import { required } from '$lib/validators';
	import { Bed } from '@lucide/svelte';

	let {
		formValues = $bindable(),
		active,
		visited,
		onback,
		onnext,
	}: CardProps = $props();

	const formControls: { [id: string]: FormControl } = $state({
		'paying-for': {
			field: null,
			type: 'radio',
			validators: [required],
		},
	});

	let singularPlural: {
		possessive: string;
		pronoun: string;
		pronounCaps: string;
		verb: string;
	} = $derived(
		!formValues.payingFor || formValues.payingFor === 'myself'
			? {
					possessive: 'my',
					pronoun: 'I',
					pronounCaps: 'I',
					verb: 'am',
				}
			: {
					possessive: 'our',
					pronoun: 'we',
					pronounCaps: 'We',
					verb: 'are',
				}
	);
</script>

<FormCard
	Icon={Bed}
	title="Who I'm Staying With"
	controls={Object.values(formControls)}
	{active}
	{visited}
	{onback}
	{onnext}
>
	<p class="mb-2">
		Please select the options that best describe your accommodation sharing
		situation. Camp Elim prices their accommodation based on the number of
		adults and children sharing a room, hence the need to provide this
		information to calculate your costs.
	</p>

	<div
		bind:this={formControls['paying-for'].field}
		class="flex flex-col gap-2 mb-2"
	>
		<p class="label">I am paying for accommodation for...</p>

		{#each PAYING_FOR_OPTIONS as option}
			<div class="flex gap-2">
				<input
					type="radio"
					id={option.value}
					name="paying-for"
					bind:group={formValues.payingFor}
					value={option.value}
					class="radio"
				/>
				<label for="paying-for-{option.value}">{option.label}</label>
			</div>
		{/each}
	</div>

	<p class="mb-2">
		If you would like to split your room with some friends
		{formValues.payingFor === 'family' ? ' outside of your family' : ''} you can
		specify that here. The costs of accommodation will be automatically calculated
		and split between all parties sharing a room/site. The more bunkmates you have,
		the cheaper the cost will be per person!
	</p>

	<div class="flex flex-col gap-2">
		<p class="label">
			{singularPlural.pronounCaps} will share {singularPlural.possessive}
			accommodation with...
		</p>

		{#each SHARING_WITH_OPTIONS as option}
			<div class="flex gap-2">
				<input
					type="radio"
					id={option.value}
					name="sharing-with"
					bind:group={formValues.sharingWith}
					value={option.value}
					class="radio"
				/>
				<div class="flex flex-col">
					<label for="sharing-with-{option.value}">{option.label}</label>
					<span class="label text-xs whitespace-normal">
						{#if option.value === 'friends'}
							{singularPlural.pronounCaps}'ve organised a group of friends who
							{singularPlural.pronoun} will share
							{singularPlural.possessive} accommodation with.
						{:else if option.value === 'anyone'}
							{singularPlural.pronounCaps}'ve not organised a group, but
							{singularPlural.pronoun}
							{singularPlural.verb} willing to share
							{singularPlural.possessive} accommodation with others if needed.
						{/if}
					</span>
				</div>
			</div>
		{/each}
	</div>
</FormCard>
