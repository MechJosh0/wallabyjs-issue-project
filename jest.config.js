module.exports = {
	verbose: true,
	moduleFileExtensions: [
		'js',
		'jsx',
		'json',
		'vue',
		'ts',
		'tsx'
	],
	transform: {
		'^.+\\.vue$': 'vue-jest',
		'.*\\.js$': 'babel-jest',
		'.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
	},
	setupFiles: [
		'<rootDir>/testConfig/vueSetup.js'
	],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1'
	},
	snapshotSerializers: [
		'jest-serializer-vue'
	],
	testMatch: [
		'**/__tests__/*.spec.(js|jsx|ts|tsx)'
	],
	testURL: 'http://localhost/',
	transformIgnorePatterns: [
		'<rootDir>/node_modules/(?!(quasar)/)'
	],
	coveragePathIgnorePatterns: [
		'package.json',
		'package-lock.json',
		'jest.config.js',
		'testConfig/vueSetup.js'
	]
};
