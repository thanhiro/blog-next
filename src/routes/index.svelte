<script>
  import index from "./_index.md";
  import Nav from "$components/Nav.svelte";
  import { page } from "$app/stores";
</script>

<svelte:head>
  <title>Tervetuloa</title>
</svelte:head>

<header
  class="text-black bg-center bg-cover"
  style="--herobg: url('{index.hero}')"
>
  <div class="container mx-auto px-4 py-4 h-16 flex">
    <div class="flex-auto"><a href="/">LOGO</a></div>
    <div class="flex-auto"><Nav path={$page.path} /></div>
  </div>
  <div class="custom-text-cont flex items-end justify-center w-full">
    <div class="mb-10 text-center">
      <h1 class="text-2xl font-semibold text-white uppercase md:text-3xl">
        {index.heading}
      </h1>
      <button
        class="px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
        >Blaa</button
      >
    </div>
  </div>
</header>

<main class="container mx-auto px-4 py-4">
  <section class="mt-4 prose">blaa</section>
</main>

<style lang="pcss">
  header {
    background-image: var(--herobg);

    height: calc(100vh - 4rem);
  }

  .custom-text-cont {
    height: calc(100% - 4rem);
  }
</style>
