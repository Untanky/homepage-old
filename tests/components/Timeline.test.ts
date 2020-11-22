/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import { DateTime } from 'luxon';
import Timeline from '../../components/Timeline.vue';

describe('Timeline', () => {
  it('Empty Timeline should render correctly', () => {
    const props = {
      elements: {
        list: [],
      },
    };

    const comp = mount(Timeline, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });

  it('Timeline with one entry should render correctly', () => {
    const props = {
      elements: {
        list: [
          {
            content: {},
            timelineEntry: {
              from: DateTime.fromObject({ year: 2020, month: 7 }),
              to: DateTime.fromObject({ year: 2020, month: 11 }),
              active: false,
            },
          },
        ],
      },
    };

    const slots = {
      'timeline-event__0': '<div>Content</div>',
    };

    const comp = mount(Timeline, { propsData: props, slots });
    expect(comp.element).toMatchSnapshot();
  });

  it('Timeline with one entry should render correctly', () => {
    const props = {
      elements: {
        list: [
          {
            content: {},
            timelineEntry: {
              from: DateTime.fromObject({ year: 2020, month: 7 }),
              to: DateTime.fromObject({ year: 2020, month: 11 }),
              active: false,
            },
          },
          {
            content: {},
            timelineEntry: {
              from: DateTime.fromObject({ year: 2019, month: 2 }),
              to: DateTime.fromObject({ year: 2020, month: 7 }),
              active: false,
            },
          },
        ],
      },
    };

    const slots = {
      'timeline-event__0': '<div>This Content</div>',
      'timeline-event__1': '<div>Other Content</div>',
    };

    const comp = mount(Timeline, { propsData: props, slots });
    expect(comp.element).toMatchSnapshot();
  });
});
