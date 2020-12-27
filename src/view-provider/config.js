import {
	TagOutlined,
	CommentOutlined,
	PictureOutlined,
	ShoppingOutlined,
	SolutionOutlined,
	HighlightOutlined,
	DatabaseOutlined,
	WifiOutlined,
	SkinOutlined,
	FlagTwoTone,
	AlertOutlined
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
		{
			name: "服务",
			icon: TagOutlined,
			handle: useRouteNameToPage("服务")
		},
		{
			name: "产品",
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
			name: "mod化",
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
			title: "mod化",
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

export const aboutViewConfig = {
	timeLineInfoTitle: "事件时间线",
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
	personnelIntroduction: "时间路口相册-人员介绍 19营销3组",
	cards: [
		{
			title: "江富豪",
			imgSrc: require("@a/11.png")
		},
		{
			title: "郑楚权",
			imgSrc: require("@a/12.png")
		},
		{
			title: "张洁婷",
			imgSrc: require("@a/13.png")
		},
		{
			title: "邱相昭",
			imgSrc: require("@a/14.png")
		},
		{
			title: "郑颖",
			imgSrc: require("@a/15.png")
		},
		{
			title: "符昭女",
			imgSrc: require("@a/16.png")
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
