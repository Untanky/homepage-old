<script lang="ts" context="module">
  export interface StrengthSection {
    title: string;
    strengths: StrengthModel[];
  }

  export type StrengthList = StrengthSection[];
</script>

<script lang="ts">
  import Strength, { type Strength as StrengthModel } from './Strength.svelte';

  export let strengthList: StrengthList;
</script>

<ul class="space-y-2">
  {#each strengthList as section}
  <li>
    <h3 class="text-xl font-medium mb-1">{ section.title }</h3>
    <ul class="space-y-1">
      {#each section.strengths as strength}
        <li>
          <Strength strength={strength} />
        </li>
      {/each}
    </ul>
  </li>
  {/each}
</ul>
