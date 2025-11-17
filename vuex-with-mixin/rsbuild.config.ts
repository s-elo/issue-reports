import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

export default defineConfig({
  source: { 
    include: [/vue-facing-decorator/], 
    decorators: {
      version: 'legacy',
    }, 
  },
  plugins: [pluginVue()],
  dev: {
    hmr: true,
    writeToDisk: true,
  },
  server: {
    port: 1004,
  },
  html: {
    template: './index.html',
    inject: true,
  },
  tools: {
    swc: {
      jsc: {
        parser: {
          syntax: 'typescript',
          tsx: true,
          decorators: true,
          dynamicImport: true,
        },
        transform: {
          decoratorMetadata: true,
          legacyDecorator: true,
        },
      }
    }
  }
});
