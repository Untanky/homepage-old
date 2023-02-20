<script lang="ts" context="module">
  export interface Education {
    start: Date;
    end?: Date;
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

  const start = DateTime.fromJSDate(element.start).toFormat('LLLL yyyy');
  const end = element.end ? DateTime.fromJSDate(element.end).toFormat('LLLL yyyy') : 'current';
</script>

<TimelineElement
  element={({
    header: `${ element.course }, ${ element.school }; Grade: ${ element.grade }`,
    formattedTime: `${ start } - ${ end }`,
    description: element.description,
  })}
/>
