<script lang="ts">
    import FormCard from "$lib/components/FormCard.svelte";
    import { ACCOMMODATION_COSTS, BUNK_ROOM_BEDS, LAKESIDE_CABIN_BEDS } from "$lib/consts";
    import type { CardProps } from "$lib/types";
    import { Tent } from "@lucide/svelte";

    let {
        formState = $bindable(),
        active,
        visited,
        onback,
        onnext,
    }: CardProps = $props();

    let stayingNights = $derived.by(() => {
        const arrivingFriday = formState.arrivalTime === 'friday evening';
        const departingSunday =
            formState.departureTime === 'sunday morning' ||
            formState.departureTime === 'sunday afternoon';

        let nightsCount = 0;
        if (arrivingFriday) nightsCount += 1;
        if (departingSunday) nightsCount += 1;
        return nightsCount;
    });

    let additionalAdults = $state('0');
    let additionalChildren = $state('0');
    let flatMates = $derived.by(() => {
        const adults = parseInt(additionalAdults || '0');
        const children = parseInt(additionalChildren || '0');
        return (adults + children) > 0;
    });

    let adultsCount = $derived.by(() => {
        const family = formState.familyMembers;
        let adults = family.filter(m => m.ageGroup === 'adult').length + 1;
        adults += parseInt(additionalAdults || '0');
        return adults;
    });

    let childrenCount = $derived.by(() => {
        const family = formState.familyMembers;
        let children = family.filter(m => m.ageGroup === 'child').length;
        children += parseInt(additionalChildren || '0');
        return children;
    });

    let partySize = $derived(adultsCount + childrenCount);
    let cabinOptionDisabled = $derived(partySize > LAKESIDE_CABIN_BEDS);
    let bunkOptionDisabled = $derived(partySize > BUNK_ROOM_BEDS);
    let displayAccommodationCosts = $derived(formState.preferredAccommodationType !== '');

    let accomCostPerNight = $derived.by(() => {
        const accommodationType = formState.preferredAccommodationType;
        const perNightCosts = ACCOMMODATION_COSTS.perNight;

        let accomCostPerNight = 0;
        switch (accommodationType) {
            case 'powered site':
                accomCostPerNight = perNightCosts.poweredSite;
                break;
            case 'bunk room':
                accomCostPerNight = perNightCosts.bunkRoom;
                break;
            case 'lakeside cabin':
                accomCostPerNight = perNightCosts.lakesideCabin;
                break;
            case 'family room':
                accomCostPerNight = perNightCosts.familyRoom;
                break;
            default:
                break;
        }
        
        return accomCostPerNight;
    });

    let totalCostPerNight = $derived.by(() => {
        const perNightCosts = ACCOMMODATION_COSTS.perNight;
        const adultPerNight = perNightCosts.additionalAdult;
        const adultsPerNightCost = adultsCount > 2 ? (adultsCount - 2) * adultPerNight : 0;
        const childPerNight = perNightCosts.additionalChild;
        const childrenPerNightCost = childrenCount * childPerNight;

        return accomCostPerNight + adultsPerNightCost + childrenPerNightCost;
    });

    let myCostPerNight = $derived.by(() => {
        if (!parseInt(additionalAdults || '0') && !parseInt(additionalChildren || '0')) return totalCostPerNight;
        const a = (accomCostPerNight / partySize) * (formState.familyMembers.length + 1);
        if (partySize <= 2) return a;
        const b = ((adultsCount - 2) * ACCOMMODATION_COSTS.perNight.additionalAdult / adultsCount) * formState.familyMembers.filter(m => m.ageGroup === 'adult').length;
        // const b = (formState.familyMembers.filter(m => m.ageGroup === 'adult').length ) * ACCOMMODATION_COSTS.perNight.additionalAdult;
        const c = formState.familyMembers.filter(m => m.ageGroup === 'child').length * ACCOMMODATION_COSTS.perNight.additionalChild;
        return a + b + c;
    });

    let totalCost = $derived(totalCostPerNight * stayingNights);
    let myTotalCost = $derived(myCostPerNight * stayingNights);

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

    <div class="flex flex-col gap-2">
        <p class="label whitespace-normal">Arrival/Departure</p>

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
        <p>
            The total cost of accommodation will be
            <strong>${totalCost}</strong>. (${totalCostPerNight}/night)
            {#if flatMates}
                <br>Your share of that cost will be
                <strong>${myTotalCost}</strong>. (${myCostPerNight}/night)
            {/if}
        </p>
    {/if}
</FormCard>