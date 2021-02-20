<script>
  import "./_global.pcss";
  import Nav from "$components/Nav.svelte";
</script>

<header class="hero text-white">
  <div class="container mx-auto px-4 py-4 flex">
    <div class="flex-auto"><a href=".">LOGO</a></div>
    <div class="flex-auto"><Nav /></div>
  </div>
</header>

<main class="container mx-auto px-4 py-4">
  <slot />
</main>

<style lang="pcss">
  .hero {
    background: linear-gradient(90deg, #464646 0%, #323232 100%);
  }
</style>
