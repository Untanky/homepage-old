export interface NavigationLink {
  title: string;
  link: string;
}

export interface LayoutData {
  locales: string[];
  locale?: string;
  nav: {
    header: Array<NavigationLink>;
    footer: Array<NavigationLink>;
  }
}
