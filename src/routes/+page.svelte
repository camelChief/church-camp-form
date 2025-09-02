<script lang="ts">
    import { tick } from "svelte";
    import AccommodationCard from "./(cards)/AccommodationCard.svelte";
    import ContactDetailsCard from "./(cards)/ContactDetailsCard.svelte";
    import FamilyDetailsCard from "./(cards)/FamilyDetailsCard.svelte";
    import WelcomeCard from "./(cards)/WelcomeCard.svelte";

    const steps = [
        WelcomeCard,
        ContactDetailsCard,
        FamilyDetailsCard,
        AccommodationCard,
    ];
    
    let stepIndex = $state(0);

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
            active={i === stepIndex}
            visited={i < stepIndex}
            onback={i > 0 ? () => goToStep(i - 1) : undefined}
            onnext={i < steps.length - 1 ? () => goToStep(i + 1) : undefined}
        />
    {/each}
</div>