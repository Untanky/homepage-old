<script lang="ts">
  import { DateTime } from 'luxon';
  import type { ExperienceModel } from './Experience';

  export let experience: ExperienceModel;

  const start = DateTime.fromJSDate(experience.start).toFormat('LLLL yyyy');
  const end = experience.end ? DateTime.fromJSDate(experience.end).toFormat('LLLL yyyy') : 'current';
</script>

<h3 class="text-xl font-medium mb-1">{ experience.jobTitle }, { experience.company }</h3>
<i class="block text-xl italic mb-1">{ start } - { end }</i>
{#each experience.description as paragraph}
  <p>{ paragraph }</p>
{/each}
