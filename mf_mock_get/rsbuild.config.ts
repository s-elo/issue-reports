import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack'
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';

export default defineConfig({
  mode: 'development',
  plugins: [pluginReact()],
  output: {
    minify: true,
    injectStyles: false
  },
  source: {
    entry: {
      index: {
        import: './src/index.tsx',
        library: {
          type: 'umd',
        },
      }
    }
  },
  server: {
    port: 3001,
  },
  dev: {
    lazyCompilation: false,
    writeToDisk: true,
  },
  tools: {
    rspack: {
      mode: "development",
      externals: {
        'mmf-core': ['MMFCore']
      },
      devtool: false,
      plugins: [
        new ModuleFederationPlugin({
          name: '@portal',
          remotes: {
            ['@portal']: `MMF_PORTAL@http://placeholder.js`,
          },
          runtimePlugins: ['./module-federation-runtime-plugin.js'],
          experiments: {
            asyncStartup: false,
            provideExternalRuntime: true,
          },
        })
      ],
      optimization: {
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'initial',
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: 1,
              reuseExistingChunk: true,
              minSize: 0,
              name: 'vendors',
            },
            default: {
              // test: /\.(j|t)s(x?)$/,
              priority: 0,
              minSize: 0,
              name: 'framework',
            },
          },
        }
      }
    }
  }
});
