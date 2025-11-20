// 客户端语言切换脚本
document.addEventListener("DOMContentLoaded", () => {
	// 获取当前语言
	const currentLang = localStorage.getItem("language") || "en";

	// 更新页面内容
	updatePageContent(currentLang);

	// 监听语言变化事件
	window.addEventListener("languageChanged", (event) => {
		const newLang = event.detail.language;
		updatePageContent(newLang);
	});
});

function updatePageContent(lang) {
	// 完整的翻译映射
	const translations = {
		en: {
			// 导航栏
			home: "Home",
			archive: "Archive",
			travel: "Travel",
			appointments: "Appointments",

			// 旅行页面
			travelFootprint: "Travel Footprint",
			travelDescription:
				"Recording my travel footprints and beautiful memories",
			destinations: "destinations",
			trips: "trips",

			// 城市名称
			Liverpool: "Liverpool",
			Manchester: "Manchester",
			Boston: "Boston",
			Seattle: "Seattle",
			Hawaii: "Hawaii",
			"Washington D.C.": "Washington D.C.",
			Miami: "Miami",
			"New York": "New York",
			Zurich: "Zurich",
			Geneva: "Geneva",
			Vatican: "Vatican",
			Rome: "Rome",
			Venice: "Venice",
			Milan: "Milan",
			London: "London",
			Edinburgh: "Edinburgh",

			// 日期
			"September 19, 2022": "September 19, 2022",
			"April 6, 2023": "April 6, 2023",
			"July 4, 2025": "July 4, 2025",
			"May 13, 2025": "May 13, 2025",
			"May 6, 2025": "May 6, 2025",
			"December 31, 2024": "December 31, 2024",
			"December 18, 2024": "December 18, 2024",
			"October 12, 2024": "October 12, 2024",
			"June 3, 2024": "June 3, 2024",
			"June 1, 2024": "June 1, 2024",
			"March 20, 2024": "March 20, 2024",
			"March 18, 2024": "March 18, 2024",
			"March 16, 2024": "March 16, 2024",
			"March 14, 2024": "March 14, 2024",
			"July 23, 2023": "July 23, 2023",
			"March 27, 2023": "March 27, 2023",

			// 位置
			"Liverpool, England": "Liverpool, England",
			"Manchester, England": "Manchester, England",
			"Boston, USA": "Boston, USA",
			"Seattle, USA": "Seattle, USA",
			"Hawaii, USA": "Hawaii, USA",
			"Washington D.C., USA": "Washington D.C., USA",
			"Miami, USA": "Miami, USA",
			"New York, USA": "New York, USA",
			"Zurich, Switzerland": "Zurich, Switzerland",
			"Geneva, Switzerland": "Geneva, Switzerland",
			"Vatican City": "Vatican City",
			"Rome, Italy": "Rome, Italy",
			"Venice, Italy": "Venice, Italy",
			"Milan, Italy": "Milan, Italy",
			"London, UK": "London, UK",
			"Edinburgh, Scotland": "Edinburgh, Scotland",

			// Footer
			"All Rights Reserved": "All Rights Reserved",
			RSS: "RSS",
			Sitemap: "Sitemap",
			"Powered by": "Powered by",

			// 分页
			"Previous Page": "Previous Page",
			"Next Page": "Next Page",
			Page: "Page",

			// Profile
			profileBio:
				"Jincheng(Jeffery) Rao is a master student at Duke University. He is a Machine Learning summer intern at Forest Vision.",

			// Contact
			contact: "Contact",
			contactMe: "Contact Me",
			contactTitle: "Get In Touch",
			contactDescription:
				"Feel free to reach out if you have any questions or would like to collaborate!",
			yourEmail: "Your email",
			yourMessage: "Your message",
			send: "Send",
			emailPlaceholder: "Enter your email address",
			messagePlaceholder: "Enter your message here...",

			// Appointments
			appointmentsTitle: "Book an Appointment",
			appointmentsDescription:
				"Schedule a meeting with me using the calendar below. Select an available time slot that works for you.",
			bookAppointment: "Book Appointment",
			selectTime: "Select a time",
			appointmentInstructions:
				"Please select an available time slot from the calendar below. Once you book, you'll receive a confirmation email with the meeting details.",
		},
		zh_cn: {
			// 导航栏
			home: "主页",
			archive: "归档",
			travel: "旅游",
			appointments: "预约",

			// 旅行页面
			travelFootprint: "旅游足迹",
			travelDescription: "记录我的旅行足迹和美好回忆",
			destinations: "个目的地",
			trips: "次旅行",

			// 城市名称
			Liverpool: "利物浦",
			Manchester: "曼彻斯特",
			Boston: "波士顿",
			Seattle: "西雅图",
			Hawaii: "夏威夷",
			"Washington D.C.": "华盛顿特区",
			Miami: "迈阿密",
			"New York": "纽约",
			Zurich: "苏黎世",
			Geneva: "日内瓦",
			Vatican: "梵蒂冈",
			Rome: "罗马",
			Venice: "威尼斯",
			Milan: "米兰",
			London: "伦敦",
			Edinburgh: "爱丁堡",

			// 日期
			"September 19, 2022": "2022年9月19日",
			"April 6, 2023": "2023年4月6日",
			"July 4, 2025": "2025年7月4日",
			"May 13, 2025": "2025年5月13日",
			"May 6, 2025": "2025年5月6日",
			"December 31, 2024": "2024年12月31日",
			"December 18, 2024": "2024年12月18日",
			"October 12, 2024": "2024年10月12日",
			"June 3, 2024": "2024年6月3日",
			"June 1, 2024": "2024年6月1日",
			"March 20, 2024": "2024年3月20日",
			"March 18, 2024": "2024年3月18日",
			"March 16, 2024": "2024年3月16日",
			"March 14, 2024": "2024年3月14日",
			"July 23, 2023": "2023年7月23日",
			"March 27, 2023": "2023年3月27日",

			// 位置
			"Liverpool, England": "利物浦, 英格兰",
			"Manchester, England": "曼彻斯特, 英格兰",
			"Boston, USA": "波士顿, 美国",
			"Seattle, USA": "西雅图, 美国",
			"Hawaii, USA": "夏威夷, 美国",
			"Washington D.C., USA": "华盛顿特区, 美国",
			"Miami, USA": "迈阿密, 美国",
			"New York, USA": "纽约, 美国",
			"Zurich, Switzerland": "苏黎世, 瑞士",
			"Geneva, Switzerland": "日内瓦, 瑞士",
			"Vatican City": "梵蒂冈城",
			"Rome, Italy": "罗马, 意大利",
			"Venice, Italy": "威尼斯, 意大利",
			"Milan, Italy": "米兰, 意大利",
			"London, UK": "伦敦, 英国",
			"Edinburgh, Scotland": "爱丁堡, 苏格兰",

			// Footer
			"All Rights Reserved": "版权所有",
			RSS: "RSS",
			Sitemap: "网站地图",
			"Powered by": "技术支持",

			// 分页
			"Previous Page": "上一页",
			"Next Page": "下一页",
			Page: "第",

			// Profile
			profileBio:
				"Jincheng(Jeffery) Rao是杜克大学的研究生。他是Forest Vision的机器学习暑期实习生。",

			// Contact
			contact: "联系",
			contactMe: "联系我",
			contactTitle: "与我联系",
			contactDescription: "如果您有任何问题或想要合作，请随时联系我！",
			yourEmail: "您的邮箱",
			yourMessage: "您的消息",
			send: "发送",
			emailPlaceholder: "请输入您的邮箱地址",
			messagePlaceholder: "请输入您的消息...",

			// Appointments
			appointmentsTitle: "预约会面",
			appointmentsDescription:
				"使用下面的日历与我预约会面。选择一个适合您的可用时间段。",
			bookAppointment: "预约会面",
			selectTime: "选择时间",
			appointmentInstructions:
				"请从下面的日历中选择一个可用的时间段。预约成功后，您将收到一封包含会议详情的确认邮件。",
		},
	};

	const t = translations[lang] || translations.en;

	// 更新所有页面内容
	updateAllContent(t);
}

