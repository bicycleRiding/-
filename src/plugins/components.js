import { Avatar, Button, Tag } from "ant-design-vue"
import { ElImage } from "element-plus"

/**
 * @type {import("vue").Component[]}
 */
const components = [Avatar, Button, Tag, ElImage]

/**
 * @type {import("vue").Plugin}
 */
export const componentsPlugin = app =>
	components.forEach(app.use, app)
