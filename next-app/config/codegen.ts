import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:3000/api/graphql',
  documents: ['src/**/*.(tsx|ts)'],
  generates: {
    './src/.generated/types.ts': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        avoidOptionals: true,
      },
    },
    // './src/.generated/graphql.schema.json': {
    //   plugins: ['introspection'],
    // },
  },
};

export default config;
