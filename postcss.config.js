export default (config) => {
  const dev = config.env === 'development';

  return {
    map: dev ? { inline: false } : false,
    plugins: [
      'postcss-advanced-variables',
      'postcss-nested',
      'autoprefixer',
      'postcss-modules',
    ],
  };
};
