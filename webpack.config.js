const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './index.js',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'index_bundle.js',
	},
	target: 'web',
	devServer: {
		port: '3000',
		static: {
			directory: path.join(__dirname, 'public'),
		},
		open: true,
		hot: true,
		liveReload: true,
	},
	resolve: {
		/** "extensions"
		 * If multiple files share the same name but have different extensions, webpack will
		 * resolve the one with the extension listed first in the array and skip the rest.
		 * This is what enables users to leave off the extension when importing
		 */
		extensions: ['.js', '.jsx', '.json'],
	},
	module: {
		/** "rules"
		 * This says - "Hey webpack compiler, when you come across a path that resolves to a '.js or .jsx'
		 * file inside of a require()/import statement, use the babel-loader to transform it before you
		 * add it to the bundle. And in this process, kindly make sure to exclude node_modules folder from
		 * being searched"
		 */
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
		}),
	],
};
