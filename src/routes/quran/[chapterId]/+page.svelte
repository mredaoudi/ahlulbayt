<script lang="ts">
    import { Slash, ChevronRight, ChevronLeft } from "lucide-svelte";
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

<div class="flex flex-col mx-auto text-center w-3/4">
    <div class="text-xl font-bold">
        {chapter.english}
    </div>
    <div class="text-lg text-muted-foreground italic">
        {chapter.location}
    </div>
    <div class="text-lg">
        {versesLen} verses
    </div>
    <div class="w-full text-muted-foreground flex justify-between">
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

<div class="relative flex flex-col w-3/4 xs:w-full border rounded mx-auto">
    <div class="absolute -top-9 left-1/2 transform -translate-x-1/2 border bg-white px-8 py-4 rounded amiri text-lg">
        {'\u0628\u0650\u0633\u0652\u0645\u0650 \u0671\u0644\u0644\u0651\u064e\u0647\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0640\u0670\u0646\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650'}
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
