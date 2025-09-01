<script lang="ts">
    import FormCard, { type ActionProps } from "$lib/FormCard.svelte";

    let { card, active, visited, onnext }: ActionProps = $props();
</script>

<FormCard
    imageSrc="https://www.multipure.com/product_images/uploaded_images/family-double-piggyback-small.jpg"
    title="2026 Church Family Camp Registration"
    bind:card
    {active}
    {visited}
    {onnext}
>
    <p>Welcome! We're very excited that you'd like to register for the Newcastle Central Presbyterian Church Family Camp in 2026!</p>
    <p>Follow the prompts to fill out the registration form. Fields marked with an asterisk (*) are required.</p>
</FormCard>