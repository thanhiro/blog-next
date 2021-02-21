<script lang="ts">
  import posts from "./_posts";
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<article class="prose">
  <h1>Blog posts</h1>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
          tell Sapper to load the data for the page as soon as
          the user hovers over the link or taps it, instead of
          waiting for the 'click' event -->
    <li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li>
  {/each}
</article>
