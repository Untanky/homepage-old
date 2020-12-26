/* eslint-disable no-undef */
// global it, expect
import { mount } from '@vue/test-utils';
import FormattedText from '../../../components/blocks/FormattedText.vue';

describe('FormattedText', () => {
  it('should run without config', () => {
    const props = {
      data: {
        text: 'Hello World',
        classes: [],
      },
    };

    const comp = mount(FormattedText, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });

  it('should run as header', () => {
    const props = {
      data: {
        text: 'Hello World',
        variant: 'h1',
        classes: [],
      },
    };

    const comp = mount(FormattedText, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });

  it('should run as code snippet', () => {
    const props = {
      data: {
        text: 'Hello World',
        variant: 'code',
        classes: [],
      },
    };

    const comp = mount(FormattedText, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });

  it('should run with size', () => {
    const props = {
      data: {
        text: 'Hello World',
        size: 'xl',
        classes: [],
      },
    };

    const comp = mount(FormattedText, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });

  it('should run with size and header variant', () => {
    const props = {
      data: {
        text: 'Hello World',
        variant: 'h1',
        size: 'xl',
        classes: [],
      },
    };

    const comp = mount(FormattedText, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });

  it('should run with size and normal variant', () => {
    const props = {
      data: {
        text: 'Hello World',
        variant: 'div',
        size: 'xl',
        classes: [],
      },
    };

    const comp = mount(FormattedText, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });

  it('should run with color red', () => {
    const props = {
      data: {
        text: 'Hello World',
        color: 'red-500',
        classes: [],
      },
    };

    const comp = mount(FormattedText, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });

  it('should run with alignment left', () => {
    const props = {
      data: {
        text: 'Hello World',
        alignment: 'left',
        classes: [],
      },
    };

    const comp = mount(FormattedText, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });

  it('should run with alignment center', () => {
    const props = {
      data: {
        text: 'Hello World',
        alignment: 'center',
        classes: [],
      },
    };

    const comp = mount(FormattedText, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });

  it('should run with alignment right', () => {
    const props = {
      data: {
        text: 'Hello World',
        alignment: 'right',
        classes: [],
      },
    };

    const comp = mount(FormattedText, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });

  it('should run with alignment justify', () => {
    const props = {
      data: {
        text: 'Hello World',
        alignment: 'justify',
        classes: [],
      },
    };

    const comp = mount(FormattedText, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });

  it('should run with bold font', () => {
    const props = {
      data: {
        text: 'Hello World',
        bold: true,
        classes: [],
      },
    };

    const comp = mount(FormattedText, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });

  it('should run with italic font', () => {
    const props = {
      data: {
        text: 'Hello World',
        italic: true,
        classes: [],
      },
    };

    const comp = mount(FormattedText, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });

  it('should run when underlined', () => {
    const props = {
      data: {
        text: 'Hello World',
        underline: true,
        classes: [],
      },
    };

    const comp = mount(FormattedText, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });

  it('should run with classes', () => {
    const props = {
      data: {
        text: 'Hello World',
        classes: ['custom-class-1', 'test-class'],
      },
    };

    const comp = mount(FormattedText, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });

  it('should run when everything configured', () => {
    const props = {
      data: {
        text: 'Hello World',
        variant: 'h2',
        color: 'green-500',
        alignment: 'center',
        bold: true,
        italic: true,
        underline: true,
        classes: [],
      },
    };

    const comp = mount(FormattedText, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });
});
