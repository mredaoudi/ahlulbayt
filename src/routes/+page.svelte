<svelte:head>
    <title>Ahlulbayt.io | Home</title>
</svelte:head>

<main class="grid grid-cols-1 justify-items-center gap-4 lg:gap-6">
    <img src="/banner_white.svg" alt="Banner" class="w-1/2 object-scale-down max-h-full" />

    <div class="mlg:text-xl font-semibold">
        Welcome to the Ahlulbayt.io network.
    </div>
    <div class="w-1/2 text-center text-sm mlg:text-base">
        Explore the wisdom of the Quran, Hadith, and Fiqh of the Prophet <span class="amiri">{'\uFDFA'}</span> and his Household at your fingertips. Dive deep into timeless knowledge with tools designed to enhance your understanding and spiritual journey.
    </div>
    <div class="w-1/2 grid mlg:grid-cols-2 xl:grid-cols-4 gap-2 text-center">
        <a class="p-4 border hover:underline rounded" href="/quran">Qur'an</a>
        <a class="p-4 border hover:underline rounded" href="/hadith">Hadith</a>
        <a class="p-4 border hover:underline rounded" href="/fiqh">Fiqh</a>
        <a class="p-4 border hover:underline rounded" href="/tools">Tools & Apps</a>
    </div>
    <div class="mt-4 w-1/2 text-center font-bold">
        Apps that we built:
    </div>
    <a class="flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-foreground p-5 hover:border-slate-500 hover:bg-slate-50" href="https://play.google.com/store/apps/details?id=com.qadaa&pcampaignid=web_share">
        <img class="h-20 rounded" src="/qadaa.jpg" alt="Qadaa" />
        <span class="font-semibold">Qadaa</span><span class="text-sm">(coming soon on iOS)</span>
    </a>
</main>

<style>
    .amiri {
        font-family: "Amiri";
    }
</style>
