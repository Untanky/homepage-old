import type { NavigationLink } from "$lib/NavigationLink";
import type { LayoutLoad } from "./$types";

interface LayoutOutput {
  locales: string[];
  locale?: string;
  navs: {
    header: NavigationLink[];
    footer: NavigationLink[];
  }
}

export const load: LayoutLoad = (): LayoutOutput => {
  return {
    locales: [ 'de-DE', 'en-US' ],
    navs: {
      header: [
        {
          title: 'Home',
          link: '/',
        },
        {
          title: 'Projects',
          link: '/projects'
        },
      ],
      footer: [
        {
          title: 'Imprint',
          link: '/imprint'
        },
        {
          title: 'Data protection',
          link: '/data-protection'
        },
        {
          title: 'Contact',
          link: '/contact'
        }
      ]
    }
  }
};
