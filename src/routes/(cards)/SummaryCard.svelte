<script lang="ts">
	import FormCard from '$lib/components/FormCard.svelte';
	import type { CardProps } from '$lib/types';
	import { ReceiptText } from '@lucide/svelte';
	import CostBreakdownModal from '../(modals)/CostBreakdownModal.svelte';

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
		{formValues.payingFor === 'family' ? 'your family' : 'you'} is
		<strong>${formValues.costs.grandTotal}</strong>.
		<button onclick={() => costBreakdownModal.showModal()} class="link label">
			How'd we arrive at that figure?
		</button>
	</p>

	<p>
		When you submit this form you will receive an email to confirm that you have
		registered.

		{#if formValues.sharingWith === 'anyone'}
			It will also include more information about camp.
		{:else}
			It will also include your total, with instructions for how to pay and more
			information about camp.
		{/if}
	</p>

	{#if formValues.sharingWith === 'anyone'}
		<p>
			If someone else would like to share accommodation, we'll contact you to
			arrange it. After registration closes, you'll receive another email with
			your final total (if your have some bunkmates,
			<strong>your costs will come down</strong>) and instructions for how to
			pay.
		</p>
	{/if}

	<p>
		{#if formValues.preferredAccommodationType !== 'Powered Site'}
			Once everything is booked, we'll let you know what cabin/room number
			you'll be in.
		{/if}
		Can't wait to see you there!
	</p>

	<CostBreakdownModal {formValues} accommodationCosts={accommodationCosts!} />
</FormCard>
