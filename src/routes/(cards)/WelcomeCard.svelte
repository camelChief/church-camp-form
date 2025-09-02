<script lang="ts">
    import FormCard from "$lib/components/FormCard.svelte";
    import type { CardProps } from "$lib/types";
    import { FlameKindling } from "@lucide/svelte";

    let { formState, active, visited, onnext }: CardProps = $props();
</script>

<FormCard
    imageSrc="https://www.multipure.com/product_images/uploaded_images/family-double-piggyback-small.jpg"
    Icon={FlameKindling}
    title="2026 Church Weekend Away Registration"
    {formState}
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