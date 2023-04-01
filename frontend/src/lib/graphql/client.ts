import { createClient } from '@urql/svelte';
import { PUBLIC_BASE_URL, PUBLIC_STRAPI_KEY } from '$env/static/public';

console.log(PUBLIC_BASE_URL, PUBLIC_STRAPI_KEY);

export const client = createClient({
  url: `${PUBLIC_BASE_URL}/graphql`,
  fetchOptions: () => {
    const token = PUBLIC_STRAPI_KEY;
    return {
      headers: { authorization: token ? `Bearer ${token}` : '' },
    }
  }
});
