<script lang="ts">
    import FormCard from "$lib/components/FormCard.svelte";
    import { ACCOMMODATION_COSTS, BUNK_ROOM_BEDS, LAKESIDE_CABIN_BEDS } from "$lib/consts";
    import type { CardProps } from "$lib/types";
    import { toCamelCase } from "$lib/utils";
    import { Tent } from "@lucide/svelte";

    let {
        formState = $bindable(),
        active,
        visited,
        onback,
        onnext,
    }: CardProps = $props();

    // the number of nights the user is staying
    let nightsCount = $derived.by(() => {
        const arrivingFriday = formState.arrivalTime === 'friday evening';
        const departingSunday =
            formState.departureTime === 'sunday morning' ||
            formState.departureTime === 'sunday afternoon';

        let nightsCount = 0;
        if (arrivingFriday) nightsCount += 1;
        if (departingSunday) nightsCount += 1;
        return nightsCount;
    });

    // whether the user is sharing their accommodation with others
    let bunkmates = $derived.by(() => {
        const adults = formState.additionalAdults || 0;
        const children = formState.additionalChildren || 0;
        return (adults + children) > 0;
    });

    // the total number of adults
    let adultsCount = $derived.by(() => {
        const family = formState.familyMembers;
        let adults = family.filter(m => m.ageGroup === 'adult').length + 1;
        adults += formState.additionalAdults || 0;
        return adults;
    });

    // the total number of children
    let childrenCount = $derived.by(() => {
        const family = formState.familyMembers;
        let children = family.filter(m => m.ageGroup === 'child').length;
        children += formState.additionalChildren || 0;
        return children;
    });

    // show or hide accommodation types based on party size
    let partySize = $derived(adultsCount + childrenCount);
    let cabinOptionDisabled = $derived(partySize > LAKESIDE_CABIN_BEDS);
    let bunkOptionDisabled = $derived(partySize > BUNK_ROOM_BEDS);

    // cost of accommodation per night
    let accomCostPerNight = $derived.by(() => {
        const perNightCosts = ACCOMMODATION_COSTS.perNight;
        const accommodationType = formState.preferredAccommodationType;
        const accomKey = toCamelCase(accommodationType) as keyof typeof perNightCosts;
        return perNightCosts[accomKey];
    });

    // cost per night for all occupants
    let costPerNight = $derived.by(() => {
        const perNightCosts = ACCOMMODATION_COSTS.perNight;
        const adultPerNightCost = perNightCosts.additionalAdult;
        const childPerNightCost = perNightCosts.additionalChild;
        const party = Array.from({ length: adultsCount }, () => "adult")
            .concat(Array.from({ length: childrenCount }, () => "child"));

        let costPerNight = accomCostPerNight;
        if (party.length <= 2) return costPerNight;

        party
            .slice(2)
            .forEach(member => {
                if (member === 'adult') costPerNight += adultPerNightCost;
                else if (member === 'child') costPerNight += childPerNightCost;
            });

        return costPerNight;
    });

    // cost per night for the user
    let myCostPerNight = $derived.by(() => {
        const perNightCosts = ACCOMMODATION_COSTS.perNight;
        const adultPerNightCost = perNightCosts.additionalAdult;
        const childPerNightCost = perNightCosts.additionalChild;

        const myAdultsCount = formState.familyMembers.filter(
            m => m.ageGroup === 'adult'
        ).length + 1;

        const myChildrenCount = formState.familyMembers.filter(
            m => m.ageGroup === 'child'
        ).length;

        let costPerNight = accomCostPerNight;
        const additionalAdults = adultsCount - 2;
        if (additionalAdults > 0)
            costPerNight += additionalAdults * adultPerNightCost;
        costPerNight = costPerNight / adultsCount * myAdultsCount;
        costPerNight += myChildrenCount * childPerNightCost;
        return Math.ceil(costPerNight);
    });

    // total costs
    let totalCost = $derived(costPerNight * nightsCount);
    let myTotalCost = $derived(myCostPerNight * nightsCount);
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
    <p>
        Fill out the fields below to select your accommodation preference and
        receive a cost estimate for your accommodation. Final costs will be
        provided at the end of the form.
    </p>

    <p class="mb-2">
        Camp Elim prices their accommodation based on the number of adults and
        children sharing a room, hence the need to provide these numbers to
        calculate your cost. The more bunkmates you have, the cheaper your
        accommodation will be!
    </p>

    <div class="flex flex-col gap-1">
        <p class="label whitespace-normal">Arrival/Departure</p>

        <label class="select mb-1">
            <span class="label">arrive</span>
            <select id="arrival-time" bind:value={formState.arrivalTime} class="select">
                <option value="friday evening">Friday Evening</option>
                <option value="saturday morning">Saturday Morning</option>
                <option value="saturday afternoon">Saturday Afternoon</option>
            </select>
        </label>

        <label class="select">
            <span class="label">depart</span>
            <select id="departure-time" bind:value={formState.departureTime} class="select">
                <option value="default" disabled>Departing</option>
                <option value="saturday afternoon">Saturday Afternoon</option>
                <option value="sunday morning">Sunday Morning</option>
                <option value="sunday afternoon">Sunday Afternoon</option>
            </select>
        </label>
    </div>
    
    <div class="flex flex-col gap-1">
        <p class="label whitespace-normal">
            {formState.familyMembers.length ? 'We' : 'I'}
            will be bunking with...
        </p>

        <div class="flex gap-2">
            <label class="input">
                <input
                    type="text"
                    id="adults-count"
                    bind:value={
                        () => formState.additionalAdults?.toString() || '',
                        (v) => formState.additionalAdults = v ? +v : null
                    }
                >
                <span class="label">adults</span>
            </label>

            <label class="input">
                <input
                    type="text"
                    id="children-count"
                    bind:value={
                        () => formState.additionalChildren?.toString() || '',
                        (v) => formState.additionalChildren = v ? +v : null
                    }
                >
                <span class="label">children</span>
            </label>
        </div>

        <p class="label whitespace-normal">
            Any additional families or individuals who will be sharing your
            accommodation with you. Exclude yourself
            {formState.familyMembers.length ? 'and your family' : ''}
            from the count.
        </p>
    </div>

    <div class="flex flex-col gap-1">
        <label for="accommodation-type" class="label">Accommodation Type</label>

        <select id="accommodation-type" bind:value={formState.preferredAccommodationType} class="select">
            <option value="powered site">Powered Site</option>
            <option value="bunk room" disabled={bunkOptionDisabled}>Bunk Room</option>
            <option value="lakeside cabin" disabled={cabinOptionDisabled}>Lakeside Cabin</option>
            <option value="family room">Family Room</option>
        </select>

        <p class="label whitespace-normal" class:hidden={!cabinOptionDisabled}>
            Some accommodation types are unavailable due to the size of your
            party.
        </p>
    </div>

    {#if formState.preferredAccommodationType}
        <p class="mt-4">
            The total cost of accommodation will be
            <strong>${totalCost}</strong>. (${costPerNight}/night)
            {#if bunkmates}
                <br>Your share of that cost will be
                <strong>${myTotalCost}</strong>. (${myCostPerNight}/night)
            {/if}
        </p>
    {/if}
</FormCard>