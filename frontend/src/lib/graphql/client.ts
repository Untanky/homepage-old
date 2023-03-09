import { createClient } from '@urql/svelte';

export const client = createClient({
  url: 'http://127.0.0.1:1337/graphql',
  fetchOptions: () => {
    const token = '2df7ea6543244cc8f9312e5a47107db150421f9a9598b63a057d576e7b19f9a42085a5130de4ab748c1b8f5e9d94293b0ab165957238692bae3fdf912d18b96c43e07d3021af349d4146fa58f63689f3ad0fbe60305aebf7686d76f7e260dd3c55fe7d1c084ccbc2046c81c761c5b1ed503d1bd3acd2718959e184d12b47e105';
    return {
      headers: { authorization: token ? `Bearer ${token}` : '' },
    }
  }
});
