<script lang="ts">
    import { onMount } from "svelte";
    import { Input } from "$lib/components/ui/input/index.js";
    import * as Table from "$lib/components/ui/table/index.js";
    import * as Select from "$lib/components/ui/select/index.js";
    import Button from "$lib/components/ui/button/button.svelte";
    import { SunCalc } from "$lib/suncalc";

    let selectedMonth: {value: string | undefined, label: string | undefined };
    let selectedYear: {value: string | undefined, label: string | undefined };
    let prayers: any[];

    $: city = "";
    $: display_date = '';
    $: display_city = '';
    $: prayers = []

    const months = [
        { value: "1", label: "January" },
        { value: "2", label: "February" },
        { value: "3", label: "March" },
        { value: "4", label: "April" },
        { value: "5", label: "May" },
        { value: "6", label: "June" },
        { value: "7", label: "July" },
        { value: "8", label: "August" },
        { value: "9", label: "September" },
        { value: "10", label: "October" },
        { value: "11", label: "November" },
        { value: "12", label: "December" }
    ];

    const years = [
        { value: "2024", label: "2024" },
        { value: "2025", label: "2025" },
        { value: "2026", label: "2026" },
        { value: "2027", label: "2027" },
        { value: "2028", label: "2028" },
        { value: "2029", label: "2029" },
        { value: "2030", label: "2030" }
    ];

    onMount(() => {
        const today = new Date();
        let cM = months[(today.getMonth() + 1) % 13], cY = today.getFullYear().toString()
        selectedMonth = cM;
        selectedYear = {value: cY, label: cY}
    })

    async function generateTimetable() {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${city}&format=json`);

        if (response.ok) {
            let cl = await response.json();
            display_date = `${selectedMonth.label} ${selectedYear.label}`;
            display_city = city;
            populateTable(
                Number(selectedYear.value),
                Number(selectedMonth.value),
                cl[0].lat,
                cl[0].lon
            )
        }
    }

    function populateTable(year: number, month: number, lat: number, lon: number) {
        const daysInMonth = new Date(year, month - 1, 0).getDate();
        prayers = [];
        for (let i = 1; i <= daysInMonth; i++ ) {
            let rest = SunCalc.getTimes(new Date(year, month - 1, i), lat, lon)
            console.log(rest)
            prayers.push(rest);
        }
    }

    function timeString(date: Date) {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }
</script>

<svelte:head>
    <title>Ahlulbayt.io | Tools | Prayers Timetable</title>
</svelte:head>

<main class="flex flex-1 flex-col gap-4 lg:gap-6 p-4 lg:p-6">
    <div class="flex justify-between">
        <span class="text-2xl font-semibold"
            >Tools | Prayer Timetable Generator</span
        >
    </div>

    <div class="flex mb-2 mx-auto items-center">
        <div class="flex flex-col w-full max-w-sm items-center gap-2">
            <Input id="city" placeholder="City" name="city" bind:value={city} />
            <div class="flex gap-2 justify-center">
                <Select.Root portal={null} bind:selected={selectedMonth}>
                    <Select.Trigger class="w-[180px]">
                        <Select.Value placeholder="Month" />
                    </Select.Trigger>
                    <Select.Content>
                        <Select.Group>
                        {#each months as month}
                            <Select.Item value={month.value} label={month.label}>{month.label}</Select.Item>
                        {/each}
                        </Select.Group>
                    </Select.Content>
                    <Select.Input name="favoriteFruit" />
                </Select.Root>
                <Select.Root portal={null} bind:selected={selectedYear}>
                    <Select.Trigger class="w-[180px]">
                        <Select.Value placeholder="Year" />
                    </Select.Trigger>
                    <Select.Content>
                        <Select.Group>
                        {#each years as year}
                            <Select.Item value={year.value} label={year.label}>{year.label}</Select.Item>
                        {/each}
                        </Select.Group>
                    </Select.Content>
                    <Select.Input name="favoriteFruit" />
                </Select.Root>
            </div>
            <Button class="mt-2" variant="outline" disabled={city==''} on:click={() => generateTimetable()}>Generate</Button>
        </div>
    </div>

    <div class="mx-auto grid w-full xl:w-1/2 border rounded-md shadow-md">
        <div
            class="grid grid-cols-[1fr,2fr,1fr] justify-between items-center rounded-t-md p-4 bg-bluer text-yeller"
        >
            <div class="flex gap-2 items-center">
                <img class="w-8" src="/ahlulbayt.svg" alt="Ahlulbayt" />
                <span>Prayers | الصّلاة</span>
            </div>
            <span class="text-xl text-center font-semibold">{display_date}</span>
            <span class="italic text-right">{display_city}</span>
        </div>
        <Table.Root>
            <Table.Header>
                <Table.Row class="bg-slate-50">
                    <Table.Head class="text-md text-bluer font-semibold text-center">Day</Table.Head>
                    <Table.Head class="text-md text-bluer font-semibold text-center">Fajr</Table.Head>
                    <Table.Head class="text-md text-bluer font-semibold text-center">Sunrise</Table.Head>
                    <Table.Head class="text-md text-bluer font-semibold text-center">Dhuhr</Table.Head>
                    <Table.Head class="text-md text-bluer font-semibold text-center">Sunset</Table.Head>
                    <Table.Head class="text-md text-bluer font-semibold text-center">Maghrib</Table.Head>
                </Table.Row>
            </Table.Header>
            <Table.Body class="text-center">
                {#each prayers as p, i (i)}
                    <Table.Row>
                        <Table.Cell>{i+1}</Table.Cell>
                        <Table.Cell>{timeString(p.nightEnd)}</Table.Cell>
                        <Table.Cell>{timeString(p.sunrise)}</Table.Cell>
                        <Table.Cell>{timeString(p.solarNoon)}</Table.Cell>
                        <Table.Cell>{timeString(p.sunsetStart)}</Table.Cell>
                        <Table.Cell>{timeString(p.dusk)}</Table.Cell>
                    </Table.Row>
                {/each}
            </Table.Body>
        </Table.Root>
    </div>
</main>
