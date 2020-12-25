// import { useRouter } from "vue-router"

import router from "@r/index"

export const useRouteNameToPage = (name = "首页") => {
	return () =>
		router.push({
			name
		})
}
