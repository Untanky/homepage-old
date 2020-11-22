import TimelineElement from './TimelineElement';

class TimelineList {
  list: Array<TimelineElement>;

  constructor(...elements: TimelineElement[]) {
    this.list = [];

    elements.forEach((element) => {
      this.list.push(element);
    });
  }
}

export default TimelineList;
