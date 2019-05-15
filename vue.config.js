const path = require('path');
const projectRoot = path.resolve(__dirname);

module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'@': path.join(projectRoot, '/src')
			}
		}
	},

	pluginOptions: {
		lintStyleOnBuild: true,
		quasar: {
			treeShake: true
		}
	},

	devServer: {
		port: 4000,
		disableHostCheck: true
	},

	transpileDependencies: [
		// eslint-disable-next-line
		/[\\\/]node_modules[\\\/]quasar[\\\/]/
	]
};
