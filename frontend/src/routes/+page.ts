import { mapFromStrapiArray, type StrapiUnifiedArrayModel } from '$lib/graphql/strapi';
import { gql } from '@urql/svelte';
import type { Education } from "../lib/cv/Education.svelte";
import type { Experience } from "../lib/cv/Experience.svelte";
import type { Language } from "../lib/cv/Language.svelte";
import type { Skill } from "../lib/cv/Skill.svelte";
import type { Strength } from '../lib/cv/Strength.svelte';
import type { StrengthList } from "../lib/cv/StrengthList.svelte";
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
    educations: StrapiUnifiedArrayModel<Education, 'education'>,
    experiences: StrapiUnifiedArrayModel<Experience, 'experience'>,
    skills: StrapiUnifiedArrayModel<Skill, 'skill'>,
    strengths: StrapiUnifiedArrayModel<Strength, 'strength'>,
  },
  { locale: string }
>`
query PortfolioContent($locale: I18NLocaleCode) {
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
  strengths(locale: $locale) {
    data {
      attributes {
        strength {
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
      languages: [],
      strengths: [],
      hero: {
        imageAlt: '',
        imageUri: '',
        subtitle: 'Fullstack Developer in Berlin',
        title: 'Lukas Grimm'
      }
    };
  });
