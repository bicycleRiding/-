const { resolve } = require("path")
const hardSource = require("hard-source-webpack-plugin")

const vueApplicationConfig = {
	publicPath: "./",
	productionSourceMap: false,
	configureWebpack: {
		plugins: [
			new hardSource({
				cacheDirectory: resolve(__dirname, "cache")
			})
		],
		resolve: {
			alias: {
				"@u": resolve(__dirname, "src/use"),
				"@c": resolve(__dirname, "src/components"),
				"@v": resolve(__dirname, "src/views"),
				"@p": resolve(__dirname, "src/plugins"),
				"@r": resolve(__dirname, "src/router"),
				"@l": resolve(__dirname, "src/layout"),
				"@b": resolve(__dirname, "src/blocks"),
				"@a": resolve(__dirname, "src/assets"),
				"@vp": resolve(__dirname, "src/view-provider")
			}
		}
	}
}

module.exports = vueApplicationConfig
