<script lang="ts" context="module">
  export interface TimelineElement {
    header: string;
    formattedTime: string;
    description: string[];
  }
</script>

<script lang="ts">
  export let element: TimelineElement;
</script>

<h3 class="text-xl font-medium mb-1">{ element.header }</h3>
<i class="block text-xl italic mb-1">{ element.formattedTime }</i>
{#each element.description as paragraph}
  <p class="text-gray-600">{ paragraph }</p>
{/each}
