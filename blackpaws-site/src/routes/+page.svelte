<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import LogosBar from '$lib/components/LogosBar.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
	import Verbatim from '$lib/components/Verbatim.svelte';
	import ServicesSection from '$lib/components/ServicesSection.svelte';
	import ApproachSection from '$lib/components/ApproachSection.svelte';
	import TeamSection from '$lib/components/TeamSection.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>BlackPaws — Tailor-made web and mobile apps</title>
</svelte:head>

<main class="w-full flex flex-col items-center overflow-x-clip">
	<Hero />
	<LogosBar />
	<ProjectsSection />
	<Verbatim
		quote="Très compétents, très sympas, très réactifs, très fiables, très disponibles. Bref très pros. C'est tellement fluide de collaborer avec l'équipe Blackpaws."
	/>
	<ServicesSection />
	<ApproachSection />
	<TeamSection />
	<Footer />
</main>
