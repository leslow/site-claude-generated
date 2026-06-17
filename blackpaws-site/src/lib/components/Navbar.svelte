<script lang="ts">
	import { onMount } from 'svelte';
	import type { Action } from 'svelte/action';
	import Logo from './Logo.svelte';

	type NavItem = { label: string; href: string };
	type Props = { items?: NavItem[]; ctaLabel?: string; ctaHref?: string };

	let {
		items = [
			{ label: 'Services', href: '#services' },
			{ label: 'Our approach', href: '#approach' },
			{ label: 'Team', href: '#team' }
		],
		ctaLabel = "Let's talk  →",
		ctaHref = '#contact'
	}: Props = $props();

	let mobileOpen = $state(false);
	let scrolled = $state(false); // true once the user has scrolled past ~hero height

	// — Liquid glass bubble state ——————————————————————
	let activeHref = $state<string | null>(null);
	// $state proxy so mutations via [key]=value trigger reactivity
	let itemEls = $state<Record<string, HTMLElement | undefined>>({});
	let bubbleLeft = $state(0);
	let bubbleWidth = $state(0);
	let bubbleVisible = $state(false); // controls opacity 0→1 (fade-in)
	let bubbleSlide = $state(false); // controls whether transform/width transition (slide)

	// Action that registers each nav anchor so we can measure it
	const registerItem: Action<HTMLElement, string> = (node, href) => {
		let current = href;
		itemEls[current] = node;
		return {
			update(newHref: string) {
				if (current !== newHref) {
					delete itemEls[current];
					current = newHref;
					itemEls[current] = node;
				}
			},
			destroy() {
				delete itemEls[current];
			}
		};
	};

	// Derive bubble position from the active item
	$effect(() => {
		if (!activeHref) return;
		const el = itemEls[activeHref];
		if (!el) return;
		bubbleLeft = el.offsetLeft;
		bubbleWidth = el.offsetWidth;
		if (!bubbleVisible) {
			// First measurement: fade in at the target position, no slide
			bubbleVisible = true;
			// Enable slide transition for subsequent moves, after the fade-in settles
			setTimeout(() => {
				bubbleSlide = true;
			}, 10);
		}
	});

	// IntersectionObserver to follow scroll position
	onMount(() => {
		const sectionIds = items
			.map((i) => i.href)
			.filter((h) => h.startsWith('#'))
			.map((h) => h.slice(1));

		const sections = sectionIds
			.map((id) => document.getElementById(id))
			.filter((s): s is HTMLElement => s !== null);

		if (!sections.length) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
				if (visible[0]) {
					activeHref = '#' + visible[0].target.id;
				}
			},
			{ rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.1, 0.5, 1] }
		);

		sections.forEach((s) => observer.observe(s));

		// scroll listener for navbar background toggle (kept tiny, passive, rAF-coalesced)
		let rafScroll: number | null = null;
		const onScroll = () => {
			if (rafScroll !== null) return;
			rafScroll = requestAnimationFrame(() => {
				rafScroll = null;
				scrolled = window.scrollY > 80;
			});
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();

		return () => {
			observer.disconnect();
			window.removeEventListener('scroll', onScroll);
			if (rafScroll !== null) cancelAnimationFrame(rafScroll);
		};
	});

	function handleNavClick(href: string) {
		// instant feedback: don't wait for the observer
		activeHref = href;
	}
</script>

<header
	class={`fixed top-0 left-0 right-0 z-30 px-6 md:px-12 lg:px-20 py-6 flex items-center justify-between transition-[background-color,backdrop-filter,box-shadow] duration-300 ${
		scrolled ? 'bg-white/70 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)]' : ''
	}`}
