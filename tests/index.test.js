/* eslint-disable no-undef */
// global it, expect
import { mount } from '@vue/test-utils';
import Index from '../pages/index.vue';

it('should run', () => {
  const comp = mount(Index);
  expect(comp).toMatchSnapshot();
});
