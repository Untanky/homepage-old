import type { ExperienceModel } from "$lib/cv/Experience";
import type { PageLoad } from "./$types";

export interface LandingPageOutput {
  experiences: ExperienceModel[];
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
    ]
  };
};
