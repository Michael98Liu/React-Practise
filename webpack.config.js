module.exports = {
	entry: "./src/index.js",
	output: {
		path: __dirname + '/pbulic',
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
			}
		]	
	}
};