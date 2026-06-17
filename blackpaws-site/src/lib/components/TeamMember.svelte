<script lang="ts">
	type Props = {
		name: string;
		role: string;
		nickname: string;
		photo: string;
		linkedin?: string;
		featured?: boolean;
	};

	let { name, role, nickname, photo, linkedin, featured = false }: Props = $props();
</script>

<article
	class={`relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-zinc-300 ${
		featured ? 'col-span-1 md:col-span-2 lg:col-span-4 aspect-[16/9] md:aspect-[3/1]' : 'aspect-square'
	}`}
>
	<img
		src={photo}
		alt={name}
		class="absolute inset-0 w-full h-full object-cover object-top"
		loading="lazy"
	/>

	<div class="absolute inset-x-0 bottom-0 h-2/3 member-card-overlay" aria-hidden="true"></div>

	<div class="absolute bottom-5 md:bottom-8 left-5 md:left-10 right-5 md:right-10 text-white">
		<p
			class={`font-display font-bold leading-tight ${
				featured ? 'text-3xl md:text-5xl' : 'text-xl md:text-2xl'
			}`}
		>
			{name}
		</p>
		<p
			class={`mt-1 font-body font-extrabold ${
				featured ? 'text-xl md:text-2xl' : 'text-base md:text-lg'
			}`}
		>
			{role}
		</p>
		<p
			class={`font-display italic font-normal ${
				featured ? 'text-xl md:text-2xl' : 'text-base md:text-lg'
			}`}
		>
			{nickname}
		</p>
	</div>

	{#if linkedin}
		<a
			href={linkedin}
			target="_blank"
			rel="noopener noreferrer"
			class="absolute bottom-5 md:bottom-8 right-5 md:right-8 w-8 h-8 flex items-center justify-center rounded text-white hover:opacity-80 transition-opacity"
			aria-label={`${name} on LinkedIn`}
		>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<path
					d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
				/>
			</svg>
		</a>
	{/if}
</article>
