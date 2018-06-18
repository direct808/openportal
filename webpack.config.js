const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    mode: 'none',
    entry: {
        app: './resources/assets/js/app.js',
        // css: './src/styles.scss'
    },
    output: {
        path: path.resolve(__dirname, 'public/js'),
        publicPath: "/js/",
        filename: '[name].js'
    },
    resolve: {
        extensions: [".js", ".vue"],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            // ... other rules
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {modules: true}
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin(),
        // new BundleAnalyzerPlugin()
    ]
};


