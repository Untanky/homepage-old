<template lang="pug">
  div
    rich-link(linkUrl="https://www.google.com" title="GitHub" text="Untanky" imageUrl="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png")
    timeline(:elements="timelineElements")
      template(v-for="(element, i) in timelineElements.list" v-slot:[`timeline-event__${i}`])
        stacked-experience-text(:key="i" :element="element.content")
    card(title="a")
      div.w-32 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
      div.w-32 Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
      div.w-32 Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. 
      div.w-32 Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
      div.w-32 Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. 
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
