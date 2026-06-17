<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import Button from './Button.svelte';
	import { projects } from '$lib/data/projects';
</script>

<section id="projects" class="w-full px-6 md:px-12 lg:px-20 py-16 md:py-24">
	<div class="max-w-7xl mx-auto flex flex-col items-center gap-12">
		<h2 class="self-start text-gray-700 text-4xl md:text-5xl lg:text-6xl font-display font-bold">
			Projects
		</h2>

		<div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
			{#each projects as project, i (project.title)}
				<div class={i === 0 ? 'md:col-span-2' : ''}>
					<ProjectCard {...project} featured={i === 0} />
				</div>
			{/each}
		</div>

		<Button href="/projects" variant="primary" size="lg">See more projects</Button>
	</div>
</section>