function updateAllContent(t) {
	// 更新导航栏
	updateNavigation(t);

	// 更新旅行页面
	updateTravelPage(t);

	// 更新Footer
	updateFooter(t);

	// 更新分页
	updatePagination(t);

	// 更新Profile
	updateProfile(t);

	// 更新Contact页面
	updateContactPage(t);

	// 更新Appointments页面
	updateAppointmentsPage(t);

	// 更新About页面
	updateAboutPage(t);

	// 更新所有文本内容
	updateAllText(t);
}

function updateAllText(t) {
	// 更简单的方法：直接查找和替换特定元素
	const elementsToUpdate = [
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"p",
		"span",
		"div",
		"a",
		"button",
		"label",
	];

	elementsToUpdate.forEach((selector) => {
		const elements = document.querySelectorAll(selector);
		elements.forEach((element) => {
			const text = element.textContent.trim();
			if (text && t[text] && text !== t[text]) {
				element.textContent = t[text];
			}
		});
	});
}

function updateNavigation(t) {
	const navLinks = document.querySelectorAll("nav a, .navbar a");
	navLinks.forEach((link) => {
		const text = link.textContent.trim();
		if (text === "Home" || text === "主页") {
			link.textContent = t.home;
		} else if (text === "About" || text === "关于") {
			link.textContent = t.about;
		} else if (text === "Archive" || text === "归档") {
			link.textContent = t.archive;
		} else if (text === "Travel" || text === "旅游") {
			link.textContent = t.travel;
		} else if (text === "Contact" || text === "联系") {
			link.textContent = t.contact;
		}
	});
}

