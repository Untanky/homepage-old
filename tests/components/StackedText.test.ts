/* eslint-disable no-undef */
// global it, expect
import { mount } from '@vue/test-utils';
import StackedText from '../../components/StackedText.vue';

it('should run', () => {
  const props = {
    formattedTexts: [
      {
        text: 'Hello World',
        classes: ['font-bold', 'text-xl'],
      },
      {
        text: 'Goodbye World',
        classes: ['italic', 'text-xl'],
      },
    ],
  };

  const comp = mount(StackedText, { propsData: props });
  expect(comp.element).toMatchSnapshot();
});