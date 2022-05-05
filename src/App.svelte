<script>
  import { onMount } from 'svelte'
  import { slide, fade } from 'svelte/transition'

  import Card from './components/Card.svelte'

  let loaded = false;
  onMount(async () => {
    loaded = true;
  })
</script>

<main>
  {#if loaded}
    <div class="container box-border flex mx-auto py-8 mt-4 sm:w-[1024px] max-w-5xl content-center rounded-md">
      <div class="text-4xl text-orange-600 nameplate p-0"in:fade={{duration:1000,delay:500}}>TYLER TOOMEY</div>
      <div class="ml-3 my-auto text-gray-600"in:fade={{duration:1000,delay:800}}>WebDev,&nbsp;</div>
      <div class="my-auto text-gray-600"in:fade={{duration:1000,delay:1400}}>Design,&nbsp;</div>
      <div class="my-auto text-gray-600"in:fade={{duration:1000,delay:2000}}> & More</div>

    </div>
    <div class="container box-border relative flex mx-auto px-4 py-8 pt-10 mt-4 sm:w-[1024px] max-w-5xl content-center rounded-md border-4 border-orange-600">
      <span class="absolute left-3 -top-3 bg-white mx-4 px-2 projects">PROJECTS</span>
      <Card 
      name={"SOFDLE"} 
      description={"SOFDLE is a wordle-like game. SOFDLE was made as a marketing tool for a musician's new single and was made using Svelte and TailwindCSS"}
      image={"./assets/sofdle.png"}></Card>
      <Card></Card>
    </div>
  {/if}


</main>	

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .nameplate {
    font-family: 'Comfortaa';
    padding:0;
    text-align:center;
    margin:auto;
  }

  .projects {
    font-family: 'Comfortaa';
    text-align:center;
  }

  @media (min-width: 768px){
    .nameplate {
      margin:0;
      text-align:left;
    }
  }

  /* body{
	  padding:0px;
  } */
</style>
	

