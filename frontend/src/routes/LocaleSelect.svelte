<script lang="ts">
  export let locales: string[];

  const toEmoji = (locale: string): string => {
    const asciiOffset = 0x1F1A5;
    const codePoints = locale
      .split('-')[1]
      .toUpperCase()
      .split('')
      .map(char =>  asciiOffset + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  }
</script>

<select class="px-6 py-3 bg-gray-400 hover:cursor-pointer hover:bg-gray-600 rounded-xl">
  {#each locales as locale }
    <option value="locale">{ toEmoji(locale) }</option>
  {/each}
</select>
