<script>
  import post from "./_about.md";
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<article class="prose">
  <h1>{post.title}</h1>
  {@html post.body}
</article>
