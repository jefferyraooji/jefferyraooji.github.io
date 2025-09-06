export interface TravelEntry {
	id: string;
	title: string;
	location: string;
	date: string;
	year: string;
	description: string;
	images: string[];
	tags: string[];
	highlights: string[];
}

export const travelData: TravelEntry[] = [
	{
		id: "boston-2025",
		title: "波士顿独立日",
		location: "波士顿, 美国",
		date: "2025年7月4日",
		year: "2025",
		description: "在美国独立日这天来到波士顿，感受美国的历史文化。参观了自由之路，体验了浓厚的爱国氛围。",
		images: ["/assets/images/travel/boston-1.jpg"],
		tags: ["美国", "波士顿", "历史", "独立日"],
		highlights: [
			"参观自由之路历史遗迹",
			"体验独立日庆祝活动",
			"品尝波士顿龙虾",
			"游览哈佛大学和MIT"
		]
	},
	{
		id: "seattle-2025",
		title: "西雅图科技之旅",
		location: "西雅图, 美国",
		date: "2025年5月13日",
		year: "2025",
		description: "探索西雅图的科技文化，参观了微软和亚马逊总部，感受这座科技之城的魅力。",
		images: ["/assets/images/travel/seattle-1.jpg"],
		tags: ["美国", "西雅图", "科技", "咖啡"],
		highlights: [
			"参观微软总部",
			"游览亚马逊球体",
			"登上太空针塔",
			"品尝西雅图咖啡文化"
		]
	},
	{
		id: "hawaii-2025",
		title: "夏威夷度假",
		location: "夏威夷, 美国",
		date: "2025年5月6日",
		year: "2025",
		description: "在夏威夷享受阳光海滩，体验热带风情。火山、海滩、文化，这里应有尽有。",
		images: ["/assets/images/travel/hawaii-1.jpg"],
		tags: ["美国", "夏威夷", "海滩", "火山"],
		highlights: [
			"参观火山国家公园",
			"享受威基基海滩",
			"体验草裙舞文化",
			"品尝夏威夷美食"
		]
	},
	{
		id: "washington-2024",
		title: "华盛顿跨年",
		location: "华盛顿特区, 美国",
		date: "2024年12月31日",
		year: "2024",
		description: "在华盛顿特区跨年，参观了白宫、国会大厦等政治地标，感受美国政治中心的历史厚重感。",
		images: ["/assets/images/travel/washington-1.jpg"],
		tags: ["美国", "华盛顿", "政治", "历史"],
		highlights: [
			"参观白宫和国会大厦",
			"游览林肯纪念堂",
			"参观史密森尼博物馆",
			"体验跨年庆祝活动"
		]
	},
	{
		id: "miami-2024",
		title: "迈阿密海滩",
		location: "迈阿密, 美国",
		date: "2024年12月18日",
		year: "2024",
		description: "在迈阿密享受温暖的阳光和美丽的海滩，体验南佛罗里达的拉丁风情。",
		images: ["/assets/images/travel/miami-1.jpg"],
		tags: ["美国", "迈阿密", "海滩", "拉丁文化"],
		highlights: [
			"享受南海滩的阳光",
			"体验小哈瓦那文化",
			"参观艺术装饰区",
			"品尝古巴美食"
		]
	},
	{
		id: "newyork-2024",
		title: "纽约大都会",
		location: "纽约, 美国",
		date: "2024年10月12日",
		year: "2024",
		description: "探索纽约这座不夜城，感受大都市的繁华与活力。从时代广场到中央公园，每一处都充满魅力。",
		images: ["/assets/images/travel/newyork-1.jpg"],
		tags: ["美国", "纽约", "大都市", "文化"],
		highlights: [
			"游览时代广场",
			"参观自由女神像",
			"漫步中央公园",
			"体验百老汇音乐剧"
		]
	},
	{
		id: "zurich-2024",
		title: "苏黎世金融中心",
		location: "苏黎世, 瑞士",
		date: "2024年6月3日",
		year: "2024",
		description: "在苏黎世感受瑞士的金融文化和精致生活，体验这座城市的现代与传统。",
		images: ["/assets/images/travel/zurich-1.jpg"],
		tags: ["瑞士", "苏黎世", "金融", "巧克力"],
		highlights: [
			"参观苏黎世老城区",
			"游览苏黎世湖",
			"体验瑞士巧克力文化",
			"参观瑞士国家博物馆"
		]
	},
	{
		id: "geneva-2024",
		title: "日内瓦国际城",
		location: "日内瓦, 瑞士",
		date: "2024年6月1日",
		year: "2024",
		description: "在日内瓦感受国际组织的氛围，体验这座城市的多元文化和自然美景。",
		images: ["/assets/images/travel/geneva-1.jpg"],
		tags: ["瑞士", "日内瓦", "国际组织", "钟表"],
		highlights: [
			"参观联合国欧洲总部",
			"游览日内瓦湖",
			"参观红十字国际委员会",
			"体验瑞士钟表文化"
		]
	},
	{
		id: "vatican-2024",
		title: "梵蒂冈圣城",
		location: "梵蒂冈城",
		date: "2024年3月20日",
		year: "2024",
		description: "参观世界上最小的国家梵蒂冈，感受宗教艺术的震撼和历史的厚重。",
		images: ["/assets/images/travel/vatican-1.jpg"],
		tags: ["梵蒂冈", "宗教", "艺术", "历史"],
		highlights: [
			"参观圣彼得大教堂",
			"游览梵蒂冈博物馆",
			"欣赏西斯廷教堂壁画",
			"体验教皇广场"
		]
	},
	{
		id: "rome-2024",
		title: "罗马永恒之城",
		location: "罗马, 意大利",
		date: "2024年3月18日",
		year: "2024",
		description: "探索罗马这座永恒之城，感受古罗马帝国的辉煌历史和文艺复兴的艺术魅力。",
		images: ["/assets/images/travel/rome-1.jpg"],
		tags: ["意大利", "罗马", "历史", "艺术"],
		highlights: [
			"参观古罗马斗兽场",
			"游览万神殿",
			"漫步特雷维喷泉",
			"品尝正宗意大利面"
		]
	},
	{
		id: "venice-2024",
		title: "威尼斯水城",
		location: "威尼斯, 意大利",
		date: "2024年3月16日",
		year: "2024",
		description: "在威尼斯体验独特的水城风情，乘坐贡多拉穿梭在运河之间，感受浪漫的意大利风情。",
		images: ["/assets/images/travel/venice-1.jpg"],
		tags: ["意大利", "威尼斯", "水城", "浪漫"],
		highlights: [
			"乘坐贡多拉游运河",
			"参观圣马可广场",
			"游览总督宫",
			"体验威尼斯面具文化"
		]
	},
	{
		id: "milan-2024",
		title: "米兰时尚之都",
		location: "米兰, 意大利",
		date: "2024年3月14日",
		year: "2024",
		description: "在米兰感受时尚之都的魅力，参观大教堂和时尚区，体验意大利的设计美学。",
		images: ["/assets/images/travel/milan-1.jpg"],
		tags: ["意大利", "米兰", "时尚", "艺术"],
		highlights: [
			"参观米兰大教堂",
			"游览时尚区",
			"参观达芬奇《最后的晚餐》",
			"体验意大利时尚文化"
		]
	},
	{
		id: "london-2023",
		title: "伦敦英伦风情",
		location: "伦敦, 英国",
		date: "2023年7月23日",
		year: "2023",
		description: "在伦敦体验英伦文化，参观大本钟、伦敦塔桥等标志性建筑，感受英国的历史底蕴。",
		images: ["/assets/images/travel/london-1.jpg"],
		tags: ["英国", "伦敦", "历史", "文化"],
		highlights: [
			"参观大本钟和议会大厦",
			"游览伦敦塔桥",
			"参观大英博物馆",
			"体验英式下午茶"
		]
	},
	{
		id: "liverpool-2022",
		title: "利物浦",
		location: "利物浦, 英格兰",
		date: "2022年9月19日",
		year: "2022",
		description: "在利物浦感受英国的音乐文化，参观披头士博物馆，体验这座音乐之城的魅力。",
		images: ["/assets/images/travel/liverpool-1.jpg"],
		tags: ["英格兰", "利物浦", "音乐", "披头士"],
		highlights: [
			"参观披头士博物馆",
			"游览阿尔伯特码头",
			"体验利物浦音乐文化",
			"参观利物浦大教堂"
		]
	},
	{
		id: "edinburgh-2023",
		title: "爱丁堡古堡",
		location: "爱丁堡, 苏格兰",
		date: "2023年3月27日",
		year: "2023",
		description: "在爱丁堡感受苏格兰的历史文化，参观爱丁堡城堡，体验这座古城的魅力。",
		images: ["/assets/images/travel/edinburgh-1.jpg"],
		tags: ["苏格兰", "爱丁堡", "古堡", "威士忌"],
		highlights: [
			"参观爱丁堡城堡",
			"游览皇家英里大道",
			"体验苏格兰威士忌",
			"参观圣吉尔斯大教堂"
		]
	},
	{
		id: "manchester-2023",
		title: "曼彻斯特",
		location: "曼彻斯特, 英格兰",
		date: "2023年4月6日",
		year: "2023",
		description: "在曼彻斯特感受英格兰的工业文化，参观曼联球场，体验这座足球之城的魅力。",
		images: ["/assets/images/travel/manchester-1.jpg"],
		tags: ["英格兰", "曼彻斯特", "足球", "曼联"],
		highlights: [
			"参观老特拉福德球场",
			"游览曼彻斯特市中心",
			"体验英格兰足球文化",
			"参观曼彻斯特大教堂"
		]
	}
];