function updateTravelPage(t) {
	// 更新标题
	const title = document.querySelector("h1");
	if (
		title &&
		(title.textContent.includes("Travel Footprint") ||
			title.textContent.includes("旅游足迹"))
	) {
		title.innerHTML = `<svg class="w-8 h-8 inline-block mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>${t.travelFootprint}`;
	}

	// 更新描述
	const desc = document.querySelector("p");
	if (
		desc &&
		(desc.textContent.includes("Recording my travel") ||
			desc.textContent.includes("记录我的旅行"))
	) {
		desc.textContent = t.travelDescription;
	}

	// 更新统计信息
	const stats = document.querySelectorAll(".stat-item span");
	stats.forEach((stat) => {
		if (
			stat.textContent.includes("destinations") ||
			stat.textContent.includes("目的地")
		) {
			stat.textContent = stat.textContent.replace(
				/destinations|目的地/g,
				t.destinations,
			);
		}
		if (
			stat.textContent.includes("trips") ||
			stat.textContent.includes("旅行")
		) {
			stat.textContent = stat.textContent.replace(/trips|旅行/g, t.trips);
		}
	});

	// 更新旅行卡片中的城市名称
	const cityNames = [
		"Liverpool",
		"Manchester",
		"Boston",
		"Seattle",
		"Hawaii",
		"Washington D.C.",
		"Miami",
		"New York",
		"Zurich",
		"Geneva",
		"Vatican",
		"Rome",
		"Venice",
		"Milan",
		"London",
		"Edinburgh",
	];
	cityNames.forEach((city) => {
		const elements = document.querySelectorAll("*");
		elements.forEach((el) => {
			if (el.textContent && el.textContent.trim() === city) {
				el.textContent = t[city];
			}
		});
	});

	// 更新旅行卡片中的日期
	const dates = [
		"September 19, 2022",
		"April 6, 2023",
		"July 4, 2025",
		"May 13, 2025",
		"May 6, 2025",
		"December 31, 2024",
		"December 18, 2024",
		"October 12, 2024",
		"June 3, 2024",
		"June 1, 2024",
		"March 20, 2024",
		"March 18, 2024",
		"March 16, 2024",
		"March 14, 2024",
		"July 23, 2023",
		"March 27, 2023",
	];
	dates.forEach((date) => {
		const elements = document.querySelectorAll("*");
		elements.forEach((el) => {
			if (el.textContent && el.textContent.trim() === date) {
				el.textContent = t[date];
			}
		});
	});

	// 更新旅行卡片中的位置
	const locations = [
		"Liverpool, England",
		"Manchester, England",
		"Boston, USA",
		"Seattle, USA",
		"Hawaii, USA",
		"Washington D.C., USA",
		"Miami, USA",
		"New York, USA",
		"Zurich, Switzerland",
		"Geneva, Switzerland",
		"Vatican City",
		"Rome, Italy",
		"Venice, Italy",
		"Milan, Italy",
		"London, UK",
		"Edinburgh, Scotland",
	];
	locations.forEach((location) => {
		const elements = document.querySelectorAll("*");
		elements.forEach((el) => {
			if (el.textContent && el.textContent.trim() === location) {
				el.textContent = t[location];
			}
		});
	});
}

function updateFooter(t) {
	const footer = document.querySelector("footer, .footer");
	if (footer) {
		const text = footer.textContent;
		if (text.includes("All Rights Reserved") || text.includes("版权所有")) {
			footer.innerHTML = footer.innerHTML.replace(
				/All Rights Reserved|版权所有/g,
				t["All Rights Reserved"],
			);
		}
		if (text.includes("RSS")) {
			footer.innerHTML = footer.innerHTML.replace(/RSS/g, t.RSS);
		}
		if (text.includes("Sitemap") || text.includes("网站地图")) {
			footer.innerHTML = footer.innerHTML.replace(
				/Sitemap|网站地图/g,
				t.Sitemap,
			);
		}
		if (text.includes("Powered by") || text.includes("技术支持")) {
			footer.innerHTML = footer.innerHTML.replace(
				/Powered by|技术支持/g,
				t["Powered by"],
			);
		}
	}
}

