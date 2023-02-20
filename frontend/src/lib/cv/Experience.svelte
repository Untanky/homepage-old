<script lang="ts" context="module">
  export interface Experience {
    start: Date;
    end?: Date;
    company: string;
    jobTitle: string;
    description: string[];
  };
</script>

<script lang="ts">
  import { DateTime } from 'luxon';
  import TimelineElement from '../timeline/TimelineElement.svelte';

  export let element: Experience;

  const start = DateTime.fromJSDate(element.start).toFormat('LLLL yyyy');
  const end = element.end ? DateTime.fromJSDate(element.end).toFormat('LLLL yyyy') : 'current';
</script>

<TimelineElement
  element={({
    header: `${ element.jobTitle }, ${ element.company }`,
    formattedTime: `${ start } - ${ end }`,
    description: element.description,
  })}
/>
