import { Avatar, Button, Tag, Alert } from "ant-design-vue"
import { ElImage, ElCard } from "element-plus"

/**
 * @type {import("vue").Component[]}
 */
const components = [
	Avatar,
	Button,
	Tag,
	ElImage,
	Alert,
	ElCard
]

/**
 * @type {import("vue").Plugin}
 */
export const componentsPlugin = app =>
	components.forEach(app.use, app)
