/* eslint-disable no-undef */
// global it, expect
import { mount } from '@vue/test-utils';
import RichLink from '../../../components/blocks/RichLink.vue';

describe('RichLink', () => {
  it('should run', () => {
    const props = {
      data: {
        title: 'Title',
        text: 'Link Text',
        linkUrl: 'https://example.com',
        imageUrl: 'https://example.com/img.jpg',
      },
    };

    const comp = mount(RichLink, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });
});
