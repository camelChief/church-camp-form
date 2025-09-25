<script lang="ts">
    import FormCard from "$lib/components/FormCard.svelte";
    import { ACCOMMODATION_TYPES, ARRIVAL_TIMES, DEPARTURE_TIMES } from "$lib/consts";
    import type { CardProps, FormControl } from "$lib/types";
    import { required } from "$lib/validators";
    import { Tent } from "@lucide/svelte";

    let {
        formValues = $bindable(),
        accommodationCosts,
        calculateCosts,
        active,
        visited,
        onback,
        onnext,
    }: CardProps = $props();

    const bunkmates = $derived.by(() => {
        return (formValues.additionalAdults || 0) +
            (formValues.additionalChildren || 0);
    });

    const partySize = $derived.by(() => {
        return formValues.familyMembers.length + 1 + bunkmates;
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
    title="Who I'm Staying With"
    controls={Object.values(formControls)}
    {active}
    {visited}
    {onback}
    {onnext}
>
    <p>
        Please select the option that best describes your accommodation
        situation. Camp Elim prices their accommodation based on the number of adults and
        children sharing a room, hence the need to provide this information to
        calculate your costs.
    </p>

    <p>
        If you are happy to share your accommodation but have not organised
        a group yourself, select the fifth option. If there are others who are
        also looking for a bunkmate, you may be put together (we'll contact you
        first to discuss). You will receive a cost estimate for camp, but the
        final price will be calculated and communicated to you after
        registration closes.
    </p>

    <p class="mb-2">
        The more bunkmates you have, the cheaper the cost will be per person!
    </p>

    <div class="flex flex-col gap-2">
        <p class="label">I will be staying...</p>

        <div class="flex gap-2">
            <input type="radio" id="by-myself" bind:group={formValues.accommodationSharing} value="by-myself" class="radio" />
            <label for="by-myself">By myself</label>
        </div>
        <div class="flex gap-2">
            <input type="radio" id="with-family" bind:group={formValues.accommodationSharing} value="with-family" class="radio" />
            <label for="with-family">With my spouse/family</label>
        </div>
        <div class="flex gap-2">
            <input type="radio" id="with-friends" bind:group={formValues.accommodationSharing} value="with-friends" class="radio" />
            <div class="flex flex-col">
                <label for="with-friends">With some friends</label>
                <span class="label text-xs whitespace-normal">I've organised a group who I will share my accommodation with. I will only be paying for myself.</span>
            </div>
        </div>
        <div class="flex gap-2">
            <input type="radio" id="with-family-and-friends" bind:group={formValues.accommodationSharing} value="with-family-and0friends" class="radio" />
            <div class="flex flex-col">
                <label for="with-family-and-friends">With my spouse/family and some friends</label>
                <span class="label text-xs whitespace-normal">I've organised a group who I will share my accommodation with. I will only be paying for myself and my family.</span>
            </div>
        </div>
        <div class="flex gap-2">
            <input type="radio" id="with-others" bind:group={formValues.accommodationSharing} value="with-others" class="radio" />
            <div class="flex flex-col">
                <label for="with-others">With others maybe?</label>
                <span class="label text-xs whitespace-normal">I haven't organised a group, but I'm happy to share my accommodation. I will only be paying for myself.</span>
            </div>
        </div>
    </div>
</FormCard>
