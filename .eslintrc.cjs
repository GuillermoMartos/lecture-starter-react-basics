module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'indent': ['error', 2],
    'max-len': ['error', {
      code: 90,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "always"],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
  },
}
