let mobile_flag

export function useIsMobileStatus() {
	const mobile_flag_status =
		mobile_flag === false || mobile_flag === true
	if (!mobile_flag_status) {
		mobile_flag = false
		let userAgentInfo = navigator.userAgent

		let mobileAgents = [
			"Android",
			"iPhone",
			"SymbianOS",
			"Windows Phone",
			"iPad",
			"iPod"
		]

		//根据userAgent判断是否是手机
		for (let v = 0; v < mobileAgents.length; v++) {
			if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
				mobile_flag = true
				break
			}
		}

		let screen_width = window.screen.width
		let screen_height = window.screen.height

		//根据屏幕分辨率判断是否是手机
		if (screen_width < 500 && screen_height < 800) {
			mobile_flag = true
		}
	}
	return mobile_flag
}
