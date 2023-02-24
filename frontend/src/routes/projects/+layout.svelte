<script lang="ts">
  import type { LayoutData } from './$types';

  export let data: LayoutData;
</script>

<div class="mx-auto grid grid-cols-2">
  <article class="prose">{@html data.projectDescription }</article>
  <slot />
</div>
