<template lang="pug">
  div
    rich-link(linkUrl="https://www.google.com" title="GitHub" text="Untanky" imageUrl="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png")
    timeline(:elements="timelineElements")
      template(v-for="(element, index) in timelineElements.list" v-slot:[`timeline-event__${index}`])
        stacked-experience-text(:key="index" :element="element.content")
</template>

<script lang="ts">
import Vue from 'vue';
import { DateTime } from 'luxon';
import RichLink from '../components/RichLink.vue';
import Timeline from '../components/Timeline.vue';
import StackedExperienceText from '../components/StackedExperienceText.vue';
import TimelineEntry from '../src/TimelineEntry';
import TimelineList from '~/src/TimelineList';

export default Vue.extend({
  components: {
    RichLink,
    Timeline,
    StackedExperienceText,
  },
  data: () => ({
    timelineElements: new TimelineList(
      {
        content: {
          title: 'Pinuts media+science Multimedia-Agentur',
          subtitle: 'Web Developer',
          description: 'Development of different web application in a legacy web service framework. Frontend Development with JSX.',
        },
        timelineEntry: new TimelineEntry(
          DateTime.fromObject({ year: 2020, month: 8 }),
          undefined,
          true,
        ),
      },
      {
        content: {
          title: 'WBS Coding School',
          subtitle: 'Software Developer',
          description: 'Full-Stack Development of web applications with MERN-stack related to a teaching platform and other business needs.',
        },
        timelineEntry: new TimelineEntry(
          DateTime.fromObject({ year: 2020, month: 2 }),
          DateTime.fromObject({ year: 2020, month: 5 }),
          false,
        ),
      },
      {
        content: {
          title: 'Hochschule für Technik und Wirtschaft',
          subtitle: 'Student Assistant for the course "theorectic computer science"',
          description: 'Creating homework exercises for students and grading them. Giving tutorial lessons',
        },
        timelineEntry: new TimelineEntry(
          DateTime.fromObject({ year: 2018, month: 10 }),
          DateTime.fromObject({ year: 2020, month: 7 }),
          false,
        ),
      },
    ),
  }),
});
</script>
