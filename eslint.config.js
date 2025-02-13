import eslintPluginAstro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
	...eslintPluginAstro.configs.recommended,
	{
		files: ['**/*.{js,astro}'],
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
