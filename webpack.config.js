const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/build/'
	},

	devtool: 'source-map',
	mode: 'development',

	module: {
		rules: [
			{
				test: /\.js/,
				use: [
					{
						loader: 'babel-loader',
						options: { presets: ["env"] }
					}
				]
			},

			{
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }
		]
	}
}