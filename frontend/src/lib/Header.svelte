<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import LocaleSelect from "./LocaleSelect.svelte";
  import type { NavigationLink } from "./NavigationLink";

  export let navs: NavigationLink[];
  export let locales: string[];

  const locale = writable(locales[0]);

  const LOCALE_KEY = 'locale';

  onMount(() => {
    const storedLocale = window.localStorage.getItem(LOCALE_KEY);
    if (storedLocale) {
      locale.set(storedLocale);
    }

    const unsubscribeLocale = locale.subscribe(locale => window.localStorage.setItem(LOCALE_KEY, locale));
    return () => {
      unsubscribeLocale();
    }
  });

</script>

<header class="absolute top-0 left-0 right-0 md:static md:flex md:items-center md:justify-between bg-sky-300 md:w-[768px] lg:w-[1024px] px-6 py-3 md:mx-auto md:rounded-3xl md:shadow">
  <nav>
    <ul class="flex">
      {#each navs as nav}
        <li >
          <a class="px-3 md:px-6 py-1.5 md:py-3 text-xl font-medium hover:cursor-pointer hover:bg-sky-600 rounded-xl" href={nav.link}>{nav.title}</a>
        </li>
      {/each}
    </ul>
  </nav>
  <div class="hidden md:block">
    <LocaleSelect locale={ locale } locales={ locales } />
  </div>
</header>
