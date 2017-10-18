module.exports = {
    devtool: 'source-map', // any "source-map"-like devtool is possible
    module : {
        rules: [{
            test: /\.scss$/,
            use : [{
                loader: 'sass-loader',
                options: {
                    includePaths: ["src/styles/main.scss"],
                    sourceMap: true
                }
            }]
        }]
    },
    type   : 'react-app',
}
