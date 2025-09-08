<script lang="ts">
    import FormCard from "$lib/components/FormCard.svelte";
    import { ACCOMMODATION_TYPES, ARRIVAL_TIMES, DEPARTURE_TIMES, RATES } from "$lib/consts";
    import type { CardProps } from "$lib/types";
    import { Tent } from "@lucide/svelte";

    let {
        formState = $bindable(),
        accommodationCosts = $bindable(),
        active,
        visited,
        onback,
        onnext,
    }: CardProps = $props();

    // the number of nights the user is staying
    let nightsCount = $derived.by(() => {
        const arrivingFriday = formState.arrivalTime === 'Friday Evening';
        const departingSunday =
            formState.departureTime === 'Sunday Morning' ||
            formState.departureTime === 'Sunday Afternoon';

        let nightsCount = 0;
        if (arrivingFriday) nightsCount += 1;
        if (departingSunday) nightsCount += 1;
        return nightsCount;
    });

    // party size and restrictions
    let partySize = $state(1);
    let bunkmates = $state(false);
    let accommodationOptionsHidden = $derived.by(() => {
        const roomSizes = ACCOMMODATION_TYPES.map(t => t.sleeps);
        return partySize > Math.min(...roomSizes);
    });

    function calculateCosts(): void {
        if (!formState.preferredAccommodationType) {
            resetCosts();
            return;
        }

        // setup
        // get values to update
        const nightlyRates = accommodationCosts!.total.nightly;
        const myNightlyRates = accommodationCosts!.split.nightly;

        // get accommodation details
        const accommodation = ACCOMMODATION_TYPES.find(
            t => t.name === formState.preferredAccommodationType);

        // calculate party details
        const myChildrenCount = formState.familyMembers.filter(
            m => m.ageGroup === 'child').length;
        const myAdultsCount = formState.familyMembers.length - myChildrenCount + 1;
        let childrenCount = formState.additionalChildren || 0;
        let adultsCount = formState.additionalAdults || 0;
        bunkmates = (adultsCount + childrenCount) > 0;

        adultsCount += myAdultsCount;
        childrenCount += myChildrenCount;
        partySize = adultsCount + childrenCount;

        // calculate additional occupants (beyond 2)
        let additionalAdultsCount = adultsCount;
        let additionalChildrenCount = childrenCount;
        for (let i = 0; i < 2; i++) {
            if (additionalAdultsCount > 0) additionalAdultsCount--;
            else if (additionalChildrenCount > 0) additionalChildrenCount--;
        }

        // calculate nightly rates
        // nightly room rate
        nightlyRates.room = accommodation!.rate;
        myNightlyRates.room = accommodation!.rate;

        // nightly room rate for user if splitting
        if (bunkmates) {
            const perAdultRate = nightlyRates.room / adultsCount;
            myNightlyRates.room = Math.ceil(perAdultRate * myAdultsCount);
        }

        // nightly additional occupants rates
        accommodationCosts!.nights = nightsCount;
        accommodationCosts!.additionalAdults = additionalAdultsCount;
        accommodationCosts!.additionalChildren = additionalChildrenCount;
        nightlyRates.additionalAdults = additionalAdultsCount * RATES.nightly.additionalAdult;
        nightlyRates.additionalChildren = additionalChildrenCount * RATES.nightly.additionalChild;
        myNightlyRates.additionalAdults = nightlyRates.additionalAdults;
        myNightlyRates.additionalChildren = nightlyRates.additionalChildren;

        // nightly additional occupants rates for user if splitting
        if (bunkmates) {
            if (nightlyRates.additionalAdults) {
                const perAdult = nightlyRates.additionalAdults / adultsCount;
                myNightlyRates.additionalAdults = Math.ceil(perAdult * myAdultsCount);
            }

            if (nightlyRates.additionalChildren && childrenCount) {
                const perChild = nightlyRates.additionalChildren / childrenCount;
                myNightlyRates.additionalChildren = Math.ceil(perChild * myChildrenCount);
            }
        }

        // nightly rate
        nightlyRates.total =
            nightlyRates.room +
            nightlyRates.additionalAdults +
            nightlyRates.additionalChildren;

        // nightly rate for user
        myNightlyRates.total =
            myNightlyRates.room +
            myNightlyRates.additionalAdults +
            myNightlyRates.additionalChildren;

        // total costs
        accommodationCosts!.total.total = nightlyRates.total * nightsCount;
        accommodationCosts!.split.total = myNightlyRates.total * nightsCount;
    }

    function resetCosts(): void {
        accommodationCosts!.total = {
            nightly: {
                room: 0,
                additionalAdults: 0,
                additionalChildren: 0,
                total: 0,
            },
            total: 0,
        };

        accommodationCosts!.split = {
            nightly: {
                room: 0,
                additionalAdults: 0,
                additionalChildren: 0,
                total: 0,
            },
            total: 0,
        };
    }
</script>

<FormCard
    Icon={Tent}
    title="Accommodation"
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
            <select
                id="arrival-time"
                bind:value={formState.arrivalTime}
                onchange={() => calculateCosts()}
                class="select"
            >
                {#each ARRIVAL_TIMES as time}
                    <option value={time}>{time}</option>
                {/each}
            </select>
        </label>

        <label class="select">
            <span class="label">depart</span>
            <select
                id="departure-time"
                bind:value={formState.departureTime}
                onchange={() => calculateCosts()}
                class="select"
            >
                {#each DEPARTURE_TIMES as time}
                    <option value={time}>{time}</option>
                {/each}
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
                    oninput={() => calculateCosts()}
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
                    oninput={() => calculateCosts()}
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

        <select
            id="accommodation-type"
            bind:value={formState.preferredAccommodationType}
            onchange={() => calculateCosts()}
            class="select"
        >
            {#each ACCOMMODATION_TYPES as type}
                <option value={type.name} disabled={type.sleeps < partySize}>
                    {type.name}
                </option>
            {/each}
        </select>

        <p
            class="label whitespace-normal"
            class:hidden={!accommodationOptionsHidden}
        >
            Some accommodation types are unavailable due to the size of your
            party.
        </p>
    </div>

    {#if formState.preferredAccommodationType}
        <p class="mt-4">
            The total cost of accommodation will be
            <strong>${accommodationCosts!.total.total}</strong>.
            (${accommodationCosts!.total.nightly.total}/night)
            {#if bunkmates}
                <br>Your share of that cost will be
                <strong>${accommodationCosts!.split.total}</strong>.
                (${accommodationCosts!.split.nightly.total}/night)
            {/if}
        </p>
    {/if}
</FormCard>