<script>
  import { onMount } from 'svelte'
  import { cubicInOut } from 'svelte/easing';
  import { slide, fade } from 'svelte/transition'

  import Container from './components/Container.svelte'
  import Card from './components/Card.svelte'
  let loaded = false;

  let showMore = false;
  let visible = 'invisible'


  onMount(async () => {
    loaded = true;
    
  })
</script>

<main>
  {#if loaded}
  <!-- HEADER -->
    <div class="container box-border flex mx-auto justify-center py-8 sm:w-[800px] max-w-5xl content-center rounded-md ">
      <p class="text-5xl text-orange-600 nameplate p-0 transition ease-in-out delay-100 hover:font-bold duration-1000"in:fade={{duration:300,delay:0}}>TYLER TOOMEY</p>
      <div class="flex w-96">
        <div class="ml-3 my-auto text-gray-600"in:fade={{duration:1000,delay:800}}>WebDev,&nbsp;</div>
        <div class="my-auto text-gray-600"in:fade={{duration:1000,delay:1400}}>Design,&nbsp;</div>
        <div class="my-auto text-gray-600"in:fade={{duration:1000,delay:2000}}> & More</div>
      </div>
    </div>
<!-- END HEADER -->
<!-- ABOUT ME -->

{#if loaded}
<div class="container box-border relative flex mx-auto px-4 py-4 mt-4 mb-10 sm:w-[800px] max-w-5xl content-center rounded-sm border-4 border-orange-600"
in:fade={{duration:1000, delay:500,easing:cubicInOut}}>
  <span class="absolute left-3 -top-3 bg-white mx-4 px-2 projects"
  >ABOUT ME</span>
  <img class="object-scale-down h-48 rounded-lg p-0 m-3 grayscale transition ease-in-out delay-150 group-hover:grayscale-0 duration-300 pb-0 z-50 " src={"./assets/me.jpeg"} alt=""/>
  <div class="p-5">
    <p class="text-base font-strong leading-relaxed mt-0 mb-4 text-orange-800">I'm a developer who enjoys developing useful and thoughtful web apps. My favorite technologies right now are SvelteJS, Typescript, GraphQL, & Vercel</p>
    <p class="text-base font-normal leading-relaxed mt-0 mb-4 text-slate-900">I'm passionate about language learning, design, and robotics — You can talk to me about any of those on my twitter <a href="https://twitter.com/barelyflexing" target="_blank">here</a></p>
    <p class="text-base font-normal leading-relaxed mt-0 mb-4 text-slate-900">
      You can find my GitHub <a href="https://github.com/TylerToomey" target="_blank">here</a>
    </p>
    
  </div>
</div>
{/if}
<!-- END ABOUT ME -->


<!-- PROJECTS -->
{#if loaded}
<div class=" relative container flex flex-wrap items-start overflow-hidden content-start projects box-border mx-auto max-w-5xl rounded-sm sm:w-[800px] "
in:fade={{duration:1000, delay:900,easing:cubicInOut}}>
  <div class="container flex flex-wrap items-start overflow-hidden content-start projects box-border mx-auto mb-24 px-4 pt-10 pb-16 mt-4 sm:w-[1200px] max-w-5xl rounded-sm border-4 border-orange-600 max-h-[580px]">
    <span class="absolute bg-white mt-[-53px] px-4 label">PROJECTS</span>
    <Card
      name={"SOFDLE"} 
      description={"SOFDLE is a wordle-like game. SOFDLE was made as a marketing tool for a musician's new single and was made using Svelte and TailwindCSS"}
      image={"./assets/sofdle.png"}
      link="https://sofdle.sofmusic.com"/>
    
    <Card
      name={"Change My Background"}
      description={"ChangeMyBackground is a simple web app built in Javascript using AWS and Vercel services. You can upload a picture which will then be automatically used as my iPhone's background image."}
      image={"./assets/noimage.png"}
      link={"https://www.youtube.com/watch?v=Tn8rJb0OIhc"}/>


    <div class="absolute z-30 bottom-12 right-[325px] bg-white  mx-auto text-center w-40">
      <button class="align-center text-center peer w-[120px] h-[40px] justify-center bg-slate-600 z-50 text-white hover:text-slate-600 font-semibold py-2 shadow-lg border-shale-600 border transition-transform ease-in-out duration-400 delay-150 hover:scale-105 hover:-translate-y-1 "
      on:click={()=>{showMore = !showMore}}
      on:mouseenter={()=>{visible='visible'}}
      on:mouseleave={()=>{visible='invisible'}}>
        <span class="align-center text-white mx-auto text-sm text-center nameplate justify-center align-middle">{showMore ? "Show Less" : "Show More"}</span>
      </button>
      
      <svg class="h-6 w-6 text-slate-600  mx-auto pt-2 opacity-0 peer-hover:animate-bounce peer-hover:opacity-100 delay-0 duration-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" transition:fade={{duration:1000}}>  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="6 9 12 15 18 9" /></svg>
    </div>

    </div>
  
    </div>
    {/if}
    <footer class="pb-1"></footer>
{/if}

</main>	

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .nameplate {
    margin:0;
    font-family: 'Comfortaa';
    padding:0;
    text-align:left;
  }

  
</style>
	

