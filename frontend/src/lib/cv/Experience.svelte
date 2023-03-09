<script lang="ts" context="module">
  export interface Experience {
    start: string;
    end?: string;
    company: string;
    jobTitle: string;
    description: string[];
  };
</script>

<script lang="ts">
  import { DateTime } from 'luxon';
  import TimelineElement from '../timeline/TimelineElement.svelte';

  export let element: Experience;

  const start = DateTime.fromFormat(element.start, 'yyyy-MM-dd').toFormat('LLLL yyyy');
  const end = element.end ? DateTime.fromFormat(element.end, 'yyyy-MM-dd').toFormat('LLLL yyyy') : 'current';
</script>

<TimelineElement
  element={({
    header: `${ element.jobTitle }, ${ element.company }`,
    formattedTime: `${ start } - ${ end }`,
    description: element.description,
  })}
/>
