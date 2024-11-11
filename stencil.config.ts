import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'sg-avatar',
  buildEs5: true,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
     copy: [
        {
          src: '**/*.{jpg,png}',
          dest: 'dist/components/assets',
          warn: true,
        }
      ]
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        {
          src: '**/*.{jpg,png}',
          dest: 'build/assets',
          warn: true,
        }
      ]
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
