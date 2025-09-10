<script lang="ts">
    import FormCard from '$lib/components/FormCard.svelte';
    import type { CardProps, FormControl } from '$lib/types';
    import { emailAddress, mobileNumber, required } from '$lib/validators';
    import { Contact } from '@lucide/svelte';

    let {
        formState = $bindable(),
        active,
        visited,
        onback,
        onnext,
    }: CardProps = $props();

    const formControls: { [id: string]: FormControl } = $state({
        'given-name': {
            field: null,
            type: 'input',
            validators: [required],
        },
        'family-name': {
            field: null,
            type: 'input',
            validators: [required],
        },
        'email-address': {
            field: null,
            type: 'input',
            validators: [required, emailAddress],
        },
        'mobile-number': {
            field: null,
            type: 'input',
            validators: [required, mobileNumber],
        },
    });
</script>

<FormCard
    Icon={Contact}
    title="Your Details"
    controls={Object.values(formControls)}
    {active}
    {visited}
    {onback}
    {onnext}
>
    <div class="flex gap-2">
        <div class="flex flex-col gap-1">
            <label for="given-name" class="label">Given Name</label>
            <input
                type="text"
                id="given-name"
                bind:this={formControls['given-name'].field}
                bind:value={formState.givenName}
                autocomplete="given-name"
                class="input"
            />
        </div>
        <div class="flex flex-col gap-1">
            <label for="family-name" class="label">Family Name</label>
            <input
                type="text"
                id="family-name"
                bind:this={formControls['family-name'].field}
                bind:value={formState.familyName}
                autocomplete="family-name"
                class="input"
            />
        </div>
    </div>

    <div class="flex flex-col gap-1">
        <label for="email-address" class="label">Email Address</label>
        <input
            type="email"
            id="email-address"
            bind:this={formControls['email-address'].field}
            bind:value={formState.emailAddress}
            autocomplete="email"
            class="input"
        />
    </div>

    <div class="flex flex-col gap-1">
        <label for="mobile-number" class="label">Mobile Number</label>
        <input
            type="tel"
            id="mobile-number"
            bind:this={formControls['mobile-number'].field}
            bind:value={formState.mobileNumber}
            autocomplete="tel"
            class="input"
        />
    </div>
</FormCard>