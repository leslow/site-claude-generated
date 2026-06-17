<script lang="ts">
	type Props = {
		image: string;
		title: string;
		subtitle: string;
		logoSrc?: string;
		logoAlt?: string;
		tags: string[];
		href?: string;
		featured?: boolean;
	};

	let {
		image,
		title,
		subtitle,
		logoSrc,
		logoAlt,
		tags,
		href = '#',
		featured = false
	}: Props = $props();
</script>

<a
	{href}
	class={`group relative block overflow-hidden rounded-[2.5rem] md:rounded-[3rem] aspect-[4/3] ${
		featured ? 'md:aspect-[2.7/1]' : 'md:aspect-[4/3]'
	}`}
>
	<!-- image background -->
	<img
		src={image}
		alt=""
		aria-hidden="true"
		class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
		loading="lazy"
	/>

	<!-- gradient overlay (darker bottom + soft pink mix-blend) -->
	<div
		class="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/40 to-gray-900/10"
		aria-hidden="true"
	></div>
	<div
		class="absolute inset-0 mix-blend-hard-light bg-gradient-to-r from-slate-500/40 to-pink-200/40"
		aria-hidden="true"
	></div>

	<!-- top row: tags + arrow -->
	<div class="absolute top-5 md:top-6 left-5 md:left-8 right-5 md:right-8 flex items-start justify-between gap-4">
		<div class="flex flex-wrap items-center gap-2 md:gap-4">
			{#each tags as tag (tag)}
				<span
					class="inline-flex items-center px-3 md:px-5 py-1.5 md:py-2.5 rounded-full bg-gray-700 text-white text-[10px] md:text-sm font-extrabold font-condensed uppercase tracking-wide"
				>
					{tag}
				</span>
			{/each}
		</div>
		<span
			class="hidden sm:flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 text-white text-2xl md:text-3xl backdrop-blur-sm transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
			aria-hidden="true"
		>
			→
		</span>
	</div>

	<!-- bottom-left: title + subtitle -->
	<div class="absolute bottom-5 md:bottom-8 left-5 md:left-8 right-5 md:right-8">
		<div class="flex items-end justify-between gap-4">
			<div class="text-white max-w-[80%]">
				<p class="font-display text-base md:text-xl font-medium leading-snug">{title}</p>
				<p class="mt-1 font-condensed text-xs md:text-base font-extrabold uppercase tracking-wide">
					{subtitle}
				</p>
			</div>
			{#if logoSrc}
				<img
					src={logoSrc}
					alt={logoAlt ?? ''}
					class="h-8 md:h-12 w-auto object-contain opacity-90"
					loading="lazy"
				/>
			{/if}
		</div>
	</div>
</a>
