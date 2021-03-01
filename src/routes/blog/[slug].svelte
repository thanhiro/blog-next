<script context="module" lang="ts">
  // import fetch from "node-fetch";

  export async function load({ page: { params }, fetch }) {
    const res = await fetch(`/blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { props: { post: data } };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script lang="ts">
  import { format, parseISO } from "date-fns";

  export let post: { title: string; body: any; date: string };

  export let publishDate = parseISO(post.date);
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div>
  <a
    href="/blog/"
    class="text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
    >&laquo; Blogiin</a
  >
  <article class="mt-2 prose">
    <header>
      <h1 text-red>{post.title}</h1>
      <time datetime={post.date}>{format(publishDate, "dd.MM.yyyy")}</time>
    </header>
    {@html post.body}
  </article>
</div>
