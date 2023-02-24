<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { type Writable } from 'svelte/store';

  export let locale: Writable<string>;
  export let locales: string[];
  
  const dispatch = createEventDispatcher();

  locale.subscribe(newLocale => {
    dispatch('setLocale', newLocale);
  });

  const toEmoji = (locale: string): string => {
    const asciiOffset = 0x1F1A5;
    const codePoints = locale
      .split('-')[1]
      .toUpperCase()
      .split('')
      .map(char =>  asciiOffset + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };
</script>

<select
  class="px-6 py-3 bg-sky-400 hover:cursor-pointer hover:bg-sky-600 rounded-xl"
  bind:value={ $locale }
>
  {#each locales as locale }
    <option value={locale}>{ toEmoji(locale) }</option>
  {/each}
</select>
