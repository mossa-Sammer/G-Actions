import { defineConfig } from 'eslint-define-config';
import typescriptEslintParser from '@typescript-eslint/parser';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig([
  {
    files: ['./src**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      parser: typescriptEslintParser, // Correct way to set the parser
      parserOptions: {
        ecmaVersion: 2021, // ECMAScript version
        sourceType: 'module', // Allows import/export syntax
        ecmaFeatures: {
          jsx: true, // Enables JSX if needed
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin, // TypeScript plugin
      prettier: prettierPlugin, // Prettier plugin
    },
    rules: {
      // ESLint recommended rules
      'no-console': 'warn', // Warn about console statements
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      eqeqeq: ['warn', 'always'],

      // @typescript-eslint recommended rules
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // Prettier rules
      'prettier/prettier': 'error', // Enforce Prettier formatting
    },
  },
]);
