/* eslint-disable no-undef */
// global describe, it, expect
import { mount } from '@vue/test-utils';
import { DateTime } from 'luxon';
import TimelineEvent from '../../components/TimelineEvent.vue';

describe('TimelineEvent', () => {
  it('should render correctly when active with specified to date', () => {
    const props = {
      element: {
        from: DateTime.fromObject({ month: 11, year: 2020 }),
        to: DateTime.fromObject({ month: 12, year: 2020 }),
        active: true,
      },
    };

    const comp = mount(TimelineEvent, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });

  it('should render correctly when inactive with specified to date', () => {
    const props = {
      element: {
        from: DateTime.fromObject({ month: 11, year: 2020 }),
        to: DateTime.fromObject({ month: 12, year: 2020 }),
        active: false,
      },
    };

    const comp = mount(TimelineEvent, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });

  it('should render correctly when inactive with unspecified to date', () => {
    const props = {
      element: {
        from: DateTime.fromObject({ month: 11, year: 2020 }),
        to: undefined,
        active: false,
      },
    };

    const comp = mount(TimelineEvent, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });

  it('should render correctly when inactive with unspecified to date', () => {
    const props = {
      element: {
        from: DateTime.fromObject({ month: 11, year: 2020 }),
        to: undefined,
        active: false,
      },
    };

    const comp = mount(TimelineEvent, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });
});
