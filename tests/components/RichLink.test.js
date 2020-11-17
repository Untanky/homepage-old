/* eslint-disable no-undef */
// global it, expect
import { mount } from '@vue/test-utils';
import RichLink from '../../components/RichLink.vue';

it('should run', () => {
  const props = {
    title: 'Title',
    text: 'Link Text',
    linkUrl: 'https://example.com',
    imageUrl: 'https://example.com/img.jpg',
  };

  const comp = mount(RichLink, { propsData: props });
  expect(comp.element).toMatchSnapshot();
});
