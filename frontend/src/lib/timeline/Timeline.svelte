<script lang="ts">
  import type { SvelteComponentTyped } from "svelte";
  
  export let elements: any[];
  export let component: typeof SvelteComponentTyped<{ element: any }>;
</script>

<ol>
  {#each elements as element }
    <li>
      <svelte:component this={component} element={element} />
    </li>
  {/each}
</ol>
