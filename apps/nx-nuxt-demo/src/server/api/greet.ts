import { defineEventHandler, getQuery } from 'h3';
import { demo } from '@nx-nuxt-demo/demo';

export default defineEventHandler((event) => {
  const q = getQuery(event);
  const name = q.name || 'World';

  console.log(demo());

  return {
    message: `Hello ${name}`,
  };
});
