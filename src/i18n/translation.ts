import { siteConfig } from "../config";
import type I18nKey from "./i18nKey";
import { en } from "./languages/en";
import { es } from "./languages/es";
import { ja } from "./languages/ja";
import { ko } from "./languages/ko";
import { th } from "./languages/th";
import { zh_CN } from "./languages/zh_CN";
import { zh_TW } from "./languages/zh_TW";

export type Translation = {
	[K in I18nKey]: string;
};

const defaultTranslation = en;

const map: { [key: string]: Translation } = {
	es: es,
	en: en,
	en_us: en,
	en_gb: en,
	en_au: en,
	zh_cn: zh_CN,
	zh_tw: zh_TW,
	ja: ja,
	ja_jp: ja,
	ko: ko,
	ko_kr: ko,
	th: th,
	th_th: th,
};

export function getTranslation(lang: string): Translation {
	return map[lang.toLowerCase()] || defaultTranslation;
}

export function i18n(key: I18nKey): string {
	// 在服务器端渲染时，使用默认语言
	let lang = siteConfig.lang || "en";
	
	// 在浏览器环境中，优先使用localStorage中的语言设置
	if (typeof window !== 'undefined') {
		const savedLang = localStorage.getItem('language');
		if (savedLang) {
			lang = savedLang;
		}
	}
	
	const translation = getTranslation(lang);
	return translation[key] || defaultTranslation[key] || key;
}

// 创建一个客户端版本的i18n函数
export function clientI18n(key: I18nKey): string {
	if (typeof window === 'undefined') {
		return defaultTranslation[key] || key;
	}
	
	const savedLang = localStorage.getItem('language') || siteConfig.lang || "en";
	const translation = getTranslation(savedLang);
	return translation[key] || defaultTranslation[key] || key;
}

// 添加一个函数来获取当前语言
export function getCurrentLanguage(): string {
	if (typeof window !== 'undefined') {
		return localStorage.getItem('language') || siteConfig.lang || "en";
	}
	return siteConfig.lang || "en";
}

// 添加一个函数来设置语言
export function setLanguage(lang: string): void {
	if (typeof window !== 'undefined') {
		localStorage.setItem('language', lang);
		document.documentElement.lang = lang;
		
		// 触发自定义事件
		window.dispatchEvent(new CustomEvent('languageChanged', { 
			detail: { language: lang } 
		}));
	}
}