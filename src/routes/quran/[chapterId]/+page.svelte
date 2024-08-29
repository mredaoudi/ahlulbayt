<script lang="ts">
    import { ChevronRight, ChevronLeft } from "lucide-svelte";
    import { page } from "$app/stores";

    export let data;

    $: id = $page.params.chapterId;
    $: nid = Number(id);
    $: chapter = data.quran[id];
    $: verses = chapter.verses;
    $: versesLen = verses.length;
    $: previous = nid > 0 ? data.quran[nid-1] : null
    $: next = nid < 115 ? data.quran[nid+1] : null

</script>

<svelte:head>
    <title>Ahlulbayt.io | Quran - {chapter.alpha}</title>
</svelte:head>

<main class="flex flex-1 flex-col gap-4 lg:gap-6 p-4 mlg:p-6">

    <div class="flex justify-between">
        <div
            class="flex items-start text-xl gap-2.5 text-muted-foreground"
        >
            <a class="font-semibold hover:underline" href="/quran"
                >Qur'an</a
            >
            |
            <div class="font-semibold text-primary">
                {chapter.alpha} - <span class="amiri">{chapter.arabic}</span>
            </div>
        </div>
    </div>

    <div class="flex flex-col mlg:mx-auto text-center mlg:w-3/4">
        <div class="text-xl font-bold">
            {chapter.english}
        </div>
        <div class="text-lg text-muted-foreground italic">
            {chapter.location}
        </div>
        <div class="text-lg">
            {versesLen} verses
        </div>
        <div class="w-full text-sm mlg:text-base text-muted-foreground flex justify-between">
            <div class="flex items-center hover:underline">
                {#if previous }
                <ChevronLeft size="18"/>
                <a href={`/quran/${nid-1}`}>{previous.alpha} - <span class="amiri">{previous.arabic}</span></a>
                {/if}
            </div>
            <div class="flex items-center hover:underline">
                {#if next }
                <a href={`/quran/${nid+1}`}>{next.alpha} - <span class="amiri">{next.arabic}</span></a>
                <ChevronRight size="18"/>
                {/if}
            </div>
        </div>
    </div>

    <div class="relative flex flex-col mlg:w-3/4 border rounded mx-auto">
        <div class="absolute -top-5 mlg:-top-9 left-1/2 transform -translate-x-1/2 border bg-white px-8 py-2 mlg:py-4 rounded amiri text-sm mlg:text-lg">
            {'\uFDFD'}
        </div>
        {#each verses as v, index }
            <div class="w-full hover:bg-slate-50 px-8 pt-8 pb-2 flex flex-col gap-2 group">
                <span class="text-muted-foreground text-center mb-4">{index+1}</span>
                <span class="text-right text-2xl amiri-quran">{v.arabic}</span>
                <span class="text-left">{v.english}</span>
                <div class="mx-auto">
                    <a
                        class="text-muted-foreground opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto hover:underline"
                        href={`/quran/${id}/${index+1}`}
                    >
                        Go to verse
                    </a>
                </div>
            </div>
        {/each}
    </div>
</main>

<style>
    .amiri {
        font-family: 'Amiri';
        letter-spacing: .5px;
    }
    .amiri-quran {
        font-family: "Amiri Quran";
        line-height: 3rem;
        letter-spacing: .5px;
    }
</style>
