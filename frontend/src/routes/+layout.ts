import type { LayoutData } from "./$types";

export function load(): LayoutData {
  return {
    locales: [ 'de-DE', 'en-US' ],
    nav: {
      header: [
        {
          title: 'Home',
          link: '#',
        },
        {
          title: 'Projects',
          link: '#'
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
}
