import {
	// TagOutlined,
	CalendarTwoTone,
	ContactsTwoTone,
	SmileTwoTone,
	ApiTwoTone,
	CommentOutlined,
	PictureOutlined,
	ShoppingOutlined,
	SolutionOutlined,
	HighlightOutlined,
	DatabaseOutlined,
	WifiOutlined,
	SkinOutlined,
	FlagTwoTone,
	AlertOutlined,
	ShopTwoTone
} from "@ant-design/icons-vue"

import { useNotice } from "@u/notice.js"
import { useRouteNameToPage } from "@u/router"

export const bHeaderConfig = {
	title: {
		text: "时间路口相册",
		handle: useNotice({
			msg: "时间路口相册",
			desc: "分享留下的美好回忆",
			icon: <PictureOutlined />
		})
	},
	avatarSrc: require("@a/logo.png"),
	menu: [
		{
			name: "首页",
			icon: AlertOutlined,
			handle: useRouteNameToPage("首页")
		},
		// {
		// 	name: "服务",
		// 	icon: TagOutlined,
		// 	handle: useRouteNameToPage("服务")
		// },
		{
			name: "产品服务",
			icon: ShoppingOutlined,
			handle: useRouteNameToPage("产品")
		},
		{
			name: "联系我们",
			icon: CommentOutlined,
			type: "dashed",
			handle: useRouteNameToPage("联系")
		},
		{
			name: "关于",
			type: "primary",
			icon: SolutionOutlined,
			handle: useRouteNameToPage("关于")
		}
	]
}

export const homeViewConfig = {
	slogan: {
		text: "slogan 分享留下的美好回忆",
		handle: useNotice({
			msg: "slogan",
			desc: "分享留下的美好回忆",
			icon: <FlagTwoTone twoToneColor='green' />
		})
	},
	tags: [
		{
			name: "相册mod活动",
			color: "#66BB6A",
			icon: HighlightOutlined,
			handle: useNotice({
				msg: "分享自定相册mod",
				desc: "让我们看看你的奇思异想",
				icon: <HighlightOutlined />
			})
		},
		{
			name: "云分享",
			color: "#5C6BC0",
			icon: WifiOutlined,
			handle: useNotice({
				msg: "体验云相册社区",
				desc: "24小时随手分享你的美好世界",
				icon: <WifiOutlined />
			})
		},
		{
			name: "云存储",
			color: "#7E57C2",
			icon: DatabaseOutlined,
			handle: useNotice({
				msg: "享受云相册存储空间",
				desc: "不再担心留不住你的美好",
				icon: <DatabaseOutlined />
			})
		},
		{
			name: "多主题",
			color: "#F06292",
			icon: SkinOutlined,
			handle: useNotice({
				msg: "挑选多样化相册主题",
				desc: "选择从来在你手中",
				icon: <SkinOutlined />
			})
		}
	],
	imgs: [
		{ src: require("@a/1.jpeg") },
		{ src: require("@a/2.jpg") },
		{ src: require("@a/3.jpg") },
		{ src: require("@a/4.jpg") },
		{ src: require("@a/5.jpg") }
	],
	cards: [
		{
			title: "相册mod活动",
			imgSrc: require("@a/6.jpg"),
			text1: "分享自定相册mod",
			text2: "让我们看看你的奇思异想"
		},
		{
			title: "云分享",
			imgSrc: require("@a/7.jpg"),
			text1: "体验云相册社区",
			text2: "24小时随手分享你的美好世界"
		},
		{
			title: "云存储",
			imgSrc: require("@a/8.jpg"),
			text1: "享受云相册存储空间",
			text2: "不再担心留不住你的美好"
		},
		{
			title: "多主题",
			imgSrc: require("@a/9.jpg"),
			text1: "挑选多样化相册主题",
			text2: "选择从来在你手中"
		}
	],
	footer: {
		title: "时间路口相册 一个长在云端的相册"
	}
}

const usePersonalNotice = msg =>
	useNotice({
		msg,
		icon: <SmileTwoTone twoToneColor='#81C784' />
	})

