<script lang="ts">
    import type { ActionProps } from "$lib/FormCard.svelte";
    import { tick, type Component } from "svelte";
    import ContactDetailsCard from "./(cards)/ContactDetailsCard.svelte";
    import FamilyDetailsCard from "./(cards)/FamilyDetailsCard.svelte";
    import WelcomeCard from "./(cards)/WelcomeCard.svelte";
  import AccommodationCard from "./(cards)/AccommodationCard.svelte";

    interface Step {
        id: string;
        Component: Component<ActionProps>;
        card?: HTMLDivElement;
        prevId?: string;
        nextId?: string;
        visited: boolean;
    }

    const steps: Step[] = $state([
        {
            id: 'welcome',
            Component: WelcomeCard,
            nextId: 'contact-details',
            visited: true,
        },
        {
            id: 'contact-details',
            Component: ContactDetailsCard,
            prevId: 'welcome',
            nextId: 'family-details',
            visited: false
        },
        {
            id: 'family-details',
            Component: FamilyDetailsCard,
            prevId: 'contact-details',
            nextId: 'accommodation',
            visited: false
        },
        {
            id: 'accommodation',
            Component: AccommodationCard,
            prevId: 'family-details',
            visited: false
        }
    ]);
    
    let activeStepId: string = $state('welcome');

    async function visitStep(id: string, index: number) {
        activeStepId = id;
        const step = steps.find(s => s.id === id)!;
        step.visited = true;
        await tick();

        let a = document.getElementsByClassName('scroll-catch')[index];
        a.scrollIntoView({ behavior: 'smooth' });
    }
</script>

<div class="flex flex-col items-center gap-4 p-4">
    {#each steps as step, i}
        <step.Component
            bind:card={steps[i].card}
            active={step.id === activeStepId}
            visited={step.visited}
            onback={step.prevId ? () => visitStep(step.prevId!, i - 1) : undefined}
            onnext={step.nextId ? () => visitStep(step.nextId!, i + 1) : undefined}
        />
    {/each}
</div>