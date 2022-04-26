
<script>
	import { onMount } from 'svelte'
	import Search from './components/Search.svelte'
	import { getSummonerInformation } from './utils'

	const handleSearch = async function(e){	
		let {region, summoner} = e.detail;
		let result;;
	}

	onMount(async () => {
		getSummonerInformation('na1','birdwench')
	})

</script>

<div class="flex items-center justify-center w-full h-full mx-auto">
	<Search on:searchEvent={handleSearch}/>
</div>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  /* body{
	  padding:0px;
  } */
</style>
	