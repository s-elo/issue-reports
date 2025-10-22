import { defineConfig, rspack } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

export default defineConfig({
  plugins: [pluginVue()],
  dev: {
    hmr: true,
    writeToDisk: true,
    lazyCompilation: {
      imports: true,
      entries: false,
      test(module) {
        const name = module.nameForCondition()
        console.log(name)
        return true;
      }
    }
    // lazyCompilation: false
  },
  server: {
    port: 1004,
  },
  html: {
    template: './index.html',
    inject: true,
  },
  tools: {
    htmlPlugin: false,
    rspack: {
      plugins: [
        // new rspack.experiments.SubresourceIntegrityPlugin({
        //   hashFuncNames: ['sha384'],
        //   enabled: true
        // }),
        new rspack.HtmlRspackPlugin({
          template: './index.html',
        })
      ],
      output: {
        // library: {
        //   type: 'umd'
        // }
        crossOriginLoading: 'anonymous',
        libraryTarget: 'umd'
      },
      // externalsType: 'umd',
      externals: {
        framework: {
          commonjs: ['framework', 'test'],
          commonjs2: ['framework', 'test'],
          amd: ['framework', 'test'],
          root: ['framework', 'test'],
        }
      }
    }
  }
});
