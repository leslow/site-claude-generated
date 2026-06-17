<script lang="ts">
	type Props = {
		size?: 'sm' | 'md' | 'lg';
		color?: string;
		class?: string;
	};

	let { size = 'md', color = 'currentColor', class: klass = '' }: Props = $props();

	const dims = { sm: 40, md: 64, lg: 80 } as const;
	let px = $derived(dims[size]);
</script>

<svg
	width={px}
	height={px}
	viewBox="0 0 80 80"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	aria-label="BlackPaws logo"
	class={klass}
>
	<!-- approximate three-paw silhouette (placeholder shapes — exact paths to be supplied by brand assets) -->
	<g fill={color}>
		<path
			d="M14 28 C14 22, 18 18, 24 18 C30 18, 34 22, 34 28 L34 50 C34 60, 28 66, 21 66 C12 66, 6 60, 6 50 L6 36 Z"
		/>
		<path
			d="M30 22 C30 17, 33 14, 37 14 C42 14, 46 17, 46 22 L46 34 C46 41, 42 45, 37 45 C32 45, 28 41, 28 34 Z"
		/>
		<path
			d="M50 30 C50 24, 54 20, 58 20 C63 20, 67 24, 67 30 L67 42 C67 49, 63 53, 58 53 C53 53, 49 49, 49 42 Z"
		/>
	</g>
</svg>
