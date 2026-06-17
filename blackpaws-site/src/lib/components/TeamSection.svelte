<script lang="ts">
	import TeamMember from './TeamMember.svelte';
	import { team } from '$lib/data/team';
</script>

<section id="team" class="w-full px-6 md:px-12 lg:px-20 py-16 md:py-24">
	<div class="max-w-7xl mx-auto flex flex-col gap-8 md:gap-12">
		<header class="flex flex-col gap-4 md:gap-6">
			<h2 class="text-gray-700 text-4xl md:text-5xl lg:text-6xl font-display font-bold">
				Who are we?
			</h2>
			<p class="max-w-5xl text-gray-700 text-xl md:text-2xl lg:text-3xl font-body">
				Our collective of independent experts
			</p>
		</header>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
			{#each team as member, i (member.name)}
				<TeamMember {...member} featured={i === 0} />
			{/each}
		</div>
	</div>
</section>
