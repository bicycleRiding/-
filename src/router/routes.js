/**
 * @type {import("vue-router").RouteRecordRaw[]}
 */
export const routes = [
	{
		path: "/",
		name: "首页",
		component: () => import("@v/Home.vue")
	},
	{
		path: "/service",
		name: "服务",
		component: () => import("@v/Service.vue")
	},
	{
		path: "/product",
		name: "产品",
		component: () => import("@v/Product.vue")
	},
	{
		path: "/contact",
		name: "联系",
		component: () => import("@v/Contact.vue")
	},
	{
		path: "/about",
		name: "关于",
		component: () => import("@v/About.vue")
	},
	{
		path: "/:pathMatch(.*)*",
		name: "404",
		component: () => import("@v/NotFound.vue")
	}
]
