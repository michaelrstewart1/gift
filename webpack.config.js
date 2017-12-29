var webpack = require('webpack')
var projectModules = '/srv/gift/node_modules'
var projectRoot = '/srv/gift'

module.exports =  {
	entry: {
		vue_modules: ['./vue/main.js'],
	},
	output: {
		path: "/dist/",
		publicPath: "/dist/",
		filename: "[name].js"
	},
	watch: false,
	module: {
		loaders: [
		{
			test: /\.js$/,
			// excluding some local linked packages.
			// for normal use cases only node_modules is needed.
			exclude: /node_modules/,
			loader: 'babel-loader',
		},
		{
			test: /\.vue$/,
			loader: 'vue-loader'
		}
		]
	},
	resolve: {
		modules: [projectRoot + '/vue', projectModules],
		extensions: ['js', '.js', '.vue'],
		alias: {
			
		}
	}
}
