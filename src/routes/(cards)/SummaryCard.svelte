<script lang="ts">
    import FormCard from '$lib/components/FormCard.svelte';
    import type { CardProps } from '$lib/types';
    import { ReceiptText, X } from '@lucide/svelte';
  import CostBreakdownModal from '../CostBreakdownModal.svelte';

    let {
        formState = $bindable(),
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
    {formState}
    {active}
    {visited}
    {onback}
    {onnext}
    {onsubmit}
>
    <p>
        The total cost for the weekend for
        {formState.familyMembers.length ? 'your family' : 'you'} is
        <strong>${formState.costs.grandTotal}</strong>.
        <button onclick={() => costBreakdownModal.showModal()} class="link label">
            How'd we arrive at that figure?
        </button>
    </p>

    <p>
        Please pay this amount into the church account before [cut off date].
        When you submit this form an email will be sent to you with your total,
        the church account details and more information about camp.
    </p>

    <p>
        {#if formState.preferredAccommodationType !== 'powered site'}
            Once everything is booked, we'll let you know what cabin/room
            number you'll be in.
        {/if}
        Can't wait to see you there!
    </p>

    <CostBreakdownModal />
</FormCard>