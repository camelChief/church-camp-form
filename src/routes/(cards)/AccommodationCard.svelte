<script lang="ts">
    import FormCard, { type ActionProps } from "$lib/FormCard.svelte";
    import { Tent } from "@lucide/svelte";

    let { card, active, visited, onback, onnext }: ActionProps = $props();

    let partySize = $state('');
    let accommodationType = $state('');
    let accomSelectDisabled = $derived(parseInt(partySize || '0') < 1);
    let cabinOptionDisabled = $derived(parseInt(partySize) > 7);
    let bunkOptionDisabled = $derived(parseInt(partySize) > 9);
    let displayAccommodationCosts = $derived(parseInt(partySize) > 0 && accommodationType !== '');

    let totalCost = $derived.by(() => {
        let baseCost = 276;
        if (accommodationType === 'bunk-room') baseCost = 144;
        else if (accommodationType === 'powered-site') baseCost = 78;
        return (parseInt(partySize) - 2) * 30 + baseCost;
    });

    let perPersonCost = $derived(Math.ceil(totalCost / parseInt(partySize)))
</script>

<FormCard
    Icon={Tent}
    title="Accommodation"
    bind:card
    {active}
    {visited}
    {onback}
    {onnext}
>
    <p>More information can be found on the <a href="https://www.campelim.org.au/accommodation-and-sites" target="_blank" class="link">Camp Elim website</a>, but the key differences between the accommodation types are:</p>
    <ul class="list-disc pl-4">
        <li><strong>Powered Site</strong> - campsite, shared camp bathroom + fridge</li>
        <li><strong>Bunk Room</strong> - private bathroom, shared camp fridge, sleeps 9</li>
        <li><strong>Lakeside Cabin</strong> - private kitchen, bathroom + living space, sleeps 7</li>
        <li><strong>Family Room</strong> - private kitchenette, bathroom + living space, sleeps 13</li>
    </ul>
    <p class="mb-4">Fill out the fields below to select your cabin preference and get a cost estimate for accommodation (a final, accurate cost will be provided at the end of the form).</p>

    <div class="flex flex-col">
        <label for="party-size" class="label">Party Size</label>
        <input bind:value={partySize} id="party-size" type="number" class="input" min="1" max="13" />
        <p class="label mt-2 whitespace-normal">The number of people sharing your accommodation. Include yourself in the count, as well as your family members and any additional friends who will be bunking with you. Max 13.</p>
    </div>

    <div class="flex flex-col">
        <label for="accommodation-type" class="label">Accommodation Type</label>
        <select bind:value={accommodationType} id="accommodation-type" class="select" disabled={accomSelectDisabled}>
            <option value="powered-site">Powered Site</option>
            <option value="bunk-room" disabled={bunkOptionDisabled}>Bunk Room</option>
            <option value="cabin" disabled={cabinOptionDisabled}>Lakeside Cabin</option>
            <option value="family-room">Family Room</option>
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
                <div class="stat-desc whitespace-normal">For a {accommodationType} for {partySize} people for the weekend</div>
            </div>

            <div class="stat">
                <div class="stat-title">Cost Per Person</div>
                <div class="stat-value text-secondary">${perPersonCost}</div>
                <div class="stat-desc whitespace-normal">For adult groups splitting costs</div>
            </div>
        </div>
    {/if}
</FormCard>