<script lang="ts">
	import FormCard from '$lib/components/FormCard.svelte';
	import type { CardProps } from '$lib/types';
	import { Plus, Trash, Users } from '@lucide/svelte';

	let {
		formValues = $bindable(),
		calculateCosts,
		active,
		visited,
		onback,
		onnext,
	}: CardProps = $props();

	function addFamilyMember() {
		formValues.familyMembers.push({ name: '', ageGroup: 'adult' });
		calculateCosts!();
	}

	function removeFamilyMember(index: number) {
		formValues.familyMembers.splice(index, 1);
		calculateCosts!();
	}
</script>

<FormCard
	Icon={Users}
	title="Family Details"
	{active}
	{visited}
	{onback}
	{onnext}
>
	<p class="mb-2">
		Add the details for your spouse/family here.<br />
		Use the + (plus) button below to add family members.
	</p>

	<div class="flex flex-col items-end gap-2">
		{#each formValues.familyMembers as _, i}
			<div class="flex gap-2 items-end self-stretch">
				<div class="flex flex-col gap-1 grow">
					{#if i === 0}
						<label for="family-member-{i}-name" class="label">Given Name</label>
					{/if}
					<input
						type="text"
						id="family-member-{i}-name"
						bind:value={formValues.familyMembers[i].name}
						class="input"
					/>
				</div>
				<div class="flex flex-col gap-1">
					{#if i === 0}
						<label for="family-member-{i}-age" class="label">Age Group</label>
					{/if}
					<select
						id="family-member-{i}-age"
						bind:value={formValues.familyMembers[i].ageGroup}
						onchange={() => calculateCosts!()}
						class="select"
					>
						<option value="adult">Adult</option>
						<option value="child">Child (Under 18)</option>
					</select>
				</div>
				<button
					onclick={() => removeFamilyMember(i)}
					class="btn btn-error btn-square {i === 0 ? 'btn-disabled' : ''}"
				>
					<Trash size={16} />
				</button>
			</div>
		{/each}

		<button onclick={addFamilyMember} class="btn btn-success btn-square">
			<Plus size={16} />
		</button>
	</div>
</FormCard>
