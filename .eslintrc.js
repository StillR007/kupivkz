module.exports = {
	'root': true,
	'env': {
		node: true,
	},
	'extends': [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
	],
	'parserOptions': {
		parser: '@babel/eslint-parser',
	},
	'rules': {
		'indent': [
			'warn',
			'tab',
			{ SwitchCase: 1 },
		],
		'linebreak-style': [
			'warn',
			'windows',
		],
		'quotes': ['warn', 'single', { allowTemplateLiterals: true,
			avoidEscape: true }],
		'semi': ['warn', 'always', { omitLastInOneLineBlock: true }],
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'no-compare-neg-zero': 'warn',
		'no-cond-assign': [
			'warn',
			'always',
		],
		'no-constant-condition': 'warn',
		'no-control-regex': 'warn',
		'no-debugger': 'warn',
		'no-dupe-args': 'warn',
		'no-dupe-keys': 'warn',
		'no-duplicate-case': 'warn',
		'no-empty': 'warn',
		'no-empty-character-class': 'warn',
		'no-ex-assign': 'warn',
		'no-extra-boolean-cast': 'warn',
		'no-extra-parens': 'warn',
		'no-extra-semi': 'warn',
		'no-func-assign': 'warn',
		'no-inner-declarations': 'warn',
		'no-invalid-regexp': 'warn',
		'no-irregular-whitespace': 'warn',
		'no-obj-calls': 'warn',
		'no-prototype-builtins': 'warn',
		'no-regex-spaces': 'warn',
		'no-sparse-arrays': 'warn',
		'no-template-curly-in-string': 'warn',
		'no-unexpected-multiline': 'warn',
		'no-unreachable': 'warn',
		'no-unsafe-finally': 'warn',
		'no-unsafe-negation': 'warn',
		'use-isnan': 'warn',
		'valid-jsdoc': 'off',
		'valid-typeof': [
			'warn',
			{
				requireStringLiterals: true,
			},
		],
		'accessor-pairs': 'off',
		'array-callback-return': 'warn',
		'block-scoped-var': 'warn',
		'class-methods-use-this': 'warn',
		'complexity': 'off',
		'consistent-return': 'warn',
		'curly': [
			'warn',
			'all',
		],
		'default-case': 'warn',
		'dot-location': [
			'warn',
			'property',
		],
		'dot-notation': [
			'warn',
			{
				allowKeywords: true,
			},
		],
		'eqeqeq': [
			'warn',
			'always',
			{
				'null': 'ignore',
			},
		],
		'guard-for-in': 'warn',
		'no-alert': 'warn',
		'no-caller': 'warn',
		'no-case-declarations': 'warn',
		'no-div-regex': 'off',
		'no-else-return': 'warn',
		'no-empty-function': [
			'warn',
			{
				allow: [
					'arrowFunctions',
					'functions',
					'methods',
				],
			},
		],
		'no-empty-pattern': 'warn',
		'no-eq-null': 'off',
		'no-eval': 'warn',
		'no-extend-native': 'warn',
		'no-extra-bind': 'warn',
		'no-extra-label': 'warn',
		'no-fallthrough': 'warn',
		'no-floating-decimal': 'warn',
		'no-global-assign': 'warn',
		'no-implicit-coercion': 'off',
		'no-implicit-globals': 'off',
		'no-implied-eval': 'warn',
		'no-invalid-this': 'off',
		'no-iterator': 'warn',
		'no-labels': 'warn',
		'no-lone-blocks': 'warn',
		'no-loop-func': 'warn',
		'no-magic-numbers': 'off',
		'no-multi-spaces': 'warn',
		'no-multi-str': 'warn',
		'no-new': 'warn',
		'no-new-func': 'warn',
		'no-new-wrappers': 'warn',
		'no-octal': 'warn',
		'no-octal-escape': 'warn',
		'no-param-reassign': 'off',
		'no-proto': 'warn',
		'no-redeclare': 'warn',
		'no-return-assign': 'warn',
		'no-return-await': 'warn',
		'no-script-url': 'warn',
		'no-self-assign': 'warn',
		'no-self-compare': 'warn',
		'no-sequences': 'warn',
		'no-throw-literal': 'warn',
		'no-unmodified-loop-condition': 'off',
		'no-unused-expressions': ['warn', { allowTernary: true }],
		'no-unused-labels': 'warn',
		'no-useless-call': 'off',
		'no-useless-concat': 'warn',
		'no-useless-escape': 'warn',
		'no-useless-return': 'warn',
		'no-void': 'warn',
		'no-warning-comments': 'off',
		'no-with': 'warn',
		'prefer-promise-reject-errors': 'off',
		'radix': 'warn',
		'require-await': 'off',
		'vars-on-top': 'warn',
		'wrap-iife': [
			'warn',
			'inside',
			{
				functionPrototypeMethods: false,
			},
		],
		'yoda': 'warn',
		'strict': [
			'warn',
			'never',
		],
		'init-declarations': 'off',
		'no-catch-shadow': 'off',
		'no-delete-var': 'warn',
		'no-label-var': 'warn',
		'no-restricted-globals': 'off',
		'no-shadow': 'warn',
		'no-shadow-restricted-names': 'warn',
		'no-undef': 'warn',
		'no-undef-init': 'warn',
		'no-undefined': 'off',
		'no-unused-vars': [
			'warn',
			{
				vars: 'local',
				args: 'after-used',
				ignoreRestSiblings: true,
			},
		],
		'no-use-before-define': 'warn',
		'callback-return': 'off',
		'global-require': 'warn',
		'handle-callback-err': 'off',
		'no-mixed-requires': 'off',
		'no-new-require': 'warn',
		'no-path-concat': 'warn',
		'no-process-env': 'off',
		'no-process-exit': 'off',
		'no-restricted-modules': 'off',
		'no-sync': 'off',
		'array-bracket-spacing': [
			'warn',
			'never',
		],
		'block-spacing': [
			'warn',
			'always',
		],
		'brace-style': [
			'warn',
			'1tbs',
			{
				allowSingleLine: false,
			},
		],
		'camelcase': [
			'warn',
			{
				properties: 'never',
			},
		],
		'capitalized-comments': 'off',
		'comma-dangle': [
			'warn',
			'always-multiline',
		],
		'comma-spacing': [
			'warn',
			{
				before: false,
				after: true,
			},
		],
		'comma-style': [
			'warn',
			'last',
		],
		'computed-property-spacing': [
			'warn',
			'never',
		],
		'consistent-this': 'off',
		'eol-last': [
			'warn',
			'always',
		],
		'func-call-spacing': [
			'warn',
			'never',
		],
		'func-name-matching': 'off',
		/* 'func-names': 'as-needed', */
		'func-style': 'off',
		'id-blacklist': 'off',
		'id-length': 'off',
		'id-match': 'off',
		'jsx-quotes': 'off',
		'key-spacing': [
			'warn',
			{
				beforeColon: false,
				afterColon: true,
			},
		],
		'keyword-spacing': [
			'warn',
			{
				before: true,
				after: true,
			},
		],
		'line-comment-position': 'off',
		'lines-around-comment': 'off',
		'lines-around-directive': [
			'warn',
			{
				before: 'always',
				after: 'always',
			},
		],
		'max-depth': 'off',
		'max-len': [
			'warn',
			{
				code: 120,
				tabWidth: 2,
				ignoreComments: false,
				ignoreTrailingComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
			},
		],
		'max-lines': 'off',
		'max-nested-callbacks': 'off',
		'max-params': 'off',
		'max-statements': 'off',
		'max-statements-per-line': 'off',
		'multiline-ternary': 'off',
		'new-cap': ['warn', { capIsNew: true,
			newIsCap: false }],
		'new-parens': 'warn',
		'newline-after-var': 'off',
		'newline-before-return': 'warn',
		'newline-per-chained-call': [
			'warn',
			{
				ignoreChainWithDepth: 5,
			},
		],
		'no-array-constructor': 'warn',
		'no-bitwise': 'warn',
		'no-continue': 'warn',
		'no-inline-comments': 'off',
		'no-lonely-if': 'warn',
		'no-mixed-operators': 'off',
		'no-mixed-spaces-and-tabs': 'warn',
		'no-multi-assign': 'warn',
		'no-multiple-empty-lines': [
			'warn',
			{
				max: 1,
				maxBOF: 0,
				maxEOF: 1,
			},
		],
		'no-negated-condition': 'off',
		'no-nested-ternary': 'warn',
		'no-new-object': 'warn',
		'no-plusplus': 'off',
		'no-restricted-syntax': 'off',
		'no-tabs': 'off',
		'no-ternary': 'off',
		'no-trailing-spaces': 'warn',
		'no-underscore-dangle': 'warn',
		'no-unneeded-ternary': 'warn',
		'no-whitespace-before-property': 'warn',
		'nonblock-statement-body-position': 'off',
		'object-curly-newline': [
			'warn',
			{
				consistent: true,
				minProperties: 0,
			},
		],
		'object-curly-spacing': ['warn', 'always', { objectsInObjects: true }],
		'object-property-newline': 'warn',
		'one-var': [
			'warn',
			'never',
		],
		'one-var-declaration-per-line': [
			'warn',
			'always',
		],
		'operator-assignment': [
			'warn',
			'always',
		],
		'operator-linebreak': 'off',
		'padded-blocks': [
			'warn',
			'never',
		],
		'quote-props': [
			'warn',
			'consistent-as-needed',
			{
				keywords: true,
				unnecessary: true,
				numbers: true,
			},
		],
		'require-jsdoc': 'off',
		'semi-spacing': [
			'warn',
			{
				before: false,
				after: true,
			},
		],
		'sort-keys': 'off',
		'sort-vars': 'off',
		'space-before-blocks': 'warn',
		'space-before-function-paren': [
			'warn',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always',
			},
		],
		'space-in-parens': [
			'warn',
			'never',
		],
		'space-infix-ops': 'warn',
		'space-unary-ops': [
			'warn',
			{
				words: true,
				nonwords: false,
			},
		],
		'spaced-comment': [
			'warn',
			'always',
			{
				line: {
					exceptions: [
						'-',
						'+',
					],
					markers: [
						'=',
						'!',
					],
				},
				block: {
					exceptions: [
						'-',
						'+',
					],
					markers: [
						'=',
						'!',
					],
					balanced: false,
				},
			},
		],
		'template-tag-spacing': 'off',
		'unicode-bom': [
			'warn',
			'never',
		],
		'wrap-regex': 'off',
		'arrow-body-style': 'off',
		'arrow-parens': [
			'warn',
			'always',
		],
		'arrow-spacing': [
			'warn',
			{
				before: true,
				after: true,
			},
		],
		'constructor-super': 'warn',
		'generator-star-spacing': [
			'warn',
			{
				before: false,
				after: true,
			},
		],
		'no-class-assign': 'warn',
		'no-confusing-arrow': [
			'warn',
			{
				allowParens: false,
			},
		],
		'no-const-assign': 'warn',
		'no-dupe-class-members': 'warn',
		'no-duplicate-imports': 'off',
		'no-new-symbol': 'warn',
		'no-restricted-imports': 'off',
		'no-this-before-super': 'warn',
		'no-useless-computed-key': 'warn',
		'no-useless-constructor': 'warn',
		'no-useless-rename': 'warn',
		'no-var': 'warn',
		'object-shorthand': [
			'warn',
			'always',
			{
				avoidQuotes: true,
				ignoreConstructors: true,
			},
		],
		'prefer-arrow-callback': [
			'warn',
			{
				allowNamedFunctions: false,
				allowUnboundThis: true,
			},
		],
		'prefer-const': 'off',
		'prefer-destructing': 'off',
		'prefer-numeric-literals': 'warn',
		'prefer-rest-params': 'warn',
		'prefer-spread': 'warn',
		'prefer-template': 'warn',
		'require-yield': 'warn',
		'rest-spread-spacing': [
			'warn',
			'never',
		],
		'sort-imports': 'off',
		'symbol-description': 'warn',
		'template-curly-spacing': [
			'warn',
			'never',
		],
		'yield-star-spacing': [
			'warn',
			'after',
		],
	},
};
