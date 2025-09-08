<script lang="ts">
    import FormCard from '$lib/components/FormCard.svelte';
    import type { CardProps } from '$lib/types';
    import { Contact } from '@lucide/svelte';

    let {
        formState = $bindable(),
        active,
        visited,
        onback,
        onnext,
    }: CardProps = $props();
</script>

<FormCard
    Icon={Contact}
    title="Your Details"
    {active}
    {visited}
    {onback}
    {onnext}
>
    <div class="flex gap-2">
        <div class="flex flex-col gap-1">
            <label for="first-name" class="label">First Name</label>
            <input
                type="text"
                id="first-name"
                bind:value={formState.firstName}
                class="input"
            />
        </div>
        <div class="flex flex-col gap-1">
            <label for="surname" class="label">Surname</label>
            <input
                type="text"
                id="surname"
                bind:value={formState.surname}
                class="input"
            />
        </div>
    </div>

    <div class="flex flex-col gap-1">
        <label for="email" class="label">Email Address</label>
        <input type="email" id="email" bind:value={formState.emailAddress} class="input" />
    </div>

    <div class="flex flex-col gap-1">
        <label for="mobile" class="label">Mobile Number</label>
        <input type="tel" id="mobile" bind:value={formState.mobileNumber} class="input" />
    </div>
</FormCard>