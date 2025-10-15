<script lang="ts">
	import {
		EXPECTED_PARTICIPANTS,
		RATES,
		SATURDAY_DINNER_RATE,
	} from '$lib/consts';
	import type { AccommodationCosts, FormValues } from '$lib/types';
	import { X } from '@lucide/svelte';

	let {
		formValues,
		accommodationCosts,
	}: {
		formValues: FormValues;
		accommodationCosts: AccommodationCosts;
	} = $props();

	const totalCosts = $derived(accommodationCosts!.total);
	const myTotalCosts = $derived(accommodationCosts!.split);
	const bunkmates = $derived(formValues.sharingWith === 'friends');

	const familySize = $derived(
		formValues.payingFor === 'family' ? formValues.familyMembers.length + 1 : 1
	);

	const lakesideHallRate = $derived(
		(RATES.nightly.lakesideHall * 2) / EXPECTED_PARTICIPANTS
	);

	// const lakesideHallTotal = $derived(lakesideHallRate * familySize);
	const saturdayDinnerTotal = $derived(SATURDAY_DINNER_RATE * familySize);

	const toCost = (cost: number): string => (cost ? `$${cost}` : '-');
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
					<col style="min-width: 8rem" />
					<col />
					<col />
					<col />
					<col style="min-width: 6rem;" />
				</colgroup>
				<tbody>
					<tr class="bg-base-200">
						<th>Item</th>
						<th>Rate</th>
						<th>Qty</th>
						<th>Subtotal</th>
						{#if bunkmates}
							<th>Your Share</th>
						{/if}
					</tr>
					<tr class="bg-base-200">
						<td colspan={bunkmates ? 5 : 4}>
							<strong>Accommodation</strong><br />
							{#if bunkmates}
								Subtotal is calculated based on all occupants and is then split
								into individual shares. You only need to pay your share.
							{/if}
						</td>
					</tr>
					<tr>
						<td>{formValues.preferredAccommodationType}</td>
						<td>{toCost(totalCosts.nightly.room)}</td>
						<td>1</td>
						<td class={{ 'bg-primary/5': !bunkmates }}
							>{toCost(totalCosts.nightly.room)}</td
						>
						{#if bunkmates}
							<td class="bg-primary/5">{toCost(myTotalCosts.nightly.room)}</td>
						{/if}
					</tr>
					<tr>
						<td>Extra Adult</td>
						<td>{toCost(RATES.nightly.additionalAdult)}</td>
						<td>{accommodationCosts!.additionalAdults || '-'}</td>
						<td class={{ 'bg-primary/5': !bunkmates }}
							>{toCost(totalCosts.nightly.additionalAdults)}</td
						>
						{#if bunkmates}
							<td class="bg-primary/5"
								>{toCost(myTotalCosts.nightly.additionalAdults)}</td
							>
						{/if}
					</tr>
					<tr>
						<td>Extra Child</td>
						<td>{toCost(RATES.nightly.additionalChild)}</td>
						<td>{accommodationCosts!.additionalChildren || '-'}</td>
						<td class={{ 'bg-primary/5': !bunkmates }}
							>{toCost(totalCosts.nightly.additionalChildren)}</td
						>
						{#if bunkmates}
							<td class="bg-primary/5"
								>{toCost(myTotalCosts.nightly.additionalChildren)}</td
							>
						{/if}
					</tr>
					<tr>
						<th colspan="3">Per Night</th>
						<th class={{ 'bg-primary/5': !bunkmates }}
							>{toCost(totalCosts.nightly.total)}</th
						>
						{#if bunkmates}
							<th class="bg-primary/5">{toCost(myTotalCosts.nightly.total)}</th>
						{/if}
					</tr>
					<tr>
						<th colspan="3"
							>Total ({accommodationCosts!.nights} Night{accommodationCosts!
								.nights !== 1
								? 's'
								: ''})</th
						>
						<th class={{ 'bg-primary/5 border border-primary': !bunkmates }}
							>{toCost(totalCosts.total)}</th
						>
						{#if bunkmates}
							<th class="bg-primary/5 border border-primary"
								>{toCost(myTotalCosts.total)}</th
							>
						{/if}
					</tr>
					<tr class="bg-base-200">
						<td colspan={bunkmates ? 5 : 4}>
							<strong>Shared</strong><br />
							<!-- The Lakeside Hall booking cost is estimated based on expected attendance. -->
							Saturday dinner is a per-person contribution.
						</td>
					</tr>
					<!-- <tr>
						<td>Lakeside Hall</td>
						<td>{toCost(lakesideHallRate)}</td>
						<td>{familySize}</td>
						<td></td>
						<td class="bg-primary/5">
							{toCost(lakesideHallTotal)}
						</td>
					</tr> -->
					<tr>
						<td>Saturday Dinner</td>
						<td>{toCost(SATURDAY_DINNER_RATE)}</td>
						<td>{familySize}</td>
						{#if bunkmates}<td></td>{/if}
						<td class="bg-primary/5">
							{toCost(saturdayDinnerTotal)}
						</td>
					</tr>
					<tr>
						<th colspan={bunkmates ? 4 : 3}>Total</th>
						<th class="bg-primary/5 border border-primary">
							{toCost(formValues.costs.sharedTotal)}
						</th>
					</tr>
					<tr>
						<th colspan={bunkmates ? 4 : 3}>Grand Total</th>
						<th class="bg-primary border border-primary text-primary-content">
							{toCost(formValues.costs.grandTotal)}
						</th>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</dialog>
