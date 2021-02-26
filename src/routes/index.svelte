<script>
  import index from "./_index.md";
  import Nav from "$components/Nav.svelte";
  import { page } from '$app/stores';
</script>

<svelte:head>
    <title>Tervetuloa</title>
</svelte:head>

<header class="text-black" style="--herobg: url('{index.hero}')">
  <div class="container mx-auto px-4 py-4 flex">
    <div class="flex-auto"><a href="/">LOGO</a></div>
    <div class="flex-auto"><Nav path={$page.path} /></div>
  </div>
  <div class="container mx-auto px-4 py-4">
	<h1>{index.heading}</h1>
  </div>
</header>

<main class="container mx-auto px-4 py-4">
  <section class="prose">
    blaa
  </section>
</main>

<style lang="pcss">
  header {
    background: var(--herobg) no-repeat center center;
	background-size:cover;

	height: calc(100vh - 4rem);
  }
</style>
