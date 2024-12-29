module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    '@vue/eslint-config-typescript',
    'plugin:tailwindcss/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.vue'],
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  settings: {
    'import/resolver': {
      typescript: {}
}
  },
  ignorePatterns: ['.eslintrc.cjs'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.vue'],
      parserOptions: {
        project: ['./tsconfig.json']
      }
    }
  ]
}
