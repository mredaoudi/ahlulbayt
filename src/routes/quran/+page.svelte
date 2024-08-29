<script lang="ts">
    export let data;
    const quran = data.quran;
    const chapters = Object.entries(quran).map(
        ([key, value]: [string, any]) => ({
            id: key,
            arabicName: value.arabic,
            transliteration: value.alpha,
            englishName: value.english,
            location: value.location,
            versesLen: value.verses.length
        }),
    );
</script>

<svelte:head>
    <title>Ahlulbayt.io | Quran</title>
</svelte:head>

<main class="flex flex-1 flex-col gap-4 lg:gap-6 p-4 lg:p-6">
    <div class="flex justify-between">
        <span class="text-2xl font-semibold">Qur'an</span>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 mlg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-2 w-full">
        {#each chapters as ch}
            <a
                class="p-5 border rounded md:text-sm flex flex-col gap-5 hover:border-slate-500 hover:bg-slate-50 shadow hover:shadow-none"
                href={`/quran/${ch.id}/`}
            >
                <div
                    class="w-full text-center text-xs text-muted-foreground font-semibold"
                >
                    {ch.id}
                </div>
                <div class="w-full text-center text-lg text-slate-800 font-semibold">
                    {ch.transliteration} - <span class="amiri">{ch.arabicName}</span>
                </div>
                <div class="flex w-full justify-center">
                    <span>{ch.englishName}</span>
                </div>
                <div class="flex w-full justify-between text-muted-foreground">
                    <span>{ch.versesLen}</span>
                    <span>{ch.location}</span>
                </div>
            </a>
        {/each}
    </div>
</main>

<style>
    .amiri {
        font-family: 'Amiri';
        letter-spacing: .5px;
    }
</style>
