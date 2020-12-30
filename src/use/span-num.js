import useIsMobileStatus from "./mobile"

export const useSpanNum = op => {
	const spanNum = op.spanNum || op.cardslength
	let cardSpan = Math.ceil(24 / spanNum)
	if (useIsMobileStatus()) {
		const mobileSpanNum = op.mobileSpanNum || 1
		cardSpan = Math.ceil(24 / mobileSpanNum)
	}
	return cardSpan
}
