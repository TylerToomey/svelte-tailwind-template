<script>
    import { createEventDispatcher } from 'svelte';
    import { slide } from 'svelte/transition'
    const dispatch = createEventDispatcher();

    let searchQuery = "", region = "";
    $:canSearch = searchQuery.length >=3 ;

    const search = function(event){
        dispatch('searchEvent', {
            summonerName:searchQuery,
            region:'na1'}) // TODO
    }
</script>

<div class="w-2/3">
    <div class="grid grid-cols-1 grid-rows-2 gap-1">
        <div class="max-w-lg min-w-[400px] justify-center mx-auto">
            <label for="summonername" class="block text-sm font-medium text-gray-700">Search</label>
            <div class="mt-1 relative rounded-md shadow-sm">

                <!-- ICON -->
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <img class="h-4 w-4" src="assets/lol.png" alt="logo">
                </div>

                <!-- INPUT -->
                <input type="text" 
                name="summonername" 
                id="summonername" 
                class="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-9 pl-10 
                pr-12 sm:text-sm border-gray-300 rounded-md" 
                placeholder="Enter summoner name..."
                bind:value={searchQuery}
                on:keypress|trusted|stopPropagation={(e)=>{e?.key=="Enter" ? search() : ''}}>

                <!-- DROPDOWN -->
                <div class="absolute inset-y-0 right-0 flex items-center">
                    <label for="region" class="sr-only">region</label>
                    <select id="region" name="region" class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7
                    border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                    <option>NA</option>
                    <option>EU</option>
                    <option>KR</option>
                    </select>
                </div>
            </div>
       </div>

       <div class="max-w-sm justify-content-center mx-auto">
            {#if canSearch}
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            type="button"
            transition:slide={{duration:200}}
            on:click={search}>Search</button>
            {/if}
        </div>
    </div>
</div>

<style>

</style>