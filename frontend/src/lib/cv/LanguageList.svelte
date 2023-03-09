<script lang="ts">
  import Language,  { type Language as LanguageModel } from './Language.svelte';

  export let languageList: LanguageModel[];
</script>

<ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
  {#each languageList as language}
  <li>
    <Language language={language}/>
  </li>
  {/each}
</ul>
