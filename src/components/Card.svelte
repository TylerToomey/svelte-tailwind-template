<script>
    export let name = "";
    export let description ="";
    export let image = "";
</script>


<div class="basis-2/4 mx-4 bg-slate-50 group rounded-md border shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-xl">

    <a href="https://sofdle.sofmusic.com" target="_blank">
        <img class="relative rounded-lg w-full p-3 grayscale transition ease-in-out delay-150 group-hover:grayscale-0 duration-300 pb-0 z-50 " src={image} alt="" />
    </a>
    <div class="relative flex justify-end pt-0 mt-0 pr-3 -z-50 transition -translate-y-7 duration-200 delay-400 group-hover:translate-y-0 group-hover:opacity-100">
        <div class="flex w-12 h-6 items-center justify-start bg-slate-600 rounded-b-md ml-1 text-xs text-white">
            <span class="ml-1">LIVE</span>

            <span class="animate-ping relative inline-flex h-2 w-2 my-auto ml-1 rounded-full bg-orange-600 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 my-auto -ml-2 bg-orange-600 text-white text-center"></span>
        </div>
    </div>
    <div class="p-5 pt-0">
        <a href="https://sofdle.sofmusic.com" target="_blank">
            <div class="mb-2 text-2xl flex font-bold tracking-tight text-orange-600 w-40 m-0 pt-0">{name}
               
            </div>
           
        </a>
        <p class="font-normal text-slate-900">{description}</p>
    </div>
</div>