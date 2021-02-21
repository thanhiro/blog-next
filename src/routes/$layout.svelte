<script lang="ts">
  import "./_global.pcss";
  import Nav from "$components/Nav.svelte";

  import { page } from '$app/stores';
</script>

{#if $page.path !== '/'}
<header class="text-white">
  <div class="container mx-auto px-4 py-4 flex">
    <div class="flex-auto"><a href="/">LOGO</a></div>
    <div class="flex-auto"><Nav path={$page.path} /></div>
  </div>
</header>

<main class="container mx-auto px-4 py-4">
  <slot />
</main>
{:else}
<slot />
{/if}

<style lang="pcss">
  header {
    background: linear-gradient(90deg, #464646 0%, #323232 100%);
  }
</style>
