<script lang="ts">
	import '../app.css';
  import type { LayoutData } from './$types';
	import Footer from '../lib/Footer.svelte';
	import Header from '../lib/Header.svelte';

  export let data: LayoutData;
</script>

<div class="min-h-screen py-4 mx-4 flex flex-col items-center justify-between">
  <div>
    <Header locales={ data.locales } navs={ data.navs.header } />
  
    <main class="mt-12">
      <slot />
    </main>
  </div>

	<Footer navs={ data.navs.footer } />
</div>
