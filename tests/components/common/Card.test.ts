/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import { DateTime } from 'luxon';
import Card from '../../../components/common/Card.vue';

describe('Card', () => {
  it('should render without title and link', () => {
    const props = { };

    const slots = {
      default: '<div>Content</div>',
    };

    const comp = mount(Card, {
      propsData: props,
      slots,
    });
    expect(comp.element).toMatchSnapshot();
  });

  it('should render with title and without link', () => {
    const props = {
      title: 'Title',
    };

    const slots = {
      default: '<div>Content</div>',
    };

    const comp = mount(Card, {
      propsData: props,
      slots,
    });
    expect(comp.element).toMatchSnapshot();
  });

  it('should render without title and with link', () => {
    const props = {
      linkText: 'Link',
      linkUrl: 'https://www.example.com',
    };

    const slots = {
      default: '<div>Content</div>',
    };

    const comp = mount(Card, {
      propsData: props,
      slots,
    });
    expect(comp.element).toMatchSnapshot();
  });

  it('should render with title and with link', () => {
    const props = {
      title: 'Title',
      linkText: 'Link',
      linkUrl: 'https://www.example.com',
    };

    const slots = {
      default: '<div>Content</div>',
    };

    const comp = mount(Card, {
      propsData: props,
      slots,
    });
    expect(comp.element).toMatchSnapshot();
  });
});
