<script lang="ts">
    import "../app.css";
    import {
        BookOpenText,
        BookCopy,
        BookUser,
        Menu,
        PencilRuler,
    } from "lucide-svelte";

    import { Badge } from "$lib/components/ui/badge/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Sheet from "$lib/components/ui/sheet/index.js";

    import { page } from "$app/stores";
    let path: string;

    function getPath(currentPath: string) {
        const pathParts = currentPath.split("/").filter(Boolean);
        path = pathParts.length > 0 ? pathParts[0] : "";
    }

    $: getPath($page.url.pathname);
</script>

<div
    class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]"
>
    <div class="bg-muted/40 hidden border-r md:block">
        <div class="flex h-full max-h-screen flex-col gap-2">
            <div class="flex items-center border-b p-4 lg:px-6">
                <a
                    href="/"
                    class="w-full flex flex-col items-center gap-1 font-semibold justify-center"
                >
                    <span class="reem-kufi text-2xl">أَهْل ٱلْبَيْت</span>
                    <span>Ahlulbayt.io</span>
                </a>
            </div>
            <div class="flex-1">
                <nav class="grid items-center px-2 font-medium lg:px-4">
                    <a
                        href="/quran"
                        class="{path == 'quran'
                            ? 'bg-muted text-primary'
                            : 'text-muted-foreground'} hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
                    >
                        <BookOpenText class="h-5 w-5" />
                        Qur'an
                    </a>
                    <a
                        href="/hadith"
                        class="{path == 'hadith'
                            ? 'bg-muted text-primary'
                            : 'text-muted-foreground'} hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
                    >
                        <BookCopy class="h-5 w-5" />
                        Hadith
                    </a>
                    <a
                        href="/fiqh"
                        class="{path == 'fiqh'
                            ? 'bg-muted text-primary'
                            : 'text-muted-foreground'} hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
                    >
                        <BookUser class="h-5 w-5" />
                        Fiqh
                    </a>
                    <a
                        href="/tools"
                        class="{path == 'tools'
                            ? 'bg-muted text-primary'
                            : 'text-muted-foreground'} hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
                    >
                        <PencilRuler class="h-5 w-5" />
                        Tools
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
                            <span class="sr-only reem-kufi">أَهْل ٱلْبَيْت</span>
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
                            Tools
                        </a>
                    </nav>
                </Sheet.Content>
            </Sheet.Root>
            <div class="w-full flex justify-center reem-kufi">أَهْل ٱلْبَيْت</div>
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
        <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <slot />
        </main>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Reem+Kufi+Fun:wght@400..700&display=swap');
    @import url("https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&display=swap");
    .reem-kufi {
        font-family: "Reem Kufi Fun", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }
</style>
