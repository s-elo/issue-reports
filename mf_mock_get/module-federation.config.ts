import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: '@portal',
  remotes: {
    '@portal': 'MMF_PORTAL@http://placeholder.js'
  },
  // exposes: {
  //   '.': './src/components/ProviderComponent.tsx',
  // },
  // shared: {
  //   react: { singleton: true },
  //   'react-dom': { singleton: true },
  // },
  experiments: {
    asyncStartup: false,
    provideExternalRuntime: true
  }
});
