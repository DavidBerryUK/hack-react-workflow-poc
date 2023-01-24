module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	ignorePatterns: ['build', 'public', 'dist', '**/*.spec.ts', '**/webpack.config.js'],
	extends: [
		'react-app',
		'react-app/jest',
		'airbnb',
		'airbnb-typescript',
		'plugin:import/typescript',
		'plugin:prettier/recommended',
		'plugin:github/react',
		'plugin:sonarjs/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		project: './tsconfig.eslint.json',
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'react-hooks', 'import', 'prettier', 'simple-import-sort'],
	rules: {
		'react/react-in-jsx-scope': ['off'],
		'react/jsx-uses-react': ['off'],
		'react/jsx-props-no-spreading': ['warn'],
		'react/no-unescaped-entities': ['off'],
		'no-use-before-define': ['off'],
		'react/function-component-definition': ['off'],
		'@typescript-eslint/no-use-before-define': ['off'],
		'react/destructuring-assignment': ['off'],
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
		'react/prop-types': 'off',
		'no-param-reassign': [
			2,
			{
				props: false,
			},
		],
	},
};
