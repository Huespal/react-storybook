// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

// const path = require('path')
// const autoprefixer = require('autoprefixer')

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // We require isomorphic-style-loader instead of style-loader because in dev both server and client are built and run in the same node process
                    // require.resolve('isomorphic-style-loader'),
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1
                        }
                    // },
                    // {
                    //     loader: require.resolve('postcss-loader'),
                    //     options: {
                    //         ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
                    //         plugins: () => [
                    //             require('postcss-flexbugs-fixes'),
                    //             autoprefixer({
                    //                 browsers: [
                    //                     '>1%',
                    //                     'last 4 versions',
                    //                     'Firefox ESR',
                    //                     'not ie < 9' // React doesn't support IE8 anyway
                    //                 ],
                    //                 flexbox: 'no-2009'
                    //             })
                    //         ]
                    //     }
                    }

]
            },
                    { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    }
}
