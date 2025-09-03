<script lang="ts">
  import { X } from "@lucide/svelte";
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
                        <td>Family Room</td>
                        <td>$138</td>
                        <td>1</td>
                        <td>$138</td>
                        <td class="bg-primary/5">$138</td>
                    </tr>
                    <tr>
                        <td>Extra Adult</td>
                        <td>$15</td>
                        <td>2</td>
                        <td>$30</td>
                        <td class="bg-primary/5">$15</td>
                    </tr>
                    <tr>
                        <td>Extra Child</td>
                        <td>$10</td>
                        <td>3</td>
                        <td>$30</td>
                        <td class="bg-primary/5">-</td>
                    </tr>
                    <tr>
                        <th colspan="3">Per Night</th>
                        <th>$198</th>
                        <th class="bg-primary/5">$84</th>
                    </tr>
                    <tr>
                        <th colspan="3">Total (2 Nights)</th>
                        <th>$396</th>
                        <th class="bg-primary/5 border border-primary">$168</th>
                    </tr>
                    <tr class="bg-base-200">
                        <td colspan="5">
                            <strong>Shared</strong><br>
                            The Lakeside Hall booking cost is estimated based on expected attendance. Saturday dinner is a per-person contribution.
                        </td>
                    </tr>
                    <tr>
                        <td>Lakeside Hall</td>
                        <td>$40</td>
                        <td>1</td>
                        <td></td>
                        <td class="bg-primary/5">$40</td>
                    </tr>
                    <tr>
                        <td>Saturday Dinner</td>
                        <td>$5</td>
                        <td>2</td>
                        <td></td>
                        <td class="bg-primary/5">$10</td>
                    </tr>
                    <tr>
                        <th colspan="4">Total</th>
                        <th class="bg-primary/5 border border-primary">$50</th>
                    </tr>
                    <tr>
                        <th colspan="4">Grand Total</th>
                        <th class="bg-primary border border-primary text-primary-content">$218</th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</dialog>