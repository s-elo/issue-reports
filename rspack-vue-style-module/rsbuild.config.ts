import { defineConfig, rspack } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

export default defineConfig({
  plugins: [pluginVue()],
  dev: {
    hmr: true,
  },
  server: {
    port: 1004,
  },
  html: {
    template: './index.html',
    inject: true,
  },
  // output: {
  //   injectStyles: true
  // }
});
