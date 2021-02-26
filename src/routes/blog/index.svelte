<script lang="ts">
  import posts from "./posts/_posts.json";
</script>

<svelte:head>
  <title>Blogi</title>
</svelte:head>

<article class="prose">
  <h1>Blogi</h1>
  {#each posts as post}
    <li><a rel="prefetch" href="/blog/{post.slug}">{post.title}</a></li>
  {/each}
</article>
