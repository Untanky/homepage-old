/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import { DateTime } from 'luxon';
import Timeline from '../../components/Timeline.vue';
import TimelineList from '../../src/TimelineList';
import TimelineEntry from '../../src/TimelineEntry';

describe('Timeline', () => {
  it('Empty Timeline should render correctly', () => {
    const props = {
      elements: new TimelineList(),
    };

    const comp = mount(Timeline, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });

  it('Timeline with one entry should render correctly', () => {
    const props = {
      elements: new TimelineList(
        {
          content: {},
          timelineEntry: new TimelineEntry(
            DateTime.fromObject({ year: 2020, month: 7 }),
            DateTime.fromObject({ year: 2020, month: 11 }),
            false,
          ),
        },
      ),
    };

    const slots = {
      'timeline-event__0': '<div>Content</div>',
    };

    const comp = mount(Timeline, { propsData: props, slots });
    expect(comp.element).toMatchSnapshot();
  });

  it('Timeline with one entry should render correctly', () => {
    const props = {
      elements: new TimelineList(
        {
          content: {},
          timelineEntry: new TimelineEntry(
            DateTime.fromObject({ year: 2020, month: 7 }),
            DateTime.fromObject({ year: 2020, month: 11 }),
            false,
          ),
        },
        {
          content: {},
          timelineEntry: new TimelineEntry(
            DateTime.fromObject({ year: 2019, month: 2 }),
            DateTime.fromObject({ year: 2020, month: 7 }),
            false,
          ),
        },
      ),
    };

    const slots = {
      'timeline-event__0': '<div>This Content</div>',
      'timeline-event__1': '<div>Other Content</div>',
    };

    const comp = mount(Timeline, { propsData: props, slots });
    expect(comp.element).toMatchSnapshot();
  });
});
