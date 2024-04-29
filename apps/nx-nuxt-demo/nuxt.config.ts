import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  workspaceDir: '../../',
  srcDir: 'src',
  devtools: { enabled: true },
  devServer: {
    host: 'localhost',
    port: 4200,
  },
  typescript: {
    typeCheck: true,
    tsConfig: {
      extends: './tsconfig.app.json',
    },
  },
  imports: {
    autoImport: true,
  },
  alias: {
    // add for every lib an alias here to import it properly
    // see https://github.com/nrwl/nx/issues/22410
    "@nx-nuxt-demo/demo": "../../demo/src/index.ts"
  },

  css: ['~/assets/css/styles.css'],

  vite: {
    plugins: [nxViteTsPaths()],
  },
});
