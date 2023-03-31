import { mapArrayFromStrapi, mapFromStrapi, mapFromStrapiArray, type StrapiUnifiedArrayModel, type StrapiUnifiedArrayWithPropModel, type StrapiUnifiedModel } from '$lib/graphql/strapi';
import { gql } from '@urql/svelte';
import type { Education } from "../lib/cv/Education.svelte";
import type { Experience } from "../lib/cv/Experience.svelte";
import type { Language } from "../lib/cv/Language.svelte";
import type { Skill } from "../lib/cv/Skill.svelte";
import type { StrengthList, StrengthSection } from "../lib/cv/StrengthList.svelte";
import { client } from '../lib/graphql/client';
import type { ProfileHero } from "../lib/hero/ProfileHero.svelte";
import type { PageLoad } from './$types';

export interface LandingPageOutput {
  hero: ProfileHero;
  experiences: Experience[];
  educations: Education[];
  skills: Skill[];
  strengths: StrengthList;
  languages: Language[];
}

const query = gql<
  {
    landingHero: StrapiUnifiedModel<{ landingHero: { title: string; subtitle: string; image: StrapiUnifiedArrayModel<{ alternativeText: string; url: string; }> } }>;
    educations: StrapiUnifiedArrayWithPropModel<Education, 'education'>;
    experiences: StrapiUnifiedArrayWithPropModel<Experience, 'experience'>;
    skills: StrapiUnifiedArrayWithPropModel<Skill, 'skill'>;
    languages: StrapiUnifiedArrayWithPropModel<Language, 'language'>;
    strengths: StrapiUnifiedArrayModel<StrengthSection>;
  },
  { locale: string }
>`
query PortfolioContent($locale: I18NLocaleCode) {
  landingHero(locale: $locale) {
    data {
      attributes {
        landingHero {
          title
          subtitle
          image {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
  educations(locale: $locale) {
    data {
      attributes {
        education {
          id
          school
          grade
          course
          start
          end
          description
        }
      }
    }
  }
  experiences(locale: $locale) {
    data {
      attributes {
        experience {
          id
          company
          jobTitle
          start
          end
          description
        }
      }
    }
  }
  skills(locale: $locale) {
    data {
      attributes {
        skill {
          id
          name
          description
          value
        }
      }
    }
  }
  languages(locale: $locale) {
    data {
      attributes {
        language {
          language
          level
        }
      }
    }
  }
  strengths(locale: $locale) {
    data {
      attributes {
        title
        strengths {
          id
          title
          description
        }
      }
    }
  }
}
`;

export const load: PageLoad = async (): Promise<LandingPageOutput> => await client
  .query(query, { locale: 'de' })
  .toPromise()
  .then((res): LandingPageOutput => {
    if (!res.data) {
      throw new Error('no data');
    }

    return {
      educations: mapFromStrapiArray(res.data.educations, 'education'),
      experiences: mapFromStrapiArray(res.data.experiences, 'experience'),
      skills: mapFromStrapiArray(res.data.skills, 'skill'),
      languages: mapFromStrapiArray(res.data.languages, 'language'),
      strengths: mapArrayFromStrapi(res.data.strengths),
      hero: {
        title: res.data.landingHero.data.attributes.landingHero.title,
        subtitle: res.data.landingHero.data.attributes.landingHero.subtitle,
        imageUri: `http://localhost:1337${res.data.landingHero.data.attributes.landingHero.image.data[0].attributes.url}`,
        imageAlt: res.data.landingHero.data.attributes.landingHero.image.data[0].attributes.alternativeText,
      }
    };
  });
