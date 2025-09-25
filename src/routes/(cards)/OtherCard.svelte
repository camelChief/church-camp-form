<script lang="ts">
	import FormCard from "$lib/components/FormCard.svelte";
	import type { CardProps } from "$lib/types";
	import { Utensils } from "@lucide/svelte";

	let {
		formValues = $bindable(),
		active,
		visited,
		onback,
		onnext,
	}: CardProps = $props();
</script>

<FormCard Icon={Utensils} title="Other" {active} {visited} {onback} {onnext}>
	<div class="flex flex-col gap-1">
		<label for="dietary-requirements" class="label">Dietary Requirements</label>
		<input
			type="text"
			id="dietary-requirements"
			bind:value={formValues.dietaryRequirements}
			class="input"
		/>
	</div>

	<div class="flex flex-col gap-1">
		<label for="notes" class="label">Anything else you'd like us to know?</label
		>
		<textarea id="notes" bind:value={formValues.notes} class="textarea w-full"
		></textarea>
	</div>
</FormCard>
