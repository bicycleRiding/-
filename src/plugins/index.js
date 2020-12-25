import router from "@r"
import { componentsPlugin } from "./components.js"

/**
 * 插件集
 * @type {import("vue").Plugin[]}
 */
const plugins = [router, componentsPlugin]

/**
 * 插件批量注册
 * @param {import("vue").App} app
 */
export const usePlugins = app =>
	plugins.forEach(app.use, app)
