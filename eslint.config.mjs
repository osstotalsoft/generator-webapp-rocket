import prettier from 'eslint-plugin-prettier'
import mochaPlugin from 'eslint-plugin-mocha'
import globals from 'globals'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import { fixupConfigRules } from '@eslint/compat'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

export default [
  {
    ignores: ['**/coverage', '**/templates']
  },
  mochaPlugin.configs.flat.recommended,
  ...fixupConfigRules(compat.extends('eslint:recommended', 'plugin:node/recommended', 'prettier')),
  {
    plugins: {
      prettier
    },
    languageOptions: {
      globals: {
        ...globals.mocha,
        ...globals.node
      },
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    files: ['**/*.{js,ts,mjs}'],
    rules: {
      semi: 0,
      quotes: 0,
      indent: 0,
      'linebreak-style': 0,
      'no-console': 0,
      'prettier/trailingComma': 'off',
      'node/exports-style': ['error', 'module.exports'],
      'node/file-extension-in-import': ['error', 'always'],
      'node/prefer-global/buffer': ['error', 'always'],
      'node/prefer-global/console': ['error', 'always'],
      'node/prefer-global/process': ['error', 'always'],
      'node/prefer-global/url-search-params': ['error', 'always'],
      'node/prefer-global/url': ['error', 'always'],
      'node/prefer-promises/dns': 'error',
      'node/prefer-promises/fs': 'error',
      'node/no-unpublished-require': 0,
      'node/no-unsupported-features/es-syntax': [
        'error',
        {
          ignores: ['modules']
        }
      ],
      'no-unused-vars': [
        1,
        {
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ],
      'mocha/max-top-level-suites': ['warn', { limit: 2 }]
    }
  }
]
