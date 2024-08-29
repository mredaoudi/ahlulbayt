<script lang="ts">
    import { afterNavigate, beforeNavigate } from '$app/navigation';
    import "../app.css";
    import {
        BookOpenText,
        BookCopy,
        BookUser,
        Menu,
        PencilRuler,
    } from "lucide-svelte";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Sheet from "$lib/components/ui/sheet/index.js";
    import { page } from "$app/stores";

    let loading = false;
    beforeNavigate(() => {
        loading = true;
    });
    afterNavigate(() => {
        loading = false;
    });

    let path: string;

    function getPath(currentPath: string) {
        const pathParts = currentPath.split("/").filter(Boolean);
        path = pathParts.length > 0 ? pathParts[0] : "";
    }

    $: getPath($page.url.pathname);
</script>

<div
    class="grid min-h-screen w-full md:grid-cols-[100px_1fr] lg:grid-cols-[180px_1fr]"
>
    <div class="bg-muted/40 hidden border-r md:block">
        <div class="flex h-full sticky top-0 max-h-screen flex-col gap-2">
            <div class="flex items-center border-b p-8 lg:px-6">
                <a
                    href="/"
                    class="w-full flex flex-col items-center gap-1 font-semibold justify-center reem-kufi text-bluer"
                >
                    <img src="/ahlulbayt.svg" alt="Logo" class="h-16"/>
                    <span>Ahlulbayt.io</span>
                </a>
            </div>
            <div class="flex-1">
                <nav class="grid items-center px-2 gap-5 font-medium text-lg lg:px-4">
                    <a
                        href="/quran"
                        class="{path == 'quran'
                            ? 'bg-muted text-primary'
                            : 'text-muted-foreground'} hover:text-primary flex flex-col items-center gap-3 rounded-lg p-3 transition-all"
                    >
                        <img class="w-6 h-6" src="/quran.svg" alt="Quran"/>
                        Qur'an
                    </a>
                    <a
                        href="/hadith"
                        class="{path == 'hadith'
                            ? 'bg-muted text-primary'
                            : 'text-muted-foreground'} hover:text-primary flex flex-col items-center gap-3 rounded-lg p-3 transition-all"
                    >
                        <BookCopy class="h-5 w-5" />
                        Hadith
                    </a>
                    <a
                        href="/fiqh"
                        class="{path == 'fiqh'
                            ? 'bg-muted text-primary'
                            : 'text-muted-foreground'} hover:text-primary flex flex-col items-center gap-3 rounded-lg p-3 transition-all"
                    >
                        <BookUser class="h-5 w-5" />
                        Fiqh
                    </a>
                    <a
                        href="/tools"
                        class="{path == 'tools'
                            ? 'bg-muted text-primary'
                            : 'text-muted-foreground'} hover:text-primary flex flex-col text-center items-center gap-3 rounded-lg px-3 py-2 transition-all"
                    >
                        <PencilRuler class="h-5 w-5" />
                        Tools & Apps
                    </a>
                </nav>
            </div>
        </div>
    </div>
    <div class="flex flex-col">
        <header
            class="bg-muted/40 flex h-14 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6 shrink-0 md:hidden"
        >
            <Sheet.Root>
                <Sheet.Trigger asChild let:builder>
                    <Button
                        variant="outline"
                        size="icon"
                        class="shrink-0 md:hidden"
                        builders={[builder]}
                    >
                        <Menu class="h-5 w-5" />
                        <span class="sr-only">Toggle navigation menu</span>
                    </Button>
                </Sheet.Trigger>
                <Sheet.Content side="left" class="flex flex-col">
                    <nav class="grid gap-2 text-lg font-medium">
                        <a
                            href="##"
                            class="flex items-center gap-2 text-lg font-semibold"
                        >
                            <span class="sr-only reem-kufi">Ahlulbayt.io</span>
                        </a>
                        <a
                            href="/quran"
                            class="{path == 'quran'
                                ? 'bg-muted text-primary'
                                : 'text-muted-foreground'} hover:text-foreground mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2"
                        >
                            <BookOpenText class="h-5 w-5" />
                            Qur'an
                        </a>
                        <a
                            href="/hadith"
                            class="{path == 'hadith'
                                ? 'bg-muted text-primary'
                                : 'text-muted-foreground'} hover:text-foreground mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2"
                        >
                            <BookCopy class="h-5 w-5" />
                            Hadith
                        </a>
                        <a
                            href="/fiqh"
                            class="{path == 'fiqh'
                                ? 'bg-muted text-primary'
                                : 'text-muted-foreground'} hover:text-foreground mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2"
                        >
                            <BookUser class="h-5 w-5" />
                            Fiqh
                        </a>
                        <a
                            href="/tools"
                            class="{path == 'tools'
                                ? 'bg-muted text-primary'
                                : 'text-muted-foreground'} hover:text-foreground mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2"
                        >
                            <PencilRuler class="h-5 w-5" />
                            Tools & Apps
                        </a>
                    </nav>
                </Sheet.Content>
            </Sheet.Root>
            <div class="w-full flex justify-center reem-kufi text-[#4E6E81]"><img class="w-6" src="/ahlulbayt.svg" alt="mobile" /></div>
            <!-- <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild let:builder>
            <Button
              builders={[builder]}
              variant="secondary"
              size="icon"
              class="rounded-full"
            >
              <CircleUser class="h-5 w-5" />
              <span class="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="end">
            <DropdownMenu.Label>My Account</DropdownMenu.Label>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>Settings</DropdownMenu.Item>
            <DropdownMenu.Item>Support</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>Logout</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root> -->
    </header>
    {#if loading}
    <main class="flex flex-1 flex-col gap-4 lg:gap-6">
        <div role="status" class="mx-auto my-auto">
            <svg aria-hidden="true" class="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-slate-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span class="sr-only">Loading...</span>
        </div>
    </main>
    {:else}
    <slot></slot>
    {/if}
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400..700&display=swap');
    @import url("https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Amiri+Quran:ital,wght@0,400;0,700;1,400;1,700&display=swap");
    .reem-kufi {
        font-family: "Reem Kufi", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }
</style>
