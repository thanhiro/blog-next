<script lang="ts">
  export let path: string;
</script>

<nav>
  <ul class="flex justify-end">
    <li class="mr-6">
      <a aria-current={path === "/about" ? "page" : undefined} href="/about"
        >about</a
      >
    </li>
    <li class="mr-6">
      <a
        rel="prefetch"
        aria-current={path === "/blog" ? "page" : undefined}
        href="/blog">blog</a
      >
    </li>
  </ul>
</nav>
