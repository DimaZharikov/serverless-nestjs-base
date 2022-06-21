module.exports = {
  env: {
    'node': true,
    'es6': true,
    'jest/globals': true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:jest/recommended',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {
    'import/core-modules': ['express'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  rules: {
    'indent': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-explicit-any': ['error'],
    'camelcase': 0,
    '@typescript-eslint/camelcase': 0,
    'no-useless-constructor': ['off'],
    
    // Imports
    'import/order': [
      'error',
      {
        'groups': [
          ['external', 'internal', 'builtin'],
          ['sibling', 'parent'],
          'index',
          'object',
        ],
        'pathGroups': [
          {
            pattern: '@nestjs/**',
            group: 'external',
            position: 'before',
          },
        ],
        'pathGroupsExcludedImportTypes': ['builtin'],
        'newlines-between': 'always',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        jsx: 'never',
        tsx: 'never',
      },
    ],
    
    // Strict line length
    'max-len': [
      'error',
      120,
      2,
      {
        ignoreUrls: false,
        ignoreComments: false,
        ignoreRegExpLiterals: false,
        ignoreStrings: false,
        ignoreTemplateLiterals: false,
      },
    ],
    
    'class-methods-use-this': 'off',
    'no-return-await': 'off',
    
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
  overrides: [
    {
      files: [
        '*.spec.ts',
        '*.spec.js',
        '*.test.ts',
        '*.test.js',
        '*.e2e-spec.ts',
        '*.e2e-spec.js',
      ],
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
      },
    },
  ],
};
