import eslintPluginAstro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintRecommended from '@eslint/js';

export default [
	eslintRecommended.configs.recommended,
	...eslintPluginAstro.configs.recommended,
	{
		files: ['**/*.{js,astro}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				console: 'readonly',
				document: 'readonly',
				window: 'readonly',
			},
		},
		plugins: {
			'jsx-a11y': jsxA11y, // JSXのアクセシビリティチェックを追加
		},
		rules: {
			'astro/no-set-html-directive': 'error',
			'quotes': ['error', 'single'],  // シングルクォートを強制
			'indent': ['error', 'tab'], // タブでのインデントを強制
			'jsx-a11y/alt-text': 'warn', // JSX A11yのルールを追加
		}
	}
];