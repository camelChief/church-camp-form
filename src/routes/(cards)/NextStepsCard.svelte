<script lang="ts">
    import FormCard from '$lib/components/FormCard.svelte';
    import type { CardProps } from '$lib/types';
    import { Footprints } from '@lucide/svelte';

    let {
        formState = $bindable(),
        active,
        visited,
        onback,
        onnext,
    }: CardProps = $props();
</script>

<FormCard
    Icon={Footprints}
    title="Next Steps"
    {formState}
    {active}
    {visited}
    {onback}
    {onnext}
></FormCard>