function updateAboutPage(t) {
	const aboutTitle = document.querySelector("h1");
	if (
		aboutTitle &&
		(aboutTitle.textContent.includes("About") ||
			aboutTitle.textContent.includes("关于"))
	) {
		aboutTitle.textContent = t.About;
	}

	const aboutDesc = document.querySelector("p");
	if (
		aboutDesc &&
		(aboutDesc.textContent.includes("This is Jeffery") ||
			aboutDesc.textContent.includes("这是Jeffery"))
	) {
		aboutDesc.textContent =
			t["This is Jeffery's personal website built with Astro."];
	}
}

function updatePagination(t) {
	const prevBtn = document.querySelector('a[aria-label*="Previous"]');
	if (prevBtn) {
		prevBtn.setAttribute("aria-label", t["Previous Page"]);
	}

	const nextBtn = document.querySelector('a[aria-label*="Next"]');
	if (nextBtn) {
		nextBtn.setAttribute("aria-label", t["Next Page"]);
	}
}

function updateProfile(t) {
	// 更新profile bio
	const bioElements = document.querySelectorAll("p, .bio, .profile-bio");
	bioElements.forEach((el) => {
		const text = el.textContent.trim();
		if (
			text.includes("Jincheng(Jeffery) Rao is a master student") ||
			text.includes("Jincheng(Jeffery) Rao是杜克大学的研究生")
		) {
			el.textContent = t.profileBio;
		}
	});
}

function updateContactPage(t) {
	// 更新Contact页面标题
	const contactTitle = document.querySelector("h1");
	if (
		contactTitle &&
		(contactTitle.textContent.includes("Get In Touch") ||
			contactTitle.textContent.includes("与我联系"))
	) {
		contactTitle.textContent = t.contactTitle;
	}

	// 更新Contact页面描述
	const contactDesc = document.querySelector("p");
	if (
		contactDesc &&
		(contactDesc.textContent.includes("Feel free to reach out") ||
			contactDesc.textContent.includes("如果您有任何问题"))
	) {
		contactDesc.textContent = t.contactDescription;
	}

	// 更新表单标签
	const emailLabel = document.querySelector('label[for="email"]');
	if (emailLabel) {
		emailLabel.textContent = t.yourEmail;
	}

	const messageLabel = document.querySelector('label[for="message"]');
	if (messageLabel) {
		messageLabel.textContent = t.yourMessage;
	}

	// 更新表单占位符
	const emailInput = document.querySelector('input[name="email"]');
	if (emailInput) {
		emailInput.placeholder = t.emailPlaceholder;
	}

	const messageTextarea = document.querySelector('textarea[name="message"]');
	if (messageTextarea) {
		messageTextarea.placeholder = t.messagePlaceholder;
	}

	// 更新发送按钮
	const sendButton = document.querySelector('button[type="submit"]');
	if (sendButton) {
		sendButton.innerHTML = `<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
        </svg>${t.send}`;
	}
}

function updateAppointmentsPage(t) {
	// 更新Appointments页面标题
	const appointmentsTitle = document.querySelector("h1");
	if (
		appointmentsTitle &&
		(appointmentsTitle.textContent.includes("Book an Appointment") ||
			appointmentsTitle.textContent.includes("预约会面"))
	) {
		appointmentsTitle.textContent = t.appointmentsTitle;
	}

	// 更新Appointments页面描述
	const appointmentsDesc = document.querySelector("p");
	if (
		appointmentsDesc &&
		(appointmentsDesc.textContent.includes("Schedule a meeting") ||
			appointmentsDesc.textContent.includes("使用下面的日历"))
	) {
		appointmentsDesc.textContent = t.appointmentsDescription;
	}

	// 更新选择时间标题
	const selectTimeHeading = document.querySelector("h2");
	if (
		selectTimeHeading &&
		(selectTimeHeading.textContent.includes("Select a time") ||
			selectTimeHeading.textContent.includes("选择时间"))
	) {
		selectTimeHeading.textContent = t.selectTime;
	}

	// 更新说明文字
	const instructions = document.querySelectorAll("h2, p");
	instructions.forEach((el) => {
		const text = el.textContent.trim();
		if (
			text.includes("Please select an available time slot") ||
			text.includes("请从下面的日历中选择")
		) {
			el.textContent = t.appointmentInstructions;
		}
	});
}
