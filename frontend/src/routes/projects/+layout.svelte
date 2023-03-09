<script lang="ts">
  import type { LayoutData } from './$types';

  export let data: LayoutData;
</script>

<div class="mx-auto grid grid-cols-[minmax(65ch,1fr)_300px]">
  <article class="prose">{@html data.projectDescription }</article>
  <slot />
</div>
