<script>
  const navs = [
    {
      title: 'Hello World',
      link: '#',
    },
    {
      title: 'Goodbye World',
      link: '#',
    },
  ]
</script>

<header>
  <nav>
    <ul>
      {#each navs as nav}
        <li>
          <a href={nav.link}>{nav.title}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style>

</style>
