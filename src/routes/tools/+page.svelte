<script>
    import { MoonStar, Calculator, Compass, HandCoins } from "lucide-svelte";
</script>

<svelte:head>
    <title>Ahlulbayt.io | Tools & Apps</title>
</svelte:head>


<main class="flex flex-1 flex-col gap-4 lg:gap-6 p-4 lg:p-6 text-center">
    <div class="flex justify-between">
        <span class="text-2xl font-semibold">Tools & Apps</span>
    </div>

    <div class="mx-auto mt-12 text-xl font-bold">Tools</div>
    <div class="mx-auto w-3/4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <a class="flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-foreground border rounded p-5 hover:border-slate-500 hover:bg-slate-50 shadow hover:shadow-none" href="/tools/prayers">
            <MoonStar />
            Prayer Timetable Generator
        </a>
        <a class="flex flex-col items-center justify-center  gap-2 text-muted-foreground hover:text-foreground border rounded p-5 hover:border-slate-500 hover:bg-slate-50 shadow hover:shadow-none" href="/tools/qiblah">
            <Compass />
            Qiblah
        </a>
        <div class="flex flex-col items-center gap-2 text-muted-foreground italic border border-slate-200 rounded p-5">
            <HandCoins />
            Khums Calculator <span class="text-sm">(Coming soon)</span>
        </div>
    </div>

    <div class="mx-auto mt-12 text-xl font-bold">Recommended Apps</div>
    <div class="mx-auto w-3/4 grid sm:grid-cols-3 gap-4">
        <a class="flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-foreground border rounded p-5 hover:border-slate-500 hover:bg-slate-50 shadow hover:shadow-none" href="https://play.google.com/store/apps/details?id=com.qadaa&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
            <img class="h-20 rounded" src="/qadaa.jpg" alt="Qadaa" />
            Qadaa <span class="text-sm">(made by us)</span>
        </a>
        <a class="flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-foreground border rounded p-5 hover:border-slate-500 hover:bg-slate-50 shadow hover:shadow-none" href="https://play.google.com/store/apps/details?id=com.thaqa.book_app&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
            <img class="h-20 rounded" src="/thaqalayn.png" alt="Thaqalayn" />
            Thaqalayn
        </a>
        <a class="flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-foreground border rounded p-5 hover:border-slate-500 hover:bg-slate-50 shadow hover:shadow-none" href="https://play.google.com/store/apps/details?id=net.alkafeel.mcb&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
            <img class="h-20 rounded" src="/haqibat.jpg" alt="Haqibat" />
            Haqibat Elmomen
        </a>
    </div>
</main>
