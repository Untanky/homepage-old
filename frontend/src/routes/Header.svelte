<script lang="ts">
  import LocaleSelect from "./LocaleSelect.svelte";

  const navs = [
    {
      title: 'Home',
      link: '#',
    },
    {
      title: 'Projects',
      link: '#'
    },
  ];
  const locales = [ 'de-DE', 'en-US' ];
</script>

<header class="flex items-center justify-between mx-auto w-[1024px] bg-gray-300 px-6 py-3 rounded-3xl mt-8 shadow">
  <nav>
    <ul class="flex">
      {#each navs as nav}
        <li >
          <a class="px-6 py-3 hover:cursor-pointer hover:bg-gray-600 rounded-xl" href={nav.link}>{nav.title}</a>
        </li>
      {/each}
    </ul>
  </nav>
  <LocaleSelect locales={ locales } />
</header>

<style>

</style>
