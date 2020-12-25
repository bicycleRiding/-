import { notification } from "ant-design-vue"
import { CheckCircleTwoTone } from "@ant-design/icons-vue"

export const useNotice = options => () => {
	const {
		msg,
		desc,
		type = "success",
		duration = 1.5,
		icon = <CheckCircleTwoTone twoToneColor='#52c41a' />
	} = options
	const notice = notification[type]

	if (notice) {
		notice({
			message: msg,
			description: desc || "",
			duration,
			icon
		})
	}
}
