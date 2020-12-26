/* eslint-disable no-undef */
// global it, expect
import { mount } from '@vue/test-utils';
import KeyValue from '../../../components/blocks/KeyValue.vue';

describe('KeyValue', () => {
  it('should run', () => {
    const props = {
      data: {
        key: 'Key',
        value: 'Value',
      },
    };

    const comp = mount(KeyValue, { propsData: props });
    expect(comp.element).toMatchSnapshot();
  });
});
