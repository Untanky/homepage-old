<template lang="pug">
  div
    rich-link(linkUrl="https://www.google.com" title="GitHub" text="Untanky" imageUrl="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png")
    timeline(:elements="timelineElements")
</template>

<script lang="ts">
import Vue from 'vue';
import { DateTime } from 'luxon';
import RichLink from '../components/RichLink.vue';
import Timeline from '../components/Timeline.vue';
import StackedExperienceText from '../components/StackedExperienceText.vue';
import TimelineElement from '../src/TimelineElement';

export default Vue.extend({
  components: {
    RichLink,
    Timeline,
  },
  data: () => ({
    timelineElements: [
      new TimelineElement(
        'Pinuts media+science Multimedia-Agentur',
        'Web Developer',
        'Development of different web application in a legacy web service framework. Frontend Development with JSX.',
        StackedExperienceText,
        DateTime.fromObject({ year: 2020, month: 8 }),
        null,
        true,
      ),
      new TimelineElement(
        'WBS Coding School',
        'Software Developer',
        'Full-Stack Development of web applications with MERN-stack related to a teaching platform and other business needs.',
        StackedExperienceText,
        DateTime.fromObject({ year: 2020, month: 2 }),
        DateTime.fromObject({ year: 2020, month: 5 }),
        false,
      ),
      new TimelineElement(
        'Hochschule für Technik und Wirtschaft',
        'Student Assistant for the course "theorectic computer science"',
        'Creating homework exercises for students and grading them. Giving tutorial lessons',
        StackedExperienceText,
        DateTime.fromObject({ year: 2018, month: 10 }),
        DateTime.fromObject({ year: 2020, month: 7 }),
        false,
      ),
    ],
  }),
});
</script>
