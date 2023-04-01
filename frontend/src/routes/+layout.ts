import { client } from "$lib/graphql/client";
import { mapFromStrapi, type StrapiUnifiedArrayModel, type StrapiUnifiedModel } from "$lib/graphql/strapi";
import type { NavigationLink } from "$lib/NavigationLink";
import { gql } from "@urql/svelte";
import type { PageLoad } from "./$types";

interface LayoutOutput {
  locales: string[];
  locale?: string;
  navs: {
    header: NavigationLink[];
    footer: NavigationLink[];
  }
}



const query = gql<
  {
    i18NLocales: StrapiUnifiedArrayModel<{ name: string, code: string }>,
    header: StrapiUnifiedModel<{ NavigationLink: Array<{ Title: string, Link: string }> }>,
    footer: StrapiUnifiedModel<{ NavigationLink: Array<{ Title: string, Link: string }> }>,
  },
  { locale: string }
>`
query BaseLayout($locale: I18NLocaleCode) {
  i18NLocales {
    data {
      attributes {
        name
        code
      }
    }
  }
  header(locale: $locale) {
    data {
      attributes {
        NavigationLink {
          Title
          Link
        }
      }
    }
  }
  footer {
    data {
      attributes {
        NavigationLink {
          Title
          Link
        }
      }
    }
  }
}
`;

export const load: PageLoad = async (): Promise<LayoutOutput> => await client
  .query(query, { locale: 'de' })
  .toPromise()
  .then((res): LayoutOutput => {
    console.info(res.error?.networkError?.cause);
    if (!res.data) {
      throw new Error('no data');
    }

    return {
      locale: 'de',
      locales: res.data.i18NLocales.data.map((value) => value.attributes.code),
      navs: {
        header: mapFromStrapi(res.data.header).NavigationLink.map(link => ({ link: link.Link, title: link.Title })),
        footer: mapFromStrapi(res.data.footer).NavigationLink.map(link => ({ link: link.Link, title: link.Title })),
      }
    };
  })
  .catch(err => { console.error(err); throw err; });