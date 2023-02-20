<script lang="ts">
  import Education from '$lib/cv/Education.svelte';
  import Experience from '$lib/cv/Experience.svelte';
  import StrengthList from '$lib/cv/StrengthList.svelte';
  import Timeline from '$lib/timeline/Timeline.svelte';
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
    <Timeline
      elements={data.experiences} 
      component={Experience}
    />
  </section>
  
  <section>
    <h2>Education</h2>
    <Timeline
      elements={data.educations}
      component={Education}
    />
  </section>
  
  <section>
    <h2>Skills</h2>
    <p>Foo</p>
  </section>
  
  <section>
    <h2>Strengths</h2>
    <StrengthList strengthList={data.strengths} />
  </section>
</article>

<style>
  h2 {
    @apply text-2xl font-medium mb-4;
  }
</style>
