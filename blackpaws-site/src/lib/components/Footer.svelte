<script lang="ts">
	import Button from './Button.svelte';
</script>

<footer id="contact" class="relative w-full bg-gradient-to-b from-stone-50 to-stone-300 px-6 md:px-12 lg:px-20 pt-16 md:pt-24 pb-8">
	<div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
		<div class="flex flex-col gap-8 max-w-md">
			<h2 class="text-gray-700 text-2xl md:text-3xl font-display font-bold leading-tight">
				Bring your project to life together?
			</h2>
			<p class="text-gray-700 text-lg md:text-xl font-body">
				Let's discuss how we can help you create exceptional experiences.
			</p>
			<div>
				<Button href="mailto:hello@blackpaws.io" variant="ghost" size="lg">
					Brief us on your project  →
				</Button>
			</div>
		</div>

		<div class="flex flex-col gap-8 md:items-end">
			<nav class="flex flex-col gap-2 text-gray-700 text-lg md:text-xl font-body font-medium md:text-right">
				<a href="#projects" class="hover:underline">Projects</a>
				<a href="#services" class="hover:underline">Our services</a>
				<a href="#approach" class="hover:underline">Our approach</a>
				<a href="#team" class="hover:underline">Team</a>
			</nav>

			<address class="not-italic flex items-center gap-2 text-gray-700 text-base md:text-lg font-body">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
					<path d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12z" />
					<circle cx="12" cy="9" r="2.5" />
				</svg>
				<a href="https://maps.google.com/?q=122+Rue+Amelot+75011+Paris" target="_blank" rel="noopener" class="underline">
					122 Rue Amelot, 75011 Paris, France
				</a>
			</address>

			<a
				href="https://github.com/blackpaws"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2.5 px-4 h-9 rounded-full border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white transition-colors text-sm font-bold font-jakarta"
			>
				<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
					<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
				</svg>
				GitHub
			</a>
		</div>
	</div>

	<div class="max-w-7xl mx-auto mt-16 md:mt-24 pt-6 border-t border-gray-700/10 text-center text-sm text-gray-700 font-body">
		BlackPaws® - All rights reserved -
		<a href="/legal" class="font-bold underline">Legal notice</a>
	</div>
</footer>
