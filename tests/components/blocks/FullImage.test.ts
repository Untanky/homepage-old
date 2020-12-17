/* eslint-disable no-undef */
// global it, expect
import { mount } from '@vue/test-utils';
import FullImage from '../../../components/blocks/FullImage.vue';

it('should run', () => {
  const props = {
    data: {
      imageUrl: 'https://example.com/image.jpg',
      classes: ['class'],
    },
  };

  const comp = mount(FullImage, { propsData: props });
  expect(comp.element).toMatchSnapshot();
});
