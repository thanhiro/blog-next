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
  export let post: { title: string; body: any };
</script>

<article class="prose">
  <h1>{post.title}</h1>
  {@html post.body}
</article>
