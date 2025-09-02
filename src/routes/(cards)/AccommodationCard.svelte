<script lang="ts">
    import FormCard from "$lib/components/FormCard.svelte";
    import type { CardProps, Option } from "$lib/shared-types";
    import { Tent } from "@lucide/svelte";

    let {
        formState = $bindable(),
        active,
        visited,
        onback,
        onnext,
    }: CardProps = $props();

    let additionalAdults = $state('0');
    let additionalChildren = $state('0');

    let adultsCount = $derived.by(() => {
        const family = formState.familyMembers;
        let adults = family.filter(m => m.ageGroup === 'adult').length;
        adults += parseInt(additionalAdults || '0') + 1;
        return adults;
    });

    let childrenCount = $derived.by(() => {
        const family = formState.familyMembers;
        let children = family.filter(m => m.ageGroup === 'child').length;
        children += parseInt(additionalChildren || '0');
        return children;
    });

    let partySize = $derived(adultsCount + childrenCount);
    let cabinOptionDisabled = $derived(partySize > 7);
    let bunkOptionDisabled = $derived(partySize > 9);
    let displayAccommodationCosts = $derived(formState.preferredAccommodationType !== '');

    let totalCost = $derived.by(() => {
        let baseCost = 276;
        if (formState.preferredAccommodationType === 'bunk room') baseCost = 144;
        else if (formState.preferredAccommodationType === 'powered site') baseCost = 78;
        return (adultsCount - 2) * 30 + childrenCount * 20 + baseCost;
    });

    let perPersonCost = $derived(Math.ceil(totalCost / partySize))
</script>

<FormCard
    Icon={Tent}
    title="Accommodation"
    {formState}
    {active}
    {visited}
    {onback}
    {onnext}
>
    <!-- <p>More information can be found on the <a href="https://www.campelim.org.au/accommodation-and-sites" target="_blank" class="link">Camp Elim website</a>, but the key differences between the accommodation types are:</p>
    <ul class="list-disc pl-4">
        <li><strong>Powered Site</strong> - campsite, shared camp bathroom + fridge</li>
        <li><strong>Bunk Room</strong> - private bathroom, shared camp fridge, sleeps 9</li>
        <li><strong>Lakeside Cabin</strong> - private kitchen, bathroom + living space, sleeps 7</li>
        <li><strong>Family Room</strong> - private kitchenette, bathroom + living space, sleeps 13</li>
    </ul> -->
    <p class="mb-2">
        Fill out the fields below to select your accommodation preference and
        receive a cost estimate for your accommodation. A final total cost will
        be provided at the end of the form.
    </p>

    <!-- <div class="flex flex-col gap-2 mb-2">
        <p class="label whitespace-normal">I am paying for accommodation for...</p>
        {#each payingForOptions as option}
            <div class="flex gap-2">
                <input type="radio" id={option.value} bind:group={payingFor} value={option.value} class="radio">
                <label for={option.value} class="label">{option.label}</label>
            </div>
        {/each}
    </div> -->

    <div class="flex flex-col gap-2">
        <p class="label whitespace-normal">
            {formState.familyMembers.length ? 'We' : 'I'}
            will arrive and depart...
        </p>

        <label class="select">
            <span class="label">arrive</span>
            <select id="arrival" bind:value={formState.arrivalTime} class="select">
                <option value="friday evening">Friday Evening</option>
                <option value="saturday morning">Saturday Morning</option>
                <option value="saturday afternoon">Saturday Afternoon</option>
            </select>
        </label>

        <label class="select">
            <span class="label">depart</span>
            <select
                id="departure"
                bind:value={formState.departureTime}
                class="select"
            >
                <option value="default" disabled>Departing</option>
                <option value="saturday afternoon">Saturday Afternoon</option>
                <option value="sunday morning">Sunday Morning</option>
                <option value="sunday afternoon">Sunday Afternoon</option>
            </select>
        </label>
    </div>
    
    <div class="flex flex-col gap-2">
        <p class="label whitespace-normal">
            {formState.familyMembers.length ? 'We' : 'I'}
            will be sharing {formState.familyMembers.length ? 'our' : 'my'}
            accommodation with...
        </p>

        <div class="flex gap-2">
            <label class="input">
                <input
                    type="text"
                    id="adults-count"
                    bind:value={additionalAdults}
                >
                <span class="label">adults</span>
            </label>
            <label class="input">
                <input
                    type="text"
                    id="children-count"
                    bind:value={additionalChildren}
                >
                <span class="label">children</span>
            </label>
        </div>

        <p class="label whitespace-normal">
            Any additional families or individuals who will be bunking with
            you. Exclude yourself
            {formState.familyMembers.length ? 'and your family' : ''}
            from the count.
        </p>
    </div>

    <div class="flex flex-col">
        <label for="accommodation-type" class="label">Accommodation Type</label>
        <select bind:value={formState.preferredAccommodationType} id="accommodation-type" class="select">
            <option value="powered site">Powered Site</option>
            <option value="bunk room" disabled={bunkOptionDisabled}>Bunk Room</option>
            <option value="lakeside cabin" disabled={cabinOptionDisabled}>Lakeside Cabin</option>
            <option value="family room">Family Room</option>
        </select>
        <p class="label mt-2 whitespace-normal" style:display={cabinOptionDisabled ? 'block' : 'none'}>Some accommodation types are unavailable due to the size of your party.</p>
    </div>

    {#if displayAccommodationCosts}
        <div class="divider"></div>

        <h2 class="card-title">Accommodation Cost Estimate</h2>

        <div class="stats shadow">
            <div class="stat">
                <div class="stat-title">Total Cost</div>
                <div class="stat-value text-primary">${totalCost}</div>
                <div class="stat-desc whitespace-normal">For a {formState.preferredAccommodationType} for {partySize} people for the weekend</div>
            </div>

            <div class="stat">
                <div class="stat-title">Cost Per Person</div>
                <div class="stat-value text-secondary">${perPersonCost}</div>
                <div class="stat-desc whitespace-normal">For adult groups splitting costs</div>
            </div>
        </div>
    {/if}
</FormCard>