<script lang="ts">
  import Education from '$lib/cv/Education.svelte';
import Experience from '$lib/cv/Experience.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
	<title>Lukas Grimm</title>
	<meta name="description" content="Lukas Grimm - Fullstack Developer" />
</svelte:head>

<article class="w-[620px] mx-auto space-y-12">
  <section>
    <h2>Experiences</h2>
    <ul>
      {#each data.experiences as experience }
        <li>
          <Experience experience={experience}></Experience>
        </li>
      {/each}
    </ul>
  </section>
  
  <section>
    <h2>Education</h2>
    <ul>
      {#each data.educations as education }
        <li>
          <Education education={education}></Education>
        </li>
      {/each}
    </ul>
  </section>
</article>

<style>
  h2 {
    @apply text-2xl font-medium mb-4;
  }
</style>
