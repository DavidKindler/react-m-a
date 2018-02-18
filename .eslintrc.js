module.exports = {
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  ecmaFeatures: {
    jsx: true,
    modules: true
  },
  env: {
    browser: true,
    node: true
  },
  parser: 'babel-eslint',
  rules: {
    quotes: [2, 'single'],
    strict: [2, 'never'],
    'babel/generator-star-spacing': 1,
    'babel/new-cap': 1,
    'babel/object-shorthand': 1,
    'babel/arrow-parens': 1,
    'babel/no-await-in-loop': 1,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/react-in-jsx-scope': 2
  },
  plugins: ['babel', 'react'],
  extends: ['prettier']
};
