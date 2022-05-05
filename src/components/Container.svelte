<script>
    export let label = ""
</script>
<div class="container flex flex-wrap items-start overflow-hidden content-start projects box-border mx-auto mb-24 px-4 pt-10 pb-16 mt-4 sm:w-[1200px] max-w-5xl rounded-sm border-4 border-orange-600">
<span class="absolute bg-white mt-[-53px] px-4 label">{label}</span>
    <slot></slot>
    </div>

<style>
    .label {
        font-family: 'Comfortaa';
        font-weight: bolder;
        text-align:center;
        margin-bottom:20rem;

        max-height: 500px;
        overflow: hidden;

        /* Set our transitions up. */
        -webkit-transition: max-height 0.8s;
        -moz-transition: max-height 0.8s;
        transition: max-height 0.8s;
    }
</style>