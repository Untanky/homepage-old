<script lang="ts">
  import Experience from '$lib/cv/Experience.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
	<title>Lukas Grimm</title>
	<meta name="description" content="Lukas Grimm - Fullstack Developer" />
</svelte:head>

<section class="w-[620px] mx-auto">
  <ul>
    {#each data.experiences as experience }
      <li>
        <Experience experience={experience}></Experience>
      </li>
    {/each}
  </ul>
</section>
