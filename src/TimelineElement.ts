import TimelineEntry from './TimelineEntry';

class TimelineElement {
  content: any;

  timelineEntry: TimelineEntry;

  constructor(content: any, timelineEntry: TimelineEntry) {
    this.content = content;
    this.timelineEntry = timelineEntry;
  }
}

export default TimelineElement;
