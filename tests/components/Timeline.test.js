/* eslint-disable no-undef */
// global it, expect
import { mount } from '@vue/test-utils';
import { DateTime } from 'luxon';
import Timeline from '../../components/Timeline.vue';
import StackedExperienceText from '../../components/StackedExperienceText.vue';
import TimelineElement from '../../src/TimelineEntry';

it('Timeline should render correctly', () => {
  const props = {
    elements: [
      new TimelineElement(
        'Test',
        'Subtest',
        'Very long description',
        StackedExperienceText,
        DateTime.fromObject({ year: 2020, month: 11 }),
        DateTime.fromObject({ year: 2020, month: 11 }),
        true,
      ),
      new TimelineElement(
        'Test 2',
        'Subtest - even more test',
        'Very long description - much longer than before',
        StackedExperienceText,
        DateTime.fromObject({ year: 2020, month: 11 }),
        null,
        false,
      ),
      new TimelineElement(
        'Test 3',
        'Subtest - even more test',
        'Very long description - much longer than before',
        StackedExperienceText,
        DateTime.fromObject({ year: 2020, month: 11 }),
        null,
        true,
      ),
    ],
  };

  const comp = mount(Timeline, { propsData: props });
  expect(comp.element).toMatchSnapshot();
});
