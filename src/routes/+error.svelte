<script>
  // src/routes/blog/[slug]/+page.svelte

  import { page } from '$app/stores';
</script>

<div class="mx-auto text-3xl flex flex-col text-center"><div class="text-4xl">{$page.status}</div><div>{$page.error?.message}</div></div>
