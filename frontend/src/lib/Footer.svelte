<script lang="ts">
  import type { NavigationLink } from './NavigationLink';

  export let navs: NavigationLink[];
</script>

<footer class="self-start sm:self-center sm:mx-auto sm:w-[500px] sm:mt-12 mb-16 sm:mb-2">
  <nav>
    <ul class="flex flex-col sm:flex-row justify-between w-full">
      {#each navs as nav}
        <li>
          <a class="text-gray-700 hover:text-gray-900 hover:cursor-pointer hover:underline" href={nav.link}>{nav.title}</a>
        </li>
      {/each}
    </ul>
  </nav>
</footer>
