<script lang="ts">
    import FormCard, { type ActionProps } from "$lib/FormCard.svelte";
    import { FlameKindling, Tent } from "@lucide/svelte";

    let { card, active, visited, onnext }: ActionProps = $props();
</script>

<FormCard
    imageSrc="https://www.multipure.com/product_images/uploaded_images/family-double-piggyback-small.jpg"
    Icon={FlameKindling}
    title="2026 Church Weekend Away Registration"
    bind:card
    {active}
    {visited}
    {onnext}
>
    <p>Welcome! We're excited to spend some time away together in 2026! In case you missed it, we'll be spending the weekend together:</p>
    <ul class="pl-4">
        <li>at <strong>Camp Elim</strong> in Forster</li>
        <li>from the evening of <strong>Friday 30th Jan</strong></li>
        <li>to the afternoon of <strong>Sunday 1st Feb</strong></li>
    </ul>
    <p>We look forward to seeing you there! Follow the prompts to register.</p>
</FormCard>