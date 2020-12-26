/* eslint-disable no-undef */
// global it, expect
import { mount } from '@vue/test-utils';
import { StackDirection } from '../../../src/components/Stacked';
import Stacked from '../../../components/blocks/Stacked.vue';

describe('Stacked', () => {
  it('should run with vertical stack', () => {
    const props = {
      data: {
        direction: StackDirection.Vertical,
        componentData: [
          {
            setting: {
              component: 'div',
            },
            data: {
              hello: 'world',
            },
          },
          {
            setting: {
              component: 'div',
            },
            data: {
              goodbye: 'world',
            },
          },
        ],
        classes: [],
      },
    };

    const comp = mount(Stacked, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });

  it('should run with horizontal stack', () => {
    const props = {
      data: {
        direction: StackDirection.Horizontal,
        componentData: [
          {
            setting: {
              component: 'div',
            },
            data: {
              hello: 'world',
            },
          },
          {
            setting: {
              component: 'div',
            },
            data: {
              goodbye: 'world',
            },
          },
        ],
        classes: [],
      },
    };

    const comp = mount(Stacked, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });

  it('should run without direction', () => {
    const props = {
      data: {
        direction: '',
        componentData: [
          {
            setting: {
              component: 'div',
            },
            data: {
              hello: 'world',
            },
          },
          {
            setting: {
              component: 'div',
            },
            data: {
              goodbye: 'world',
            },
          },
        ],
        classes: [],
      },
    };

    const comp = mount(Stacked, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });

  it('should run without data', () => {
    const props = {
      data: {
        direction: StackDirection.Horizontal,
        componentData: [],
        classes: [],
      },
    };

    const comp = mount(Stacked, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });

  it('should run with classes', () => {
    const props = {
      data: {
        direction: StackDirection.Horizontal,
        componentData: [
          {
            setting: {
              component: 'div',
            },
            data: {
              hello: 'world',
            },
          },
          {
            setting: {
              component: 'div',
            },
            data: {
              goodbye: 'world',
            },
          },
        ],
        classes: ['test-class', 'my-class'],
      },
    };

    const comp = mount(Stacked, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });
});
