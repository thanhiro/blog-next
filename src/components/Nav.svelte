<script lang="ts">
  export let segment: string;
</script>

<nav>
  <ul class="flex justify-end">
    <li class="mr-6">
      <a aria-current={segment === "about" ? "page" : undefined} href="about"
        >about</a
      >
    </li>
    <li class="mr-6">
      <a
        rel="prefetch"
        aria-current={segment === "blog" ? "page" : undefined}
        href="blog">blog</a
      >
    </li>
  </ul>
</nav>
