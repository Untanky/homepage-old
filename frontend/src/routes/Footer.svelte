<script lang="ts">
  import type { NavigationLink } from "./$types";

  export let navs: NavigationLink[];
</script>

<footer class="mx-auto w-[500px] bottom-8">
  <nav>
    <ul class="flex justify-between w-full">
      {#each navs as nav}
        <li>
          <a class="text-gray-700 hover:text-gray-900 hover:cursor-pointer hover:underline" href={nav.link}>{nav.title}</a>
        </li>
      {/each}
    </ul>
  </nav>
</footer>