>
	<a
		href="/"
		class={`flex items-center gap-3 transition-colors duration-300 ${
			scrolled ? 'text-gray-700' : 'text-white'
		}`}
		aria-label="BlackPaws home"
	>
		<Logo size="md" />
	</a>

	<!-- Desktop nav with liquid bubble -->
	<nav
		class="hidden lg:flex items-center gap-1 bg-blue-200/55 backdrop-blur-md rounded-full p-1.5 pr-1.5 relative ring-1 ring-white/30"
		aria-label="Primary"
	>
		<!-- Decorative bubble, rendered BEFORE items so they stay above (z-10) -->
		<div
			class="liquid-bubble"
			class:visible={bubbleVisible}
			class:slide={bubbleSlide}
			style="--bubble-left:{bubbleLeft}px;--bubble-width:{bubbleWidth}px;"
			aria-hidden="true"
		></div>

		{#each items as item (item.href)}
			<a
				href={item.href}
				use:registerItem={item.href}
				aria-current={activeHref === item.href ? 'page' : undefined}
				onclick={() => handleNavClick(item.href)}
				class="nav-link relative z-10 px-5 py-2.5 rounded-full text-lg font-body transition-colors"
				class:is-active={activeHref === item.href}
			>
				{item.label}
			</a>
		{/each}

		<a
			href={ctaHref}
			class="relative z-10 ml-2 bg-gray-700 text-white px-6 py-2.5 rounded-full text-lg font-bold font-body hover:bg-gray-900 transition-colors"
		>
			{ctaLabel}
		</a>
	</nav>

	<!-- Mobile burger -->
	<button
		type="button"
		class="lg:hidden inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-200 text-gray-700"
		aria-label="Open menu"
		aria-expanded={mobileOpen}
		onclick={() => (mobileOpen = !mobileOpen)}
	>
		{#if !mobileOpen}
			<svg
				width="22"
				height="22"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2.5"
			>
				<line x1="4" y1="7" x2="20" y2="7" />
				<line x1="4" y1="12" x2="20" y2="12" />
				<line x1="4" y1="17" x2="20" y2="17" />
			</svg>
		{:else}
			<svg
				width="22"
				height="22"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2.5"
			>
				<line x1="6" y1="6" x2="18" y2="18" />
				<line x1="18" y1="6" x2="6" y2="18" />
			</svg>
		{/if}
	</button>
</header>

{#if mobileOpen}
	<div
		class="lg:hidden fixed inset-0 z-20 bg-gray-700/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-white"
	>
		{#each items as item (item.href)}
			<a
				href={item.href}
				class="text-3xl font-display"
				onclick={() => {
					handleNavClick(item.href);
					mobileOpen = false;
				}}
			>
				{item.label}
			</a>
		{/each}
		<a
			href={ctaHref}
			class="mt-4 bg-blue-200 text-gray-700 px-8 py-3 rounded-full text-lg font-bold"
			onclick={() => (mobileOpen = false)}
		>
			{ctaLabel}
		</a>
	</div>
{/if}

<!-- SVG filter for the refractive backdrop, injected once in the document -->
<svg width="0" height="0" class="absolute pointer-events-none" aria-hidden="true">
	<defs>
		<filter id="liquid-glass-filter" x="0%" y="0%" width="100%" height="100%">
			<feTurbulence
				type="fractalNoise"
				baseFrequency="0.1 0.1"
				numOctaves="3"
				seed="42"
				result="noise"
			/>
			<feGaussianBlur in="noise" stdDeviation="0.02" result="softNoise" />
			<feDisplacementMap
				in="SourceGraphic"
				in2="softNoise"
				scale="77"
				xChannelSelector="R"
				yChannelSelector="G"
			/>
		</filter>
	</defs>
</svg>

<style>
	.nav-link {
		color: #374151; /* text-gray-700 */
	}
	.nav-link:hover {
		color: #111827; /* text-gray-900 */
	}
	.nav-link.is-active {
		color: #1e3a8a; /* text-blue-900 */
		font-weight: 500;
	}

	.liquid-bubble {
		position: absolute;
		top: 50%;
		left: 0;
		height: calc(100% - 12px);
		width: var(--bubble-width);
		transform: translate(var(--bubble-left), -50%);
		border-radius: 9999px;
		pointer-events: none;
		opacity: 0;
		/* establish a stacking context so ::after with z-index:-1 stays inside the bubble */
		isolation: isolate;
		z-index: 0;
	}

	/* fade in only — no transform/width transition yet, the bubble appears at target */
	.liquid-bubble.visible {
		opacity: 1;
		transition: opacity 220ms ease-out;
	}

	/* once the bubble has appeared, enable the morphing slide for subsequent moves */
	.liquid-bubble.slide {
		transition:
			transform 420ms cubic-bezier(0.32, 0.72, 0, 1),
			width 420ms cubic-bezier(0.32, 0.72, 0, 1),
			opacity 220ms ease-out;
	}

	/* rim layer — bright inner edge, in front (z-index: 0 of the bubble's stacking context) */
	.liquid-bubble::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 0;
		border-radius: inherit;
		overflow: hidden;
		pointer-events: none;
		box-shadow:
			inset 2px 2px 0 -2px rgba(255, 255, 255, 0.85),
			inset 0 0 3px 1px rgba(255, 255, 255, 0.7);
	}

	/* refraction layer — captures the backdrop (blur(0px) trick) then distorts it via the SVG filter.
	   Sits behind the rim (z-index: -1) so the bright edge stays sharp on top of the wobble. */
	.liquid-bubble::after {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
		border-radius: inherit;
		overflow: hidden;
		isolation: isolate;
		pointer-events: none;
		-webkit-backdrop-filter: blur(1px);
		backdrop-filter: blur(1px);
		-webkit-filter: url('#liquid-glass-filter');
		filter: url('#liquid-glass-filter');
	}

	@media (prefers-reduced-motion: reduce) {
		.liquid-bubble.slide,
		.liquid-bubble.visible {
			transition: opacity 220ms ease-out;
		}
	}
</style>
