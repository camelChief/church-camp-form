<script lang="ts">
    import type { ActionProps } from '$lib/FormCard.svelte';
    import FormCard from '$lib/FormCard.svelte';
    import { Trash, Users } from '@lucide/svelte';

    let { card, active, visited, onback, onnext }: ActionProps = $props();
    let family: string[] = $state([]);

    const addFamilyMember = () => family.push('');
    const removeFamilyMember = (index: number) => family.splice(index, 1);
</script>

<FormCard
    Icon={Users}
    title="Family Details"
    bind:card
    {active}
    {visited}
    {onback}
    {onnext}
>
    <p class="mb-4">If you're bringing your family and would like to register them also, you can include them here.</p>
    
    {#each family as _, i}
        <div class="flex flex-col">
            <div class="join">
                <input id="family-member-{i}" type="text" bind:value={family[i]} class="input grow rounded-l" placeholder="First Name" />
                <button onclick={() => removeFamilyMember(i)} class="btn btn-error btn-square rounded-r">
                    <Trash size={16} />
                </button>
            </div>
        </div>
    {/each}

    <button onclick={addFamilyMember} class="btn btn-success self-end" disabled={!active}>Add Family Member</button>
</FormCard>