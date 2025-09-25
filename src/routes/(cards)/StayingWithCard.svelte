<script lang="ts">
  import FormCard from "$lib/components/FormCard.svelte";
  import { PAYING_FOR_OPTIONS, SHARING_WITH_OPTIONS } from "$lib/consts";
  import type { CardProps, FormControl } from "$lib/types";
  import { required } from "$lib/validators";
  import { BedDouble } from "@lucide/svelte";

  let {
    formValues = $bindable(),
    active,
    visited,
    onback,
    onnext,
  }: CardProps = $props();

  const formControls: { [id: string]: FormControl } = $state({
    "accommodation-type": {
      field: null,
      type: "select",
      validators: [required],
    },
  });

  const singularPlural: {
    possessive: string;
    pronoun: string;
    pronounCaps: string;
    verb: string;
  } = $derived(
    !formValues.payingFor || formValues.payingFor === "myself"
      ? {
          possessive: "my",
          pronoun: "I",
          pronounCaps: "I",
          verb: "am",
        }
      : {
          possessive: "our",
          pronoun: "we",
          pronounCaps: "We",
          verb: "are",
        },
  );
</script>

<FormCard
  Icon={BedDouble}
  title="Who I'm Staying With"
  controls={Object.values(formControls)}
  {active}
  {visited}
  {onback}
  {onnext}
>
  <p class="mb-2">
    Please select the options that best describes your accommodation sharing
    situation. Camp Elim prices their accommodation based on the number of
    adults and children sharing a room, hence the need to provide this
    information to calculate your costs.
  </p>

  <!-- <p>
    If you are happy to share your accommodation but have not organised a group
    yourself, select the fifth option. If there are others who are also looking
    for a bunkmate, you may be put together (we'll contact you first to
    discuss). You will receive a cost estimate for camp, but the final price
    will be calculated and communicated to you after registration closes.
  </p> -->

  <div class="flex flex-col gap-2 mb-2">
    <p class="label">I am paying for accommodation for...</p>

    {#each PAYING_FOR_OPTIONS as option}
      <div class="flex gap-2">
        <input
          type="radio"
          id="paying-for-{option.value}"
          bind:group={formValues.payingFor}
          value={option.value}
          class="radio"
        />
        <label for="paying-for-{option.value}">{option.label}</label>
      </div>
    {/each}
  </div>

  <p class="mb-2">
    If you are splitting a room with some friends outside of your family (or
    would like to), you can specify that here. The costs of accommodation will
    be automatically calculated and split between all parties sharing a
    room/site. The more bunkmates you have, the cheaper the cost will be per
    person!
  </p>

  <div class="flex flex-col gap-2">
    <p class="label">
      {singularPlural.pronounCaps} will be sharing {singularPlural.possessive}
      accommodation with...
    </p>

    {#each SHARING_WITH_OPTIONS as option}
      <div class="flex gap-2">
        <input
          type="radio"
          id="sharing-with-{option.value}"
          bind:group={formValues.sharingWith}
          value={option.value}
          class="radio"
        />
        <div class="flex flex-col">
          <label for="sharing-with-{option.value}">{option.label}</label>
          <span class="label text-xs whitespace-normal">
            {#if option.value === "friends"}
              {singularPlural.pronounCaps}'ve organised a group of friends who
              {singularPlural.pronoun} will be sharing
              {singularPlural.possessive} accommodation with.
            {:else if option.value === "anyone"}
              {singularPlural.pronounCaps} have not organised a group, but
              {singularPlural.pronoun}
              {singularPlural.verb} willing to share
              {singularPlural.possessive} accommodation with others if needed.
            {/if}
          </span>
        </div>
      </div>
    {/each}
  </div>
</FormCard>
