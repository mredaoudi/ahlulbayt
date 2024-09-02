<script>
    import { page } from "$app/stores";
    import { ChevronRight, ChevronLeft } from "lucide-svelte";
    export let data;

    $: quran = data.quran;
    $: chapterId = $page.params.chapterId;
    $: verseId = $page.params.verseId;
    $: nid = Number(verseId)
    $: chapter = quran[chapterId]
    $: verse = chapter.verses[nid-1]
    $: previous = nid > 0 ? nid-1 : null
    $: next = nid < chapter.verses.length ? nid+1 : null

</script>

<svelte:head>
    <title>Ahlulbayt.io | Quran {chapterId}:{verseId}</title>
</svelte:head>

<main class="flex flex-1 flex-col gap-4 lg:gap-6 p-4 lg:p-6">
<div class="flex justify-between">
    <div
        class="flex items-start text-xl gap-2.5 text-muted-foreground"
    >
        <a class="font-semibold hover:underline" href="/quran"
            >Qur'an</a
        >
        |
        <a class="font-semibold hover:underline" href={`/quran/${chapterId}`}>
            {chapter.alpha} - <span class="amiri">{chapter.arabic}</span>
        </a>
    </div>
</div>

<div class="flex flex-col mlg:mx-auto text-center mlg:w-3/4">
    <div class="text-2xl">
        {chapter.alpha}
    </div>
    <div class="text-xl font-bold">
        {chapter.english}
    </div>
    <div class="text-lg">
        {chapterId}:{verseId}
    </div>
    <div class="w-full text-muted-foreground flex justify-between">
        <a href={`/quran/${chapterId}/${previous}`} class="flex items-center hover:underline">
            {#if previous }
            <ChevronLeft size="18"/>
            <span>{previous}</span>
            {/if}
        </a>
        <a href={`/quran/${chapterId}/${next}`} class="flex items-center hover:underline">
            {#if next }
            <span>{next}</span>
            <ChevronRight size="18"/>
            {/if}
        </a>
    </div>
</div>

<div class="relative flex flex-col mlg:w-3/4 border rounded mx-auto">
    <div class="w-full hover:bg-slate-50 p-8 flex flex-col gap-8 text-center">
        <span class="text-base xl:text-3xl amiri-quran">{verse.arabic}</span>
        <span class="text-sm xl:text-2xl">{verse.english}</span>
    </div>
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
