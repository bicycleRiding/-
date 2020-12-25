import { onUnmounted, ref } from "vue"

export const useGlobalScroll = callback => {
	window.addEventListener("scroll", callback)

	const removeEventListener = window.removeEventListener.bind(
		window,
		"scroll",
		callback
	)
	onUnmounted(removeEventListener)
}

export const useGlobalScorlledStatus = () => {
	const status = ref(false)
	useGlobalScroll(() => {
		const scrollTop = document.documentElement.scrollTop
		status.value = scrollTop > 0 ? true : false
	})
	return status
}