export const aboutViewConfig = {
	timeLineInfoTitle: "事件时间线",
	timeLineInfoHandle: useNotice({
		msg: "重大事件的时间线哦~~",
		icon: <CalendarTwoTone />
	}),
	personnelIntroductionHandle: useNotice({
		msg: "人员介绍哦~~",
		icon: <ContactsTwoTone twoToneColor='#81C784' />
	}),
	timeLineInfo: [
		{
			time: "2020/12/28",
			title: "ui与渲染优化",
			color: "#FFB74D",
			text: "加入动画，优化首屏渲染"
		},
		{
			time: "2020/12/27",
			title: "站点部署上线",
			color: "#7CB342",
			text: ""
		},
		{
			time: "2020/12/26",
			title: "移动端兼容",
			color: "#1A237E",
			text: ""
		},
		{
			time: "2020/12/26",
			title: "pc站点建成",
			color: "#3F51B5",
			text: ""
		},
		{
			time: "2020/12/23",
			title: "站点基建",
			color: "#42A5F5",
			text: "站点基础布局建设，项目逻辑域抽象划分"
		},
		{
			time: "2020/12/22",
			title: "建站初始化",
			color: "#BBDEFB",
			text:
				"选取技术栈 vue3 + nginx + ant-design-vue@2 + element-plus 初始化站点项目"
		},
		{
			time: "2020/9/-",
			title: "项目概念提出",
			text:
				"`以分享留下的美好回忆` 作为slogan, 定位为 `一个长在云端的相册`。主营业务有线下实际相册类产品供应和线上社区化分享与存储服务"
		}
	],
	personnelIntroduction:
		"时间路口相册工作室-人员介绍 19营销3组",
	cards: [
		{
			title: "郑楚权",
			imgSrc: require("@a/12.png"),
			tags: [
				{
					text: "创始人",
					color: "#80CBC4",
					style: { color: "#37474F" },
					handle: usePersonalNotice("帅气的创始人")
				},
				{
					text: "技术总监",
					type: "success",
					handle: usePersonalNotice("帅气的技术总监")
				}
			]
		},
		{
			title: "江富豪",
			imgSrc: require("@a/11.png"),
			tags: [
				{
					text: "管理总监",
					handle: usePersonalNotice("帅气的管理总监")
				}
			]
		},
		{
			title: "张洁婷",
			imgSrc: require("@a/13.png"),
			tags: [
				{
					text: "设计总监",
					type: "danger",
					handle: usePersonalNotice("漂亮的设计总监")
				}
			]
		},
		{
			title: "邱相昭",
			imgSrc: require("@a/14.png"),
			tags: [
				{
					text: "财务总监",
					type: "warning",
					handle: usePersonalNotice("美丽的财务总监")
				}
			]
		},
		{
			title: "郑颖",
			imgSrc: require("@a/15.png"),
			tags: [
				{
					text: "HR",
					color: "#80DEEA",
					style: {
						color: "#37474F"
					},
					handle: usePersonalNotice("美丽的HR")
				}
			]
		},
		{
			title: "符灶女",
			imgSrc: require("@a/16.png"),
			tags: [
				{
					text: "营销总监",
					color: "#9FA8DA",
					style: {
						color: "#37474F"
					},
					handle: usePersonalNotice("美丽的营销总监")
				}
			]
		}
	]
}

export const contactViewConfig = {
	tableInfo: [
		{
			contacts: "郑楚权",
			platform: "微信",
			contactNumber: "zcq13119830591"
		},
		{
			contacts: "郑楚权",
			platform: "邮箱",
			contactNumber: "1801982702@qq.com"
		}
	],
	tableConfig: [
		{
			prop: "contacts",
			label: "联系人"
		},
		{
			prop: "platform",
			label: "联系平台"
		},
		{
			prop: "contactNumber",
			label: "联系账号"
		}
	]
}

const mallErectionNotice = useNotice({
	msg: "商城架设ing~~",
	desc: "敬请期待",
	icon: <ShopTwoTone />
})

const serviceErectionNotice = useNotice({
	msg: "服务架设ing~~",
	desc: "敬请期待",
	icon: <ApiTwoTone />
})

