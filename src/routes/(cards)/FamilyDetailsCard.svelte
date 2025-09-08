<script lang="ts">
    import FormCard from '$lib/components/FormCard.svelte';
    import type { CardProps } from '$lib/types';
    import { Plus, Trash, Users } from '@lucide/svelte';

    let {
        formState = $bindable(),
        active,
        visited,
        onback,
        onnext,
    }: CardProps = $props();

    function addFamilyMember() {
        formState.familyMembers.push({ name: '', ageGroup: 'adult' });
    }

    function removeFamilyMember(index: number) {
        formState.familyMembers.splice(index, 1);
    }
</script>

<FormCard
    Icon={Users}
    title="Family Details"
    {active}
    {visited}
    {onback}
    {onnext}
>
    <p class="mb-2">
        If you're bringing your family and would like to register them also,
        you can include them here.
    </p>

    <table class="table table-xs">
        <thead>
            <tr>
                <th>First Name</th>
                <th>Age Group</th>
                <th class="w-1/100"></th>
            </tr>
        </thead>
        <tbody>
            {#each formState.familyMembers as _, i}
                <tr>
                    <td>
                        <input
                            type="text"
                            id="family-member-{i}-name"
                            bind:value={formState.familyMembers[i].name}
                            class="input"
                        />
                    </td>
                    <td>
                        <select
                            id="family-member-{i}-age"
                            bind:value={formState.familyMembers[i].ageGroup}
                            class="select"
                        >
                            <option value="adult">Adult</option>
                            <option value="child">Child (Under 18)</option>
                        </select>
                    </td>
                    <td>
                        <button
                            onclick={() => removeFamilyMember(i)}
                            class="btn btn-error btn-square">
                            <Trash size={16} />
                        </button>
                    </td>
                </tr>
            {/each}
            <tr>
                <td></td>
                <td></td>
                <td>
                    <button
                        onclick={addFamilyMember}
                        class="btn btn-success btn-square">
                        <Plus size={16} />
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</FormCard>