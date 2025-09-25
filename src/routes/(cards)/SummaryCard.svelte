<script lang="ts">
	import FormCard from "$lib/components/FormCard.svelte";
	import type { CardProps } from "$lib/types";
	import { ReceiptText } from "@lucide/svelte";
	import CostBreakdownModal from "../(modals)/CostBreakdownModal.svelte";

	let {
		formValues = $bindable(),
		formState,
		accommodationCosts,
		active,
		visited,
		onback,
		onnext,
		onsubmit,
	}: CardProps = $props();
</script>

<FormCard
	Icon={ReceiptText}
	title="Summary"
	{active}
	{visited}
	{formState}
	{onback}
	{onnext}
	{onsubmit}
>
	<p>
		The total cost for the weekend for
		{formValues.familyMembers.length ? "your family" : "you"} is
		<strong>${formValues.costs.grandTotal}</strong>.
		<button onclick={() => costBreakdownModal.showModal()} class="link label">
			How'd we arrive at that figure?
		</button>
	</p>

	<p>
		Please pay this amount into the church account before [cut off date]. When
		you submit this form an email will be sent to you with your total, the
		church account details and more information about camp.
	</p>

	<p>
		{#if formValues.preferredAccommodationType !== "Powered Site"}
			Once everything is booked, we'll let you know what cabin/room number
			you'll be in.
		{/if}
		Can't wait to see you there!
	</p>

	<CostBreakdownModal
		formState={formValues}
		accommodationCosts={accommodationCosts!}
	/>
</FormCard>
