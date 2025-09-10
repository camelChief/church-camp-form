<script lang="ts">
    import FormCard from "$lib/components/FormCard.svelte";
    import { ACCOMMODATION_TYPES, ARRIVAL_TIMES, DEPARTURE_TIMES } from "$lib/consts";
    import type { CardProps, FormControl } from "$lib/types";
    import { required } from "$lib/validators";
    import { Tent } from "@lucide/svelte";

    let {
        formState = $bindable(),
        accommodationCosts,
        calculateCosts,
        active,
        visited,
        onback,
        onnext,
    }: CardProps = $props();

    const bunkmates = $derived.by(() => {
        return (formState.additionalAdults || 0) +
            (formState.additionalChildren || 0);
    });

    const partySize = $derived.by(() => {
        return formState.familyMembers.length + 1 + bunkmates;
    });

    const accommodationOptionsHidden = $derived.by(() => {
        const roomSizes = ACCOMMODATION_TYPES.map(t => t.sleeps);
        return partySize > Math.min(...roomSizes);
    });

    const formControls: { [id: string]: FormControl } = $state({
        'accommodation-type': {
            field: null,
            type: 'select',
            validators: [required],
        },
    });
</script>

<FormCard
    Icon={Tent}
    title="Accommodation"
    controls={Object.values(formControls)}
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
                onchange={() => calculateCosts!()}
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
                onchange={() => calculateCosts!()}
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
                    oninput={() => calculateCosts!()}
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
                    oninput={() => calculateCosts!()}
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
            bind:this={formControls['accommodation-type'].field}
            bind:value={formState.preferredAccommodationType}
            onchange={() => calculateCosts!()}
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
            {#if bunkmates > 0}
                <br>Your share of that cost will be
                <strong>${accommodationCosts!.split.total}</strong>.
                (${accommodationCosts!.split.nightly.total}/night)
            {/if}
        </p>
    {/if}
</FormCard>