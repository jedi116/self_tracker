module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    ['@babel/preset-react', { runtime: 'automatic' }],
    'next/babel',
  ],
  env: {
    test: {
      // Add any test-specific configurations
      plugins: []
    }
  }
};