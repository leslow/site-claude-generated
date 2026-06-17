<script lang="ts">
	import { untrack } from 'svelte';
	import Button from './Button.svelte';
	import { slide } from 'svelte/transition';

	export type ServiceItem = { title: string; body: string };

	type Props = {
		title: string;
		tagline?: string;
		items?: ServiceItem[];
		open?: boolean;
		ctaLabel?: string;
		ctaHref?: string;
	};

	let {
		title,
		tagline,
		items = [],
		open = false,
		ctaLabel = "Let's talk  →",
		ctaHref = '#contact'
	}: Props = $props();

	// initial open captured once on mount, then locally toggled
	let isOpen = $state(untrack(() => open));
	let panelId = $derived(`service-panel-${title.toLowerCase().replace(/\s+/g, '-')}`);
</script>

<div class="w-full border-b border-gray-700/20 last:border-0">
	<button
		type="button"
		class="w-full pl-6 pr-8 md:pr-11 py-6 md:py-8 rounded-[2rem] md:rounded-[3rem] border-[3px] border-gray-700 flex items-center justify-between gap-6 transition-colors hover:bg-gray-50"
		aria-expanded={isOpen}
		aria-controls={panelId}
		onclick={() => (isOpen = !isOpen)}
	>
		<span class="flex items-center gap-4 md:gap-6">
			{#if isOpen}
				<span class="block w-10 md:w-12 h-1.5 bg-gray-700" aria-hidden="true"></span>
			{/if}
			<span class="text-gray-700 text-3xl md:text-5xl font-display font-bold">{title}</span>
		</span>
		<span
			class={`text-gray-700/40 text-2xl md:text-3xl transition-transform duration-300 ${
				isOpen ? 'rotate-45' : ''
			}`}
			aria-hidden="true"
		>
			+
		</span>
	</button>

	{#if isOpen}
		<div
			id={panelId}
			class="pt-6 pb-10 md:pt-8 md:pb-14 px-2 md:px-6"
			transition:slide={{ duration: 250 }}
		>
			{#if tagline}
				<p class="max-w-4xl text-gray-700 text-xl md:text-2xl lg:text-3xl font-body leading-snug">
					{tagline}
				</p>
			{/if}

			{#if items.length}
				<ul class="mt-8 md:mt-10 space-y-6 md:space-y-8 max-w-4xl">
					{#each items as item, i (item.title)}
						<li class="flex flex-col md:flex-row gap-6 items-start">
							<div class="shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-violet-300 to-pink-200 flex items-center justify-center text-gray-700 font-display text-2xl">
								{String(i + 1).padStart(2, '0')}
							</div>
							<div class="flex-1">
								<p class="text-gray-700 text-lg md:text-xl font-bold font-body leading-7">
									{item.title}
								</p>
								<p class="mt-1 text-gray-700 text-lg md:text-xl font-normal font-body leading-7">
									{item.body}
								</p>
							</div>
						</li>
					{/each}
				</ul>
			{/if}

			<div class="mt-10 md:mt-12">
				<Button href={ctaHref} variant="primary" size="lg">{ctaLabel}</Button>
			</div>
		</div>
	{/if}
</div>
