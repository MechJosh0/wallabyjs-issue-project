// Wallaby App (realtime reports) is available at: http://localhost:51245

module.exports = (wallaby) =>
{
	process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;

	const compiler = wallaby.compilers.babel({ presets: [['@vue/app', { modules: 'commonjs' }]] });

	return {
		files: [
			'src/**/*',
			'testConfig/**/*.js',
			'jest.config.js',
			'babel.config.js',
			'package.json',
			'!src/**/__tests__/*.spec.js',
			'!src/**/__stories__/*.js'
			// '!src/**/*.styl'
		],
		tests: [
			'src/**/__tests__/*.spec.js'
		],
		env: {
			type: 'node',
			runner: 'node'
		},
		compilers: {
			'**/*.js': compiler,
			'**/*.vue': require('wallaby-vue-compiler')(compiler)
		},
		preprocessors: {
			'**/*.vue': (file) => require('vue-jest').process(file.content, file.path),
			'**/*.js?(x)': (file) => require('@babel/core').transform(
				file.content,
				{ sourceMap: true, compact: false, filename: file.path }
			)
		},
		setup: (wallaby) =>
		{
			const jestConfig = require('./jest.config');

			jestConfig.transform = {
				'^.+(quasar[^$]+.vue)': 'vue-jest'
			};

			wallaby.testFramework.configure(jestConfig);
		},
		testFramework: 'jest',
		debug: true
	};
};
