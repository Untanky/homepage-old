<script lang="ts">
  import type { SvelteComponentTyped } from "svelte";
  
  export let elements: any[];
  export let component: typeof SvelteComponentTyped<{ element: any }>;
</script>

<ol class="relative">
  {#each elements as element }
    <li class="timeline-item">
      <div class="relative pb-6">
        <div class="line">
          <svelte:component this={component} element={element} />
        </div>
      </div>
    </li>
  {/each}
</ol>

<style>
  .timeline-item {
    @apply pl-8;
  }

  .timeline-item::before {
    content: "";
    @apply block absolute w-2 h-2 left-2 mt-2.5 rounded-full bg-sky-700 z-50;
  }

  .timeline-item:not(:last-child) .line::before {
    content: "";
    @apply block absolute w-1 h-full -left-[22px] top-3 rounded-full bg-sky-400;
  }
</style>
