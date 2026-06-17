<script lang="ts">
	type Props = {
		label: string;
		variant?: 'dark' | 'light';
	};

	let { label, variant = 'dark' }: Props = $props();

	const variants = {
		dark: 'bg-gray-700 text-white',
		light: 'bg-white/20 text-white backdrop-blur-sm'
	} as const;
</script>

<span
	class={`inline-flex items-center px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-extrabold font-condensed uppercase tracking-wide ${variants[variant]}`}
>
	{label}
</span>
