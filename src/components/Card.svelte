<script>
    export let name = "";
    export let description ="";
    export let image = "";
    export let link = "";

    export let z = "50"
</script>


<div class="basis-auto mx-auto relative min-h-[475px] overflow-hidden mb-10 max-w-[350px] max-h-[500px] bg-slate-50 z-{z} group rounded-md border shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 hover:shadow-xl">
    <!-- IMAGE -->
    <a href={link} target="_blank">
        <img class="relative rounded-lg w-full p-5 grayscale transition ease-in-out delay-150 group-hover:grayscale-0 duration-300 pb-0 z-{z} " src={image} alt="" />
    </a>
    <!-- EMD IMAGE -->
    
    <!-- LIVE INDICATOR -->
    <div class="relative flex overflow-hidden justify-end pt-0 mt-0 pr-5 -z-50  opacity-0 transition -translate-y-6 duration-200 delay-400 group-hover:translate-y-[0.2rem] group-hover:opacity-100">
        <div class="flex w-12 h-6 items-center justify-start bg-slate-600 rounded-b-md ml-1 text-xs text-white">
            <span class="ml-1">LIVE</span>
            <span class="animate-ping relative inline-flex h-2 w-2 my-auto ml-1 rounded-full bg-orange-600 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 my-auto -ml-2 bg-orange-600 text-white text-center"></span>
    <!-- END LIVE INDICATOR -->

        </div>
    </div>
    <!-- TITLE  / DESCRIPTION -->
    <div class="p-5 pt-0">
        <a href={link} target="_blank">
            <div class="mb-2 text-2xl font-bold tracking-tight text-orange-600 w-70 m-0 pt-0">
                {name}
            </div>
        </a>
        <p class="font-normal text-slate-900">{description}</p>
    </div>
    <!-- END TITLE  / DESCRIPTION -->
</div>