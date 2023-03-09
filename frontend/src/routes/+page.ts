import { createClient, gql } from '@urql/svelte';
import type { Education } from "../lib/cv/Education.svelte";
import type { Experience } from "../lib/cv/Experience.svelte";
import type { Language } from "../lib/cv/Language.svelte";
import type { Skill } from "../lib/cv/Skill.svelte";
import type { Strength } from '../lib/cv/Strength.svelte';
import type { StrengthList } from "../lib/cv/StrengthList.svelte";
import type { ProfileHero } from "../lib/hero/ProfileHero.svelte";
import type { PageLoad } from './$types';

const client = createClient({
  url: 'http://127.0.0.1:1337/graphql',
  fetchOptions: () => {
    const token = '2df7ea6543244cc8f9312e5a47107db150421f9a9598b63a057d576e7b19f9a42085a5130de4ab748c1b8f5e9d94293b0ab165957238692bae3fdf912d18b96c43e07d3021af349d4146fa58f63689f3ad0fbe60305aebf7686d76f7e260dd3c55fe7d1c084ccbc2046c81c761c5b1ed503d1bd3acd2718959e184d12b47e105';
    return {
      headers: { authorization: token ? `Bearer ${token}` : '' },
    }
  }
});

interface StrapiUnifiedArrayModel<T, PropertyName extends string> {
  data: Array<{
    attributes: {
      [P in PropertyName]: T
    }
  }>
}

const mapFromStrapiArray = <T, PropertyName extends string>(model: StrapiUnifiedArrayModel<T, PropertyName>, propertyName: PropertyName): T[] => {
  return model.data.map((value) => value.attributes[propertyName]);
} 

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
