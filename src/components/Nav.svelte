<script lang="ts">
  export let path: string;
</script>

<nav>
  <ul class="flex justify-end">
    <li class="mr-6">
      <a aria-current={path === "/about" || path === "/about/" ? "page" : undefined} href="/about/"
        >Arvot</a
      >
    </li>
    <li class="mr-6">
      <a
        rel="prefetch"
        aria-current={path === "/blog" || path.startsWith("/blog/") ? "page" : undefined}
        href="/blog/">Blogi</a
      >
    </li>
  </ul>
</nav>

<style lang="pcss">
  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 6px;
    background-color: rgb(255, 255, 255);
    display: block;
    bottom: -16px;
  }
</style>
