<script lang="ts">
  import Education from '$lib/cv/Education.svelte';
  import Experience from '$lib/cv/Experience.svelte';
  import LanguageList from '$lib/cv/LanguageList.svelte';
  import SkillList from '$lib/cv/SkillList.svelte';
  import StrengthList from '$lib/cv/StrengthList.svelte';
  import ProfileHero from '$lib/hero/ProfileHero.svelte';
  import Timeline from '$lib/timeline/Timeline.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
	<title>Lukas Grimm</title>
	<meta name="description" content="Lukas Grimm - Fullstack Developer" />
</svelte:head>

<section class="hero">
  <ProfileHero hero={data.hero} />
</section>

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
  <SkillList skillList={data.skills} />
</section>

<section>
  <h2>Strengths</h2>
  <StrengthList strengthList={data.strengths} />
</section>

<section>
  <h2>Languages</h2>
  <LanguageList languageList={data.languages} />
</section>

<style>
  section.hero {
    @apply max-w-[1260px];
  }

  section {
    @apply max-w-[620px] mx-auto;
  }

  section:not(:last-child) {
    @apply mb-12;
  }

  h2 {
    @apply text-2xl font-medium mb-4;
  }
</style>