export const productViewConfig = {
	carouselImgs: [
		{ src: require("@a/18.jpg") },
		{ src: require("@a/19.jpg") },
		{ src: require("@a/20.jpg") },
		{ src: require("@a/21.jpg") }
	],
	productCards: [
		{
			title: "礼盒装🎁时光相册",
			imgSrc: require("@a/22.jpg"),
			text1: "将美好传递给你爱人",
			text2: "10寸-50页-100张相片",
			text2Style: { color: "#00796B" },
			text3: "售价 39.9元",
			text3Style: { color: "#F4511E" },
			buttonText: "买它",
			icon: "el-icon-shopping-cart-full",
			handle: mallErectionNotice
		},
		{
			title: "婚纱相册💑",
			imgSrc: require("@a/23.jpg"),
			text1: "用高端水晶本留住你们的美好",
			text2: "10寸-65页-130张相片",
			text2Style: { color: "#00796B" },
			text3: "售价 39.9元",
			text3Style: { color: "#F4511E" },
			buttonText: "买它",
			icon: "el-icon-shopping-cart-full",

			handle: mallErectionNotice
		},
		{
			title: "定制✍相册书",
			imgSrc: require("@a/24.jpg"),
			text1: "为你的回忆定制独特的美",
			text2: "10寸-40页-120张相片",
			text2Style: { color: "#00796B" },
			text3: "售价 29.9元",
			text3Style: { color: "#F4511E" },
			buttonText: "买它",
			icon: "el-icon-shopping-cart-full",
			handle: mallErectionNotice
		},
		{
			title: "活页🙌相册本",
			imgSrc: require("@a/25.jpg"),
			text1: "把回忆揣在手心里吧",
			text2: "4寸-40页-80张相片",
			text2Style: { color: "#00796B" },
			text3: "售价 16.8元",
			text3Style: { color: "#F4511E" },
			buttonText: "买它",
			icon: "el-icon-shopping-cart-full",
			handle: mallErectionNotice
		},
		{
			title: "佛系🧙‍♂️相册本",
			imgSrc: require("@a/26.jpg"),
			text1: "存放自己平平无奇的日子",
			text2: "10寸-60页-120张相片",
			text2Style: { color: "#00796B" },
			text3: "售价 29.8元",
			text3Style: { color: "#F4511E" },
			buttonText: "买它",
			icon: "el-icon-shopping-cart-full",
			handle: mallErectionNotice
		},
		{
			title: "家庭‍👨‍👨‍👧‍👦时光相册",
			imgSrc: require("@a/27.jpg"),
			text1: "这是留给家人的时光",
			text2: "10寸-60页-120张相片",
			text2Style: { color: "#00796B" },
			text3: "售价 26.8元",
			text3Style: { color: "#F4511E" },
			buttonText: "买它",
			icon: "el-icon-shopping-cart-full",
			handle: mallErectionNotice
		},
		{
			title: "大大大🍰大相册",
			imgSrc: require("@a/28.jpg"),
			text1: "没有什么回忆是存不下的",
			text2: "12寸-80页-400张相片",
			text2Style: { color: "#00796B" },
			text3: "售价 49.8元",
			text3Style: { color: "#F4511E" },
			buttonText: "买它",
			icon: "el-icon-shopping-cart-full",
			handle: mallErectionNotice
		},
		{
			title: "宝宝👶时光相册",
			imgSrc: require("@a/29.jpg"),
			text1: "记录宝宝成长的每一刻",
			text2: "11寸-30页-180张相片",
			text2Style: { color: "#00796B" },
			text3: "售价 49.8元",
			text3Style: { color: "#F4511E" },
			buttonText: "买它",
			icon: "el-icon-shopping-cart-full",
			handle: mallErectionNotice
		},
		{
			title: "敬请期待",
			imgSrc: require("@a/30.jpg"),
			text2: "更多热销相册上架ing",
			text2Style: { color: "#FB8C00" },
			text3: "快🐎加鞭ing~~",
			text3Style: { color: "#607D8B" }
		}
	],
	serviceCards: [
		{
			title: "相册mod活动",
			imgSrc: require("@a/6.jpg"),
			text1: "为所有人的回忆留下一份精致",
			text2: "Feature",
			text2Style: {
				color: "#1565C0",
				margin: "10px 40px",
				backgroundColor: "#E1F5FE"
			},
			text3:
				"mod社区展示\nmod自定义模块支持\n周期性官方mod供应\n每月最优mod奖励机制\n(相册mod实物化奖励)",
			text3Style: {
				color: "#1E88E5",
				whiteSpace: "pre-wrap"
			},
			buttonText: "点我提交",
			buttonType: "success",
			icon: "el-icon-picture-outline-round",
			handle: serviceErectionNotice
		},
		{
			title: "云分享",
			imgSrc: require("@a/7.jpg"),
			text1: "参与云社区分享你每日的美好",
			text2: "Feature",
			text2Style: {
				color: "#1565C0",
				margin: "10px 40px",
				backgroundColor: "#E1F5FE"
			},
			text3:
				"图片集虚拟相册化展示\n支持对虚拟相册自定义\n每周优秀作品流量扶持",
			text3Style: {
				color: "#1E88E5",
				whiteSpace: "pre-wrap"
			},
			buttonText: "点我参与",
			buttonType: "success",
			icon: "el-icon-cloudy",
			handle: serviceErectionNotice
		},
		{
			title: "云存储",
			imgSrc: require("@a/8.jpg"),
			text1: "享受云相册存储空间",
			text2: "Feature",
			text2Style: {
				color: "#1565C0",
				margin: "10px 40px",
				backgroundColor: "#E1F5FE"
			},
			text3:
				"10GB大云容量免费送\n30GB-9.9元/月\n 5G-1元首单购",
			text3Style: {
				color: "#1E88E5",
				whiteSpace: "pre-wrap"
			},
			buttonText: "点我订阅",
			buttonType: "danger",
			handle: serviceErectionNotice,
			icon: "el-icon-sell"
		},
		{
			title: "多主题",
			imgSrc: require("@a/9.jpg"),
			text1: "挑选多样化相册主题",
			text2: "Feature",
			text2Style: {
				color: "#1565C0",
				margin: "10px 40px",
				backgroundColor: "#E1F5FE"
			},
			text3: "丰富mod社区物料支持\n多材质提供",
			text3Style: {
				color: "#1E88E5",
				whiteSpace: "pre-wrap"
			},
			buttonText: "点我定制",
			buttonType: "primary",
			icon: "el-icon-edit",
			handle: serviceErectionNotice
		},
		{
			title: "敬请期待",
			imgSrc: require("@a/35.jpg"),
			text2: "更多服务上线ing",
			text2Style: { color: "#FB8C00" },
			text3: "快🐎加鞭ing~~",
			text3Style: { color: "#607D8B" }
		}
	]
}
