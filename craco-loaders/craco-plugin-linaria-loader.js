const { loaderByName, addBeforeLoader } = require('@craco/craco');

module.exports = {
  overrideWebpackConfig: ({
    webpackConfig, cracoConfig, pluginOptions, context: { env, paths },
  }) => {
    const linariaLoader = {
      test: /\.(js|ts?x)$/,
      use: [
        { loader: 'babel-loader' },
        {
          loader: '@linaria/webpack-loader',
          options: pluginOptions.cacheDirectory,
        },
      ],
    };

    // console.log(JSON.stringify(webpackConfig, null, 2));

    addBeforeLoader(webpackConfig, loaderByName('@linaria/webpack-loader'), linariaLoader);

    return webpackConfig;
  },
};
