<script>
    import { page } from "$app/stores";
    import { Slash, ChevronRight, ChevronLeft } from "lucide-svelte";
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

<div class="flex justify-between">
    <div
        class="flex items-center [&>svg]:size-3.5 gap-2.5 text-muted-foreground"
    >
        <a class="text-2xl font-semibold hover:underline" href="/quran">Qur'an</a>
        <Slash />
        <a class="text-xl font-semibold hover:underline" href={`/quran/${chapterId}`}>{chapter.alpha} - <span class="amiri">{chapter.arabic}</span></a>
    </div>
</div>

<div class="flex flex-col mx-auto text-center w-3/4">
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

<div class="relative flex flex-col w-3/4 xs:w-full border rounded mx-auto">
    <div class="w-full hover:bg-slate-50 p-8 flex flex-col gap-8 text-2xl text-center">
        <span class="amiri text-3xl">{verse.arabic}</span>
        <span>{verse.english}</span>
    </div>
</div>

<style>
    .amiri {
        font-family: Amiri;
    }
</style>
