<script lang="ts">
	type Props = { quote: string; author?: string };
	let { quote, author }: Props = $props();
</script>

<section class="w-full px-6 md:px-12 lg:px-20 py-16 md:py-24">
	<div class="max-w-5xl mx-auto flex items-center gap-4 md:gap-8">
		<span class="text-slate-400/40 text-5xl md:text-7xl leading-none select-none" aria-hidden="true">
			“
		</span>

		<blockquote class="flex-1 text-center text-gray-700 text-2xl md:text-4xl lg:text-5xl font-light font-body leading-tight">
			{quote}
			{#if author}
				<footer class="mt-6 text-base md:text-lg font-condensed uppercase tracking-wider text-gray-700/70">
					— {author}
				</footer>
			{/if}
		</blockquote>

		<span class="text-slate-400/40 text-5xl md:text-7xl leading-none select-none rotate-180" aria-hidden="true">
			“
		</span>
	</div>
</section>
