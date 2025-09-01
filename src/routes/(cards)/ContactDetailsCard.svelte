<script lang="ts">
    import type { ActionProps } from '$lib/FormCard.svelte';
    import FormCard from '$lib/FormCard.svelte';

    let { card, active, visited, onback, onnext }: ActionProps = $props();

    let firstName = $state('');
    let surname = $state('');
    let email = $state('');
    let mobile = $state('');
</script>

<FormCard
    title="Contact Details"
    bind:card
    {active}
    {visited}
    {onback}
    {onnext}
>
    <div class="flex gap-2">
        <div>
            <label for="first-name" class="label">First Name *</label>
            <input bind:value={firstName} id="first-name" type="text" class="input" disabled={!active} />
        </div>
        <div>
            <label for="surname" class="label">Surname *</label>
            <input bind:value={surname} id="surname" type="text" class="input" disabled={!active} />
        </div>
    </div>

    <div>
        <label for="email" class="label">Email Address</label>
        <input bind:value={email} id="email" type="email" class="input w-full" disabled={!active} />
    </div>

    <div class="flex flex-col">
        <label for="mobile" class="label">Mobile Number *</label>
        <input bind:value={mobile} id="mobile" type="tel" class="input" disabled={!active} />
    </div>

    <!-- <label class="label whitespace-normal mt-4">
        <input type="checkbox" bind:checked={registerFamily} class="checkbox" />
        I would like to register my spouse or family also.
    </label> -->
</FormCard>