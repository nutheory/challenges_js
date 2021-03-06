module.exports = {
	globals: {
		'ts-jest': {
			tsConfig: 'tsconfig.json'
		}
	},
	moduleFileExtensions: [
		'ts',
		'js'
	],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest'
	},
	testRegex: [
		'(/__tests__/.*|(\\.|/)(test?|spec?))\\.(js?|ts?)$'
	],
	testEnvironment: 'node',
	collectCoverage: true
};