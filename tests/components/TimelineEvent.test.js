/* eslint-disable no-undef */
// global describe, it, expect
import { mount } from '@vue/test-utils';
import TimelineEvent from '../../components/TimelineEvent.vue';

describe('TimelineEvent', () => {
  it('should render correctly when active', () => {
    const props = {
      element: {
        date: 'November 2020 - December 2020',
        active: true,
      },
    };

    const comp = mount(TimelineEvent, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });

  it('should render correctly when inactive', () => {
    const props = {
      element: {
        date: 'November 2020 - December 2020',
        active: false,
      },
    };

    const comp = mount(TimelineEvent, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });
});
