<script>
  import { onMount } from 'svelte'
  import { cubicInOut } from 'svelte/easing';
  import { slide, fade } from 'svelte/transition'

  import Container from './components/Container.svelte'
  import Card from './components/Card.svelte'
  let loaded = false;

  let showMore = false;
  let visible = false;

  $:full = "";
  $:showMore = false;

  function showMoreExpand(){
    showMore = !showMore
    showMore ? full = 'full' : full = '';
   setTimeout(() => {
    visible = !visible
   }, 2000);
  }

  onMount(async () => {
    loaded = true;
    
  })
</script>

<main>
  {#if loaded}
  <!-- HEADER -->
    <div class="container box-border grid columns-1 mx-auto justify-center py-8 pb-0 max-w-5xl content-center rounded-md ">
      <p class="text-5xl row text-center  text-orange-600 nameplate p-2 mt-0 pt-0 sm:px-0 sm:mx-0  transition ease-in-out delay-100 hover:font-bold duration-1000"in:fade={{duration:300,delay:0}}>TYLER TOOMEY</p>
      <p class="text-base row py-0 align-top text-center text-slate-600 ml-2">WebDev, Design, & more</p>
    </div>
<!-- END HEADER -->
<!-- ABOUT ME -->

{#if loaded}
<div class="container relative mx-auto py-5 mt-4 mb-10 max-w-4xl content-center rounded-sm border-4 border-orange-600 rounded-l-lg">
  <span class="absolute left-3 -top-3 bg-white mx-4 px-2 projects"
  >ABOUT ME</span>
  <img class="object-scale-down h-48 rounded-md grayscale float-left mx-4 my-auto p-2 " src={"./assets/me.jpeg"} alt=""/>
  <div class="p-5 ">
    <p class="text-small font-strong leading-loose mt-0 mb-4 text-orange-800">I'm a developer that enjoys developing fun, useful, and thoughtful web apps. My favorite technologies right now are SvelteJS, Typescript, GraphQL, & Vercel</p>
    <p class="text-small font-normal leading-loose mt-0 mb-4 text-slate-900">I'm passionate about language learning, design, and robotics — You can talk to me about any of those on my twitter <a href="https://twitter.com/barelyflexing" target="_blank">here</a>. You can find my GitHub <a href="https://github.com/TylerToomey" target="_blank">here</a>.
    </p>
    
  </div>
</div>
{/if}
<!-- END ABOUT ME -->


<!-- PROJECTS -->
{#if loaded}
<div class="relative container flex items-start overflow-y-auto sm:overflow-hidden content-start  mx-auto max-w-4xl rounded-sm">
  <div class="container flex flex-wrap items-start overflow-hidden content-start projects box-border mx-auto mb-24 px-4 pt-10 pb-16 mt-4 sm:w-[1200px] max-w-5xl rounded-sm border-4 border-orange-600 rounded-l-lg projects {full}">
    <span class="absolute bg-white mt-[-53px] px-4 label">PROJECTS</span>
    <Card
      name={"SOFDLE"} 
      description={"SOFDLE is a wordle-like game. SOFDLE was made as a marketing tool for a musician's new single and was made using Svelte and TailwindCSS"}
      image={"./assets/sofdle.png"}
      link="https://sofdle.sofmusic.com"
      z="50"/>
    
    <Card
      name={"Change My Background"}
      description={"ChangeMyBackground is a simple web app built in Javascript using AWS and Vercel services. You can upload a picture which will then be automatically used as my iPhone's background image."}
      image={"./assets/noimage.png"}
      link={"https://www.youtube.com/watch?v=Tn8rJb0OIhc"}
      z="50"/>

      <Card
      name={"Change My Background"}
      description={"ChangeMyBackground is a simple web app built in Javascript using AWS and Vercel services. You can upload a picture which will then be automatically used as my iPhone's background image."}
      image={"./assets/noimage.png"}
      link={"https://www.youtube.com/watch?v=Tn8rJb0OIhc"}
      z="0"/>

      <Card
      name={"Change My Background"}
      description={"ChangeMyBackground is a simple web app built in Javascript using AWS and Vercel services. You can upload a picture which will then be automatically used as my iPhone's background image."}
      image={"./assets/noimage.png"}
      link={"https://www.youtube.com/watch?v=Tn8rJb0OIhc"}
      z="0"/>


      <!-- SHOW MORE -->
    <div class="absolute p-1 pt-10 w-11/12 h-100 bottom-[100px] right-[40px] z-40 bg-white "></div>
    <div class="absolute p-1 pt-10 w-11/12 h-[100px] bottom-[130px] right-[40px] z-50 bg-gradient-to-t from-white"></div>
    <div class="sm:absolute bottom-12 z-40 py-2 display-none sm:display sm:right-10 sm:bottom-12  bg-white  mx-auto text-center w-40">
      <button class="align-center text-center peer w-[120px] h-[40px] justify-center bg-slate-600 z-50 text-white hover:text-slate-600 font-semibold py-2 shadow-lg border-shale-600 border transition-transform ease-linear duration-400 delay-150 hover:scale-105 hover:-translate-y-1 "
      on:click={showMoreExpand}>
        <span class="align-center text-white mx-auto text-sm text-center nameplate justify-center align-middle">{showMore ? "Show Less" : "Show More"}</span>
      </button>
      
      <!-- ARROW  -->
      <svg class="h-6 w-6 text-slate-600  mx-auto pt-2 animate-bounce sm:opacity-0 sm:peer-hover:animate-bounce sm:peer-hover:opacity-100 delay-0 duration-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" transition:fade={{duration:1000}}>  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="6 9 12 15 18 9" /></svg>
    </div>

    </div>
  
    </div>
    <!-- END SHOW MORE -->
    {/if}
    <footer class="pb-1"></footer>
{/if}

</main>	

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .nameplate {
    font-family: 'Comfortaa';
  }

  a {
    color:var(--tw);
    text-decoration-line: underline;
  }
  
  .projects {
    overflow: hidden;
    max-height: 600px;
    transition: max-height 2s cubic-bezier(0, 1, 0, 1);
  } 

  .projects.full {
    max-height: 1500px;
    transition: max-height 2s ease-in-out;
  }
  /* -----
SVG Icons - svgicons.sparkk.fr
----- */

.svg-icon {
  width: 1em;
  height: 1em;
}

.svg-icon path,
.svg-icon polygon,
.svg-icon rect {
  fill: #4691f6;
}

.svg-icon circle {
  stroke: #4691f6;
  stroke-width: 1;
}
 
</style>
	

