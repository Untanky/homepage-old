<template lang="pug">
  div
    rich-link(linkUrl="https://www.google.com" title="GitHub" text="Untanky" imageUrl="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png")
    timeline(:elements="timelineElements")
      template(v-for="(element, i) in timelineElements.list" v-slot:[`timeline-event__${i}`])
        stacked-experience-text(:key="i" :element="element.content")
    card(title="Test" linkText="Test")
      div Test text that is very long and respective of normal content
      div Another text that is equally meaningful as the first block of content
    card( linkText="Test")
      div Test text that is very long and respective of normal content
      div Another text that is equally meaningful as the first block of content
    card( linkText="Test")
      div Test text that is very long and respective of normal content
      div Another text that is equally meaningful as the first block of content
    card(title = "Test")
      div Test text that is very long and respective of normal content
      div Another text that is equally meaningful as the first block of content
</template>

<script lang="ts">
import Vue from 'vue';
import { DateTime } from 'luxon';
import RichLink from '../components/RichLink.vue';
import Timeline from '../components/Timeline.vue';
import Card from '../components/Card.vue';
import StackedExperienceText from '../components/StackedExperienceText.vue';

export default Vue.extend({
  components: {
    RichLink,
    Timeline,
    Card,
    StackedExperienceText,
  },
  data: () => ({
    timelineElements: {
      list: [
        {
          content: {
            title: 'Pinuts media+science Multimedia-Agentur',
            subtitle: 'Web Developer',
            description: 'Development of different web application in a legacy web service framework. Frontend Development with JSX.',
          },
          timelineEntry: {
            from: DateTime.fromObject({ year: 2020, month: 8 }),
            to: undefined,
            active: true,
          },
        },
        {
          content: {
            title: 'WBS Coding School',
            subtitle: 'Software Developer',
            description: 'Full-Stack Development of web applications with MERN-stack related to a teaching platform and other business needs.',
          },
          timelineEntry: {
            from: DateTime.fromObject({ year: 2020, month: 2 }),
            to: DateTime.fromObject({ year: 2020, month: 5 }),
            active: false,
          },
        },
        {
          content: {
            title: 'Hochschule für Technik und Wirtschaft',
            subtitle: 'Student Assistant for the course "theorectic computer science"',
            description: 'Creating homework exercises for students and grading them. Giving tutorial lessons',
          },
          timelineEntry: {
            from: DateTime.fromObject({ year: 2018, month: 10 }),
            to: DateTime.fromObject({ year: 2020, month: 7 }),
            active: false,
          },
        },
      ],
    },
  }),
});
</script>
