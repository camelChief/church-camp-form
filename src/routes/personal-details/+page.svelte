<script lang="ts">
    import { Trash } from '@lucide/svelte';

    let firstName = $state('');
    let surname = $state('');
    let email = $state('');
    let mobile = $state('');
    let family: string[] = $state(['']);

    let registerFamily = $state(false);

    const addFamilyMember = () => family.push('');
    const removeFamilyMember = (index: number) => family.splice(index, 1);
</script>

<div class="card bg-base-100 shadow-sm w-lg max-w-full">
    <div class="card-body gap-4">
        <h2 class="card-title">Personal Details</h2>
        
        <div class="flex gap-2">
            <div>
                <label for="first-name" class="label">First name *</label>
                <input bind:value={firstName} id="first-name" type="text" class="input" />
            </div>
            <div>
                <label for="surname" class="label">Surname *</label>
                <input bind:value={surname} id="surname" type="text" class="input" />
            </div>
        </div>

        <div>
            <label for="email" class="label">Email address *</label>
            <input bind:value={email} id="email" type="email" class="input w-full" />
        </div>

        <div class="flex flex-col">
            <label for="mobile" class="label">Mobile number</label>
            <input bind:value={mobile} id="mobile" type="tel" class="input" />
        </div>

        <label class="label whitespace-normal mt-4">
            <input type="checkbox" bind:checked={registerFamily} class="checkbox" />
            I would like to register my spouse or family also.
        </label>

        {#if registerFamily}
            <!-- <fieldset class="fieldset bg-base-200 border-base-300 rounded-box border p-4 mt-4">
                <legend class="fieldset-legend">Family Members</legend> -->

                
                <h2 class="card-title">Family Members</h2>

                {#each family as _, i}
                    <div class="join w-full">
                        <input
                            bind:value={family[i]}
                            id={`family-member-${i}`}
                            type="text"
                            class="input grow rounded-l"
                            placeholder="First name"
                        />
                        <button
                            class="btn btn-error btn-square rounded-r"
                            onclick={() => removeFamilyMember(i)}
                        >
                            <Trash size={16}/>
                        </button>
                    </div>
                {/each}

                <button class="btn btn-success mt-4" onclick={addFamilyMember}>Add family member</button>
            <!-- </fieldset> -->
        {/if}

        <div class="flex flex-row self-end gap-2 mt-8">
            <a href="/" class="btn">Back</a>
            <a href="/accommodation" class="btn btn-primary">Next</a>
        </div>
    </div>
</div>