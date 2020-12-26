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
	cards: [
		{
			title: "郑楚权"
		},
		{
			title: "江富豪"
		},
		{
			title: "郑颖"
		},
		{
			title: "邱相昭"
		},
		{
			title: "张洁婷"
		},
		{
			title: "符昭女"
		}
	]
}
