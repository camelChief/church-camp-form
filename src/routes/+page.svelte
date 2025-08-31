<script lang="ts">
    let partySize = $state('');
    let accommodationType = $state('');
    let accomSelectDisabled = $derived(parseInt(partySize || '0') <= 0);
    let cabinDisabled = $derived(parseInt(partySize) > 7);
    let bunkRoomDisabled = $derived(parseInt(partySize) > 9);
    let displayAccomSizeLimitWarning = $derived(parseInt(partySize) > 7);
    let displayAccommodationCosts = $derived(parseInt(partySize) > 0 && accommodationType !== '');
    
    let totalCost = $derived.by(() => {
        let baseCost = 480;
        if (accommodationType === 'bunk-room') baseCost = 210;
        else if (accommodationType === 'powered-site') baseCost = 150;
        return (parseInt(partySize) - 2) * 30 + baseCost;
    });

    let perPersonCost = $derived(Math.ceil(totalCost / parseInt(partySize)));
</script>

<div class="card bg-base-100 shadow-sm h-fit">
    <form class="card-body">
        <h2 class="card-title">2026 Church Family Camp Rego</h2>
        <p>Obviously this is not fleshed out (and it might be a little buggy ATM), but it didn't take me long to put together and could easily be extended to collect all the necessary data for camp. I just wanted to throw this together to show you that the issue with the registration form could be solved pretty simply with some code.</p>
        <p>This form links to a Google Sheet just like the standard Google Forms do, but I can create custom logic to simplify the registration process particularly around the costs.</p>
        <p>Again, just a proof of concept at this point, but fill out the form as if you were one of our church family trying to sign up and let me know what you think.</p>
        
        <div class="divider"></div>
        
        <fieldset class="fieldset">
            <legend class="fieldset-legend">First name</legend>
            <input type="text" class="input" placeholder="First name" />
        </fieldset>
        
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Surname</legend>
            <input type="text" class="input" placeholder="Surname" />
        </fieldset>
        
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Party size</legend>
            <input bind:value={partySize} type="number" class="input" placeholder="Party size" min="1" max="10" />
            <p class="label">The number of people you'd like to share accommodation with (max 10).</p>
        </fieldset>
        
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Accommodation type</legend>
            <select bind:value={accommodationType} class="select" disabled={accomSelectDisabled}>
                <option id="accom-default" disabled selected>Type</option>
                <option value="cabin" disabled={cabinDisabled}>Cabin</option>
                <option value="bunk-room" disabled={bunkRoomDisabled}>Bunk Room</option>
                <option value="unit">Unit</option>
                <option value="powered-site">Powered Site</option>
            </select>
            <p class="label" style:display={displayAccomSizeLimitWarning ? 'block' : 'none'}>Some accommodation types are unavailable due to the size of your party.</p>
        </fieldset>
        
        <fieldset class="fieldset" style:display={displayAccommodationCosts ? 'block' : 'none'}>
            <legend class="fieldset-legend">Accommodation costs</legend>
            <div class="stats shadow">
                <div class="stat">
                    <div class="stat-title">Total Cost</div>
                    <div class="stat-value text-primary">${totalCost}</div>
                    <div class="stat-desc">For a {accommodationType} for {partySize} people for the weekend</div>
                </div>

                <div class="stat">
                    <div class="stat-title">Cost Per Person</div>
                    <div class="stat-value text-secondary">${perPersonCost}</div>
                    <div class="stat-desc">For adult groups splitting costs</div>
                </div>
            </div>
        </fieldset>
        
        <button class="btn">Submit</button>
    </form>
</div>

<style>
    .card {
        max-height: calc(100% - 2rem);
        max-width: calc(100% - 2rem);
        overflow-y: auto;
        width: 24rem;
    }

    p.label {
        white-space: normal;
    }

    div.stat-desc {
        white-space: normal;
    }
</style>