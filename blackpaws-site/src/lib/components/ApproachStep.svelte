<script lang="ts">
	export type ApproachBlock = { eyebrow: string; body: string };

	type Props = {
		index: number;
		title: string;
		titleAccent: string;
		blocks: ApproachBlock[];
		highlighted?: boolean;
	};

	let { index, title, titleAccent, blocks, highlighted = false }: Props = $props();
</script>

<article
	class={`relative w-full rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 ${
		highlighted ? 'bg-red-100 ring-2 ring-red-200' : 'bg-red-50'
	} overflow-hidden`}
>
	<header class="flex items-center gap-4">
		<span class="text-gray-700 text-2xl md:text-4xl font-condensed font-bold">
			{String(index).padStart(2, '0')}
		</span>
		<span class="block w-12 md:w-16 h-1.5 bg-gray-700" aria-hidden="true"></span>
		<h3 class="text-gray-700 text-2xl md:text-4xl uppercase">
			<span class="font-condensed font-bold">{title}</span>
			<span class="font-display font-normal italic">{titleAccent}</span>
		</h3>
	</header>

	<div class="mt-6 md:mt-8 space-y-6 max-w-4xl">
		{#each blocks as block (block.eyebrow)}
			<div>
				<p class="text-gray-700 text-lg md:text-xl font-extrabold font-condensed uppercase leading-7">
					{block.eyebrow}
				</p>
				<p class="mt-1 text-gray-700 text-lg md:text-xl font-normal font-body leading-7">
					{block.body}
				</p>
			</div>
		{/each}
	</div>
</article>
