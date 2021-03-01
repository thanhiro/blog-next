<script lang="ts">
  import { format, parseISO } from "date-fns";

  import posts from "./posts/_posts.json";
</script>

<svelte:head>
  <title>Blogi</title>
</svelte:head>

<section>
  <h1>Blogi</h1>
  {#each posts as post}
    <li>
      <a rel="prefetch" href="/blog/{post.slug}">{post.title}</a>
      {format(parseISO(post.date), "dd.MM.yyyy")}
    </li>
  {/each}
</section>
