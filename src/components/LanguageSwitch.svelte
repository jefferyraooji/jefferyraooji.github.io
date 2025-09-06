<script lang="ts">
	import { onMount } from 'svelte';

	let currentLanguage = 'en';
	let isOpen = false;

	onMount(() => {
		// 从localStorage获取当前语言，默认为英文
		const savedLang = localStorage.getItem('language') || 'en';
		currentLanguage = savedLang;
		
		// 监听语言变化事件
		window.addEventListener('languageChanged', (event: any) => {
			currentLanguage = event.detail.language;
		});
	});

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function switchLanguage(lang: string) {
		currentLanguage = lang;
		localStorage.setItem('language', lang);
		document.documentElement.lang = lang;
		isOpen = false;
		
		// 触发自定义事件，通知其他组件更新
		window.dispatchEvent(new CustomEvent('languageChanged', { 
			detail: { language: lang } 
		}));
		
		// 不再重新加载页面，而是使用客户端脚本更新内容
	}

	function getCurrentLanguageName(): string {
		return currentLanguage === 'en' ? 'English' : '中文';
	}
</script>

<div class="relative">
	<button 
		aria-label="Language Switch"
		class="btn-plain scale-animation rounded-lg h-11 px-3 active:scale-90 flex items-center gap-2"
		on:click={toggleDropdown}
	>
		<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
		</svg>
		<span class="hidden sm:inline text-sm font-medium">{getCurrentLanguageName()}</span>
		<svg class="w-4 h-4 transition-transform duration-200" 
			 class:rotate-180={isOpen} fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
		</svg>
	</button>

	{#if isOpen}
		<div class="absolute right-0 top-full mt-2 w-32 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg shadow-lg z-50">
			<div class="py-1">
				<button 
					class="w-full px-4 py-2 text-left text-sm hover:bg-[var(--hover-bg)] transition-colors flex items-center gap-2"
					on:click={() => switchLanguage('en')}
					class:bg-[var(--primary)]={currentLanguage === 'en'}
					class:text-white={currentLanguage === 'en'}
					class:text-[var(--text-color)]={currentLanguage !== 'en'}
				>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
					</svg>
					English
				</button>
				<button 
					class="w-full px-4 py-2 text-left text-sm hover:bg-[var(--hover-bg)] transition-colors flex items-center gap-2"
					on:click={() => switchLanguage('zh_cn')}
					class:bg-[var(--primary)]={currentLanguage === 'zh_cn'}
					class:text-white={currentLanguage === 'zh_cn'}
					class:text-[var(--text-color)]={currentLanguage !== 'zh_cn'}
				>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
					</svg>
					中文
				</button>
			</div>
		</div>
	{/if}
</div>