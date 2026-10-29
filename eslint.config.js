import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    ignores: [
      'dist/**',
      'coverage/**',
      // These directories were placeholder files from an earlier staged shell;
      // the application now lives in src/main.jsx until it is split into modules.
      'src/admin/**',
      'src/components/**',
      'src/context/**',
      'src/hooks/**',
      'src/lib/**',
      'src/pages/**'
    ]
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
      parserOptions: { ecmaFeatures: { jsx: true } }
    },
    plugins: { 'react-hooks': reactHooks },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      // This app is in one entry module during the initial integration pass.
      // Build verification remains required in CI.
      'no-unused-vars': 'off'
    }
  }
];
