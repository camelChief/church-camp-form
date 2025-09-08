<script lang="ts">
    import { EXPECTED_PARTICIPANTS, RATES, SATURDAY_DINNER_RATE } from "$lib/consts";
    import type { AccommodationCosts, FormState } from "$lib/types";
    import { X } from "@lucide/svelte";

    let {
        formState,
        accommodationCosts,
    }: {
        formState: FormState,
        accommodationCosts: AccommodationCosts
    } = $props();

    const totalCosts = $derived(accommodationCosts!.total);
    const myTotalCosts = $derived(accommodationCosts!.split);
    const familySize = $derived(formState.familyMembers.length + 1);
    const lakesideHallRate = $derived(RATES.nightly.lakesideHall * 2 / EXPECTED_PARTICIPANTS);
    const lakesideHallTotal = $derived(lakesideHallRate * familySize);
    const saturdayDinnerTotal = $derived(SATURDAY_DINNER_RATE * familySize);

    const toCost = (cost: number): string => cost ? `$${cost}` : '-';
</script>

<dialog id="costBreakdownModal" class="modal">
    <div class="modal-box">
        <form method="dialog">
            <button class="btn btn-sm btn-square btn-ghost absolute right-4 top-4">
                <X size={16} />
            </button>
        </form>
        <h3 class="text-lg font-bold mb-4">Cost Breakdown</h3>
        <div class="overflow-x-auto rounded-box border border-base-300">
            <table class="table table-sm sm:table-md">
                <colgroup>
                    <col style="min-width: 8rem">
                    <col>
                    <col>
                    <col>
                    <col style="min-width: 6rem;">
                </colgroup>
                <tbody>
                    <tr class="bg-base-200">
                        <th>Item</th>
                        <th>Rate</th>
                        <th>Qty</th>
                        <th>Subtotal</th>
                        <th>Your Share</th>
                    </tr>
                    <tr class="bg-base-200">
                        <td colspan="5">
                            <strong>Accommodation</strong><br>
                            Subtotal is calculated based on all occupants and is then split into individual shares. You only need to pay your share.
                        </td>
                    </tr>
                    <tr>
                        <td>{formState.preferredAccommodationType}</td>
                        <td>{toCost(totalCosts.nightly.room)}</td>
                        <td>1</td>
                        <td>{toCost(totalCosts.nightly.room)}</td>
                        <td class="bg-primary/5">{toCost(myTotalCosts.nightly.room)}</td>
                    </tr>
                    <tr>
                        <td>Extra Adult</td>
                        <td>{toCost(RATES.nightly.additionalAdult)}</td>
                        <td>{accommodationCosts!.additionalAdults || '-'}</td>
                        <td>{toCost(totalCosts.nightly.additionalAdults)}</td>
                        <td class="bg-primary/5">{toCost(myTotalCosts.nightly.additionalAdults)}</td>
                    </tr>
                    <tr>
                        <td>Extra Child</td>
                        <td>{toCost(RATES.nightly.additionalChild)}</td>
                        <td>{accommodationCosts!.additionalChildren || '-'}</td>
                        <td>{toCost(totalCosts.nightly.additionalChildren)}</td>
                        <td class="bg-primary/5">{toCost(myTotalCosts.nightly.additionalChildren)}</td>
                    </tr>
                    <tr>
                        <th colspan="3">Per Night</th>
                        <th>{toCost(totalCosts.nightly.total)}</th>
                        <th class="bg-primary/5">{toCost(myTotalCosts.nightly.total)}</th>
                    </tr>
                    <tr>
                        <th colspan="3">Total ({accommodationCosts!.nights} Night{accommodationCosts!.nights !== 1 ? 's' : ''})</th>
                        <th>{toCost(totalCosts.total)}</th>
                        <th class="bg-primary/5 border border-primary">{toCost(myTotalCosts.total)}</th>
                    </tr>
                    <tr class="bg-base-200">
                        <td colspan="5">
                            <strong>Shared</strong><br>
                            The Lakeside Hall booking cost is estimated based on expected attendance. Saturday dinner is a per-person contribution.
                        </td>
                    </tr>
                    <tr>
                        <td>Lakeside Hall</td>
                        <td>{toCost(lakesideHallRate)}</td>
                        <td>{familySize}</td>
                        <td></td>
                        <td class="bg-primary/5">
                            {toCost(lakesideHallTotal)}
                        </td>
                    </tr>
                    <tr>
                        <td>Saturday Dinner</td>
                        <td>{toCost(SATURDAY_DINNER_RATE)}</td>
                        <td>{familySize}</td>
                        <td></td>
                        <td class="bg-primary/5">
                            {toCost(saturdayDinnerTotal)}
                        </td>
                    </tr>
                    <tr>
                        <th colspan="4">Total</th>
                        <th class="bg-primary/5 border border-primary">
                            {toCost(formState.costs.sharedTotal)}
                        </th>
                    </tr>
                    <tr>
                        <th colspan="4">Grand Total</th>
                        <th class="bg-primary border border-primary text-primary-content">
                            {toCost(formState.costs.grandTotal)}
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</dialog>