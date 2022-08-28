const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	configureWebpack: {
		experiments: {
			topLevelAwait: true,
		},
	},
	pwa: {
		themeColor: '#4ebff3',
		appleMobileWebAppCapable: 'yes',
		appleMobileWebAppStatusBarStyle: 'black-translucent',
	},
});
