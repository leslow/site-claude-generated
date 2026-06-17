<script lang="ts">
	import ServiceAccordion from './ServiceAccordion.svelte';
	import { services } from '$lib/data/services';
</script>

<section id="services" class="w-full px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-white">
	<div class="max-w-7xl mx-auto flex flex-col gap-4 md:gap-6">
		{#each services as service, i (service.title)}
			<ServiceAccordion {...service} open={i === 0} />
		{/each}
	</div>
</section>
