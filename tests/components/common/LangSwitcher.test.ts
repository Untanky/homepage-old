/* eslint-disable no-undef */
// global it, expect
import { mount } from '@vue/test-utils';
import LangSwitcher from '../../../components/common/LangSwitcher.vue';

const locales = [
  {
    code: 'en',
    name: 'English',
    iso: 'en-US',
    flag: '🇺🇸',
    file: 'en.js',
  },
  {
    code: 'de',
    name: 'Deutsch',
    iso: 'de-DE',
    flag: '🇩🇪',
    file: 'de.js',
  },
];

const defaultLocale = 'en';

describe('LangSwitcher', () => {
  it('should run', () => {
    const mocks = {
      $i18n: {
        locales,
        locale: defaultLocale,
      },
    };

    const comp = mount(LangSwitcher, { mocks });
    expect(comp.element).toMatchSnapshot();
  });

  it('should run', () => {
    const mocks = {
      $i18n: {
        locales,
        locale: defaultLocale,
        setLocale: (newLocale: string) => {
          expect(newLocale).toBe('de');
        },
      },
    };

    const comp = mount(LangSwitcher, { mocks });
    expect(comp.element).toMatchSnapshot();

    const select = comp.find('select');
    (<HTMLInputElement>select.element).value = 'de';
    select.trigger('change');

    expect(comp.element).toMatchSnapshot();
  });
});
