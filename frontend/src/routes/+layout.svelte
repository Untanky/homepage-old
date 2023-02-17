<script lang="ts">
	import '../app.css';
	import type { LayoutData } from './$types';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';

  export let data: LayoutData;
</script>

<div class="min-h-screen py-4 flex flex-col items-center justify-between">
  <div>
    <Header locales={ data.locales } navs={ data.nav.header } />
  
    <main>
      <slot />
    </main>
  </div>

	<Footer navs={ data.nav.footer } />
</div>
