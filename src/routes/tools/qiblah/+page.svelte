<script lang="ts">
    import { Input } from "$lib/components/ui/input/index.js";
    import Button from "$lib/components/ui/button/button.svelte";
    import { Compass } from "lucide-svelte";
    import { bearing } from "$lib/compass";

    const meccah = [21.422487, 39.826206]

    let direction: number;

    $: city = '';
    $: direction = 0;
    $: display_name = null;

    async function getDirection() {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${city}&format=json`);

        if (response.ok) {
            let cl = await response.json();
            display_name = cl[0].display_name;
            direction = bearing(cl[0].lat, cl[0].lon, meccah[0], meccah[1]);
        }
    }


</script>

<svelte:head>
    <title>Ahlulbayt.io | Tools | Qiblah</title>
</svelte:head>

<main class="flex flex-1 flex-col gap-4 lg:gap-6 p-4 lg:p-6 text-center">
    <div class="flex justify-between">
        <span class="text-2xl font-semibold">Tools & Apps</span>
    </div>

    <div class="text-muted-foreground mx-auto text-center">
        Get a real compass, write you city below, click on the button and then face your prayers to the direction on the compass.
    </div>

    <div class="mb-4 mx-auto">
        <div class="flex w-full max-w-sm items-center flex-col gap-1.5">
            <div class="flex gap-2">
                <Input type="city" id="city" placeholder="City" name="city" bind:value={city}/>
                <Button variant="outline" on:click={() => getDirection()}><Compass></Compass></Button>
            </div>
        </div>
    </div>

    {#key direction }
    <div class="mx-auto relative font-mono font-bold text-lg">
        <img src="/compass.svg" alt="Compass" class="w-1/3 fill-muted-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
        <div class="rounded-full w-48 h-48 md:w-96 md:h-96 border-bluer border-2 border-dashed ring-2 ring-bluer "></div>
        <span class="text-bluer absolute -top-6 left-1/2 -translate-x-1/2 text-center">N</span>
        <span class="text-bluer absolute top-1/2 -right-4 -translate-y-1/2">E</span>
        <span class="text-bluer absolute -bottom-6 right-1/2 translate-x-1/2">S</span>
        <span class="text-bluer absolute bottom-1/2 -left-4 translate-y-1/2">W</span>
        <div id="arrow" class="absolute bottom-1/2 border right-1/2 rounded-full h-1/2 origin-bottom border-red-500" style="transform: rotate({direction}deg); transition: transform 2s ease-in-out;"></div>
    </div>
    {/key}

    {#if city != '' && direction && display_name}
    <div class="mx-auto text-center flex flex-col items-center">
        The direction of the Qiblah for <span class="text-green-500">{display_name}</span> is: <span class="text-red-500">{Math.round(direction * 100) / 100}°</span> on the compass.
    </div>
    {/if}
</main>
