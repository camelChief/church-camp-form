<script lang="ts">
    let partySize = $state('');
    let accommodationStyle = $state('default');
    let accommodationType = $state('');
    let accomSelectDisabled = $derived(parseInt(partySize || '0') < 1);
    let cabinOptionDisabled = $derived(parseInt(partySize) > 7);
    let bunkOptionDisabled = $derived(parseInt(partySize) > 9);
</script>

<div class="card bg-base-100 shadow-sm w-lg max-w-full">
    <div class="card-body gap-4">
        <h2 class="card-title">Accommodation</h2>
        <p>The cost of accommodation will display after you have filled-in the below fields.</p>
        
        <div class="divider"></div>

        <div class="flex flex-col">
            <label for="party-size" class="label">Party size</label>
            <input bind:value={partySize} id="party-size" type="number" class="input" min="1" max="10" />
            <p class="label mt-2 whitespace-normal">The number of people sharing your accommodation. Include yourself in the count, as well as your family members and any additional friends who will be bunking with you. Max 10.</p>
        </div>

        <div class="flex flex-col">
            <label for="accommodation-type" class="label">Accommodation type</label>
            <select bind:value={accommodationType} id="accommodation-type" class="select" disabled={accomSelectDisabled}>
                <option value="cabin" disabled={cabinOptionDisabled}>Cabin</option>
                <option value="bunk-room" disabled={bunkOptionDisabled}>Bunk Room</option>
                <option value="unit">Unit</option>
                <option value="powered-site">Powered Site</option>
            </select>
            <p class="label mt-2 whitespace-normal" style:display={cabinOptionDisabled ? 'block' : 'none'}>Some accommodation types are unavailable due to the size of your party.</p>
        </div>

        <!-- <div class="flex flex-col">
            <label for="accommodation-style" class="label">I will be staying...</label>
            <select bind:value={accommodationStyle} id="accommodation-style" class="select">
                <option value="default" disabled>Accommodation Style</option>
                <option value="solo">On my own</option>
                <option value="family">With my family</option>
                <option value="group">With some friends</option>
                <option value="family-group">With another family</option>
            </select>
        </div> -->

        <!-- <fieldset class="fieldset">
            <legend class="fieldset-legend">First name *</legend>
            <input bind:value={firstName} type="text" class="input" placeholder="First name" />
        </fieldset>
        
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Surname *</legend>
            <input bind:value={surname} type="text" class="input" placeholder="Surname" />
        </fieldset>

        <fieldset class="fieldset">
            <legend class="fieldset-legend">Email address *</legend>
            <input bind:value={email} type="email" class="input" placeholder="Email address" />
        </fieldset>
        
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Mobile number</legend>
            <input bind:value={mobile} type="tel" class="input" placeholder="Mobile number" />
        </fieldset> -->

        <div class="flex flex-row self-end gap-2 mt-8">
            <a href="/personal-details" class="btn">Back</a>
            <a href="/old" class="btn btn-primary">Next</a>
        </div>
    </div>
</div>