import type { Education } from "$lib/cv/Education.svelte";
import type { Experience } from "$lib/cv/Experience.svelte";
import type { Language } from "$lib/cv/Language.svelte";
import type { StrengthList } from "$lib/cv/StrengthList.svelte";
import type { PageLoad } from "./$types";

export interface LandingPageOutput {
  experiences: Experience[];
  educations: Education[];
  strengths: StrengthList;
  languages: Language[];
}

export const load: PageLoad = (): LandingPageOutput => {
  return {
    experiences: [
      {
        start: new Date(),
        end: new Date(),
        company: 'DIPKO GmbH',
        jobTitle: 'Fullstack Developer',
        description: [
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
          'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.'
        ],
      },
      {
        start: new Date(),
        end: new Date(),
        company: 'DIPKO GmbH',
        jobTitle: 'Fullstack Developer',
        description: [
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
          'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.'
        ],
      }
    ],
    educations: [
      {
        start: new Date(),
        end: new Date(),
        school: 'University of Applied Sciences Berlin',
        course: 'Applied Computer Science',
        grade: '1.7',
        description: [
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
          'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.'
        ],
      }
    ],
    strengths: [
      {
        title: 'Foo',
        strengths: [
          {
            label: 'Team player',
            description: 'supporting my team at any possibility',
          },
          {
            label: 'Self reliance',
            description: 'with work to do'
          }
        ]
      },
      {
        title: 'Bar',
        strengths: [
          {
            label: 'Creativity',
            description: 'in problem solving',
          }
        ]
      }
    ],
    languages: [
      {
        language: 'German',
        level: 'Native',
      },
      {
        language: 'English',
        level: 'C1'
      }
    ]
  };
};
