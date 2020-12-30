import { Avatar, Button, Tag, Alert } from "ant-design-vue"
import {
	ElImage,
	ElCard,
	ElCarousel,
	ElCarouselItem,
	ElTag
} from "element-plus"

/**
 * @type {import("vue").Component[]}
 */
const components = [
	Avatar,
	Button,
	Tag,
	ElImage,
	Alert,
	ElCard,
	ElCarousel,
	ElCarouselItem,
	ElTag
]

/**
 * @type {import("vue").Plugin}
 */
export const componentsPlugin = app =>
	components.forEach(app.use, app)
