<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import type { NavigationLink } from "./$types";
  import LocaleSelect from "./LocaleSelect.svelte";

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

<header class="flex items-center justify-between mx-auto w-[1024px] bg-gray-300 px-6 py-3 rounded-3xl shadow">
  <nav>
    <ul class="flex">
      {#each navs as nav}
        <li >
          <a class="px-6 py-3 hover:cursor-pointer hover:bg-gray-600 rounded-xl" href={nav.link}>{nav.title}</a>
        </li>
      {/each}
    </ul>
  </nav>
  <LocaleSelect locale={ locale } locales={ locales } />
</header>
