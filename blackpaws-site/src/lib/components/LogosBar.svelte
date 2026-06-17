<script lang="ts">
	type Logo = { name: string; src: string; width: number; height: number };

	const logos: Logo[] = [
		{ name: 'Airbnb', src: 'https://placehold.co/174x54?text=Airbnb', width: 174, height: 54 },
		{ name: 'Greenerwave', src: 'https://placehold.co/166x64?text=Greenerwave', width: 166, height: 64 },
		{ name: 'Bouygues Télécom', src: 'https://placehold.co/200x74?text=Bouygues', width: 200, height: 74 },
		{ name: 'Département Aude', src: 'https://placehold.co/180x59?text=Aude', width: 180, height: 59 },
		{ name: 'FDJ', src: 'https://placehold.co/164x59?text=FDJ', width: 164, height: 59 },
		{ name: 'MEA Source', src: 'https://placehold.co/99x88?text=MEA', width: 99, height: 88 },
		{ name: 'Gekomed', src: 'https://placehold.co/176x32?text=Gekomed', width: 176, height: 32 }
	];
</script>

<section class="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16">
	<div
		class="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80 grayscale"
	>
		{#each logos as logo (logo.name)}
			<img
				src={logo.src}
				alt={logo.name}
				width={logo.width}
				height={logo.height}
				class="h-10 md:h-12 lg:h-14 w-auto object-contain"
				loading="lazy"
			/>
		{/each}
	</div>
</section>
