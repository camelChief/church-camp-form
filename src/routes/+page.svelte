<script lang="ts">
    import type { FormState } from "$lib/types";
    import { tick } from "svelte";
    import AccommodationCard from "./(cards)/AccommodationCard.svelte";
    import FamilyDetailsCard from "./(cards)/FamilyDetailsCard.svelte";
    import OtherCard from "./(cards)/OtherCard.svelte";
    import SummaryCard from "./(cards)/SummaryCard.svelte";
    import WelcomeCard from "./(cards)/WelcomeCard.svelte";
    import YourDetailsCard from "./(cards)/YourDetailsCard.svelte";
  import { goto } from "$app/navigation";

    const steps = [
        WelcomeCard,
        YourDetailsCard,
        FamilyDetailsCard,
        AccommodationCard,
        OtherCard,
        SummaryCard,
    ];
    
    let stepIndex = $state(0);
    let formState: FormState = $state({
        firstName: '',
        surname: '',
        emailAddress: '',
        mobileNumber: '',
        familyMembers: [],
        arrivalTime: 'friday evening',
        departureTime: 'sunday afternoon',
        partySize: 0,
        preferredAccommodationType: '',
        costs: {
            accommodationTotal: 0,
            accommodationSplit: 0,
            sharedTotal: 0,
            grandTotal: 0,
        },
        dietaryRequirements: '',
        notes: '',
    });

    const onback = () => goToStep(stepIndex - 1);
    const onnext = () => goToStep(stepIndex + 1);
    const onsubmit = () => goto('/form-submitted');

    async function goToStep(index: number) {
        stepIndex = index;
        await tick();
        let scrollCatch = document.getElementsByClassName('scroll-catch')[index];
        scrollCatch.scrollIntoView({ behavior: 'smooth' });
    }
</script>

<div class="flex flex-col items-center gap-4 p-4">
    {#each steps as Step, i}
        <Step
            bind:formState
            active={i === stepIndex}
            visited={i < stepIndex}
            onback={i > 0 ? onback : undefined}
            onnext={i < steps.length - 1 ? onnext : undefined}
            onsubmit={i === steps.length - 1 ? onsubmit : undefined}
        />
    {/each}
</div>