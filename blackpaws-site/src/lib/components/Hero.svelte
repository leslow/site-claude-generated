<script lang="ts">
	import Navbar from './Navbar.svelte';
</script>

<section
	class="relative w-full overflow-hidden"
	style="min-height: clamp(640px, 80vh, 832px);"
>
	<!-- background image -->
	<img
		src="https://placehold.co/1920x1080"
		alt=""
		aria-hidden="true"
		class="absolute inset-0 w-full h-full object-cover"
	/>

	<!-- gradient overlays (violet base + soft red highlight + slight gray shadow) -->
	<div class="absolute inset-0 hero-bg" aria-hidden="true"></div>
	<div
		class="absolute inset-0 mix-blend-multiply bg-gradient-to-br from-gray-700/30 to-transparent"
		aria-hidden="true"
	></div>

	<Navbar />

	<!-- hero copy -->
	<div
		class="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-32 md:pt-40 lg:pt-48 pb-20 md:pb-32"
	>
		<h1
			class="max-w-3xl text-white font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[3.25rem] leading-tight drop-shadow-[0_0_48px_rgba(67,43,96,0.3)]"
		>
			BlackPaws turn your ideas into powerful, tailor-made web and mobile apps.
		</h1>

		<p
			class="mt-8 max-w-2xl text-white font-body text-xl md:text-2xl lg:text-3xl font-normal leading-snug"
		>
			From strategy to design and development,<br class="hidden md:block" />
			we create high-performance digital experiences.
		</p>
	</div>
</section>
