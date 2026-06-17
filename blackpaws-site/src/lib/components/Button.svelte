<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		href?: string;
		variant?: 'primary' | 'ghost' | 'outline';
		size?: 'md' | 'lg';
		class?: string;
		children: Snippet;
		onclick?: () => void;
	};

	let {
		href,
		variant = 'primary',
		size = 'md',
		class: klass = '',
		children,
		onclick
	}: Props = $props();

	const base =
		'inline-flex justify-center items-center rounded-full font-body transition-colors duration-200 whitespace-nowrap';
	const sizes = {
		md: 'h-12 px-8 text-base md:text-lg',
		lg: 'h-14 px-11 text-lg md:text-xl'
	} as const;
	const variants = {
		primary: 'bg-blue-200 text-gray-700 hover:bg-blue-300',
		ghost: 'bg-white/30 text-gray-700 hover:bg-white/50 backdrop-blur-sm',
		outline: 'border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white'
	} as const;

	let cls = $derived(`${base} ${sizes[size]} ${variants[variant]} ${klass}`);
</script>

{#if href}
	<a {href} class={cls}>
		{@render children()}
	</a>
{:else}
	<button type="button" class={cls} {onclick}>
		{@render children()}
	</button>
{/if}
