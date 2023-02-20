<script lang="ts">
  import { DateTime } from 'luxon';
  import type { EducationModel } from './Education';

  export let education: EducationModel;

  const start = DateTime.fromJSDate(education.start).toFormat('LLLL yyyy');
  const end = education.end ? DateTime.fromJSDate(education.end).toFormat('LLLL yyyy') : 'current';
</script>

<h3 class="text-xl font-medium mb-1">{ education.course }, { education.school }; Grade: { education.grade }</h3>
<i class="block text-xl italic mb-1">{ start } - { end }</i>
{#each education.description as paragraph}
  <p>{ paragraph }</p>
{/each}
