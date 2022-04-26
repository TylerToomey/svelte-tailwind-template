
<script>
	import { onMount } from 'svelte'
	import { slide } from 'svelte/transition'

	import Search from './components/Search.svelte'
	import Table from './components/Table.svelte'

	import { getSummonerInformation, getMastery } from './utils'

	let data = [];
	const handleSearch = async function(e){	
		let {region, summonerName} = e.detail;
		let summonerInfo = await getSummonerInformation(region,summonerName);
		data = await getMastery(summonerInfo?.id)
		console.log(data)
	}

	onMount(async () => {
	})

</script>

<div class="flex items-center justify-center w-full h-1/2 mx-auto">
	<Search on:searchEvent={handleSearch}/>
</div>

{#if data}
<div class="flex items-center justify-center w-full h-1/2 mx-auto" transition:slide={{duration:500}}>
	<Table {data}/>
</div>
{/if}

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  /* body{
	  padding:0px;
  } */
</style>
	