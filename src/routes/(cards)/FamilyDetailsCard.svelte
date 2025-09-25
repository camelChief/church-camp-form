<script lang="ts">
	import FormCard from "$lib/components/FormCard.svelte";
	import type { CardProps } from "$lib/types";
	import { Plus, Trash, Users } from "@lucide/svelte";

	let {
		formValues = $bindable(),
		calculateCosts,
		active,
		visited,
		onback,
		onnext,
	}: CardProps = $props();

	function addFamilyMember() {
		formValues.familyMembers.push({ name: "", ageGroup: "adult" });
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
		If you're bringing your family and would like to register them also, you can
		include them here. Use the + (plus) button below to add family members.
	</p>

	<table class="table table-xs">
		<thead>
			<tr>
				<th>Given Name</th>
				<th>Age Group</th>
				<th class="w-1/100">
					<button
						onclick={addFamilyMember}
						class="btn btn-success btn-square btn-ghost"
					>
						<Plus size={16} />
					</button>
				</th>
			</tr>
		</thead>
		<tbody>
			{#each formValues.familyMembers as _, i}
				<tr>
					<td>
						<input
							type="text"
							id="family-member-{i}-name"
							bind:value={formValues.familyMembers[i].name}
							class="input"
						/>
					</td>
					<td>
						<select
							id="family-member-{i}-age"
							bind:value={formValues.familyMembers[i].ageGroup}
							onchange={() => calculateCosts!()}
							class="select"
						>
							<option value="adult">Adult</option>
							<option value="child">Child (Under 18)</option>
						</select>
					</td>
					<td>
						<button
							onclick={() => removeFamilyMember(i)}
							class="btn btn-error btn-square btn-ghost"
						>
							<Trash size={16} />
						</button>
					</td>
				</tr>
			{/each}
			<!-- <tr>
                <td></td>
                <td></td>
                <td>

                </td>
            </tr> -->
		</tbody>
	</table>
</FormCard>
