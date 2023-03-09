<script lang="ts" context="module">
  export interface Education {
    start: string;
    end?: string;
    school: string;
    course: string;
    grade: string;
    description: string[];
  }
</script>

<script lang="ts">
  import { DateTime } from 'luxon';
  import TimelineElement from '../timeline/TimelineElement.svelte';

  export let element: Education;

  const start = DateTime.fromFormat(element.start, 'yyyy-MM-dd').toFormat('LLLL yyyy');
  const end = element.end ? DateTime.fromFormat(element.end, 'yyyy-MM-dd').toFormat('LLLL yyyy') : 'current';
</script>

<TimelineElement
  element={({
    header: `${ element.course }, ${ element.school }; Grade: ${ element.grade }`,
    formattedTime: `${ start } - ${ end }`,
    description: element.description,
  })}
/>
