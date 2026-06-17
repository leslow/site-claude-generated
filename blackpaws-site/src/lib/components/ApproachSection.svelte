<script lang="ts">
	import { onMount } from 'svelte';
	import ApproachStep from './ApproachStep.svelte';
	import { approachSteps } from '$lib/data/approach';

	let sectionRef: HTMLElement | undefined = $state();
	let stackRef: HTMLDivElement | undefined = $state();

	onMount(() => {
		if (!sectionRef || !stackRef) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		let cleanup: (() => void) | undefined;
		let cancelled = false;

		(async () => {
			const { gsap } = await import('gsap');
			const { ScrollTrigger } = await import('gsap/ScrollTrigger');
			if (cancelled || !sectionRef || !stackRef) return;
			gsap.registerPlugin(ScrollTrigger);

			const cards = Array.from(stackRef.querySelectorAll<HTMLElement>('.approach-card'));
			if (cards.length === 0) return;

			const scaleMax = gsap.utils.mapRange(1, Math.max(cards.length - 1, 1), 0.85, 1);
			const stepTime = 1; // seconds of timeline per stacking step

			// Initial state: only card 0 is in the deck. Cards 1..n are translated below the viewport
			// and will fly in progressively as the user scrolls inside the pin.
			gsap.set(cards, {
				y: (i) => (i === 0 ? 0 : window.innerHeight),
				transformStyle: 'preserve-3d',
				transformPerspective: 1200,
				transformOrigin: 'center top'
			});

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef,
					start: 'top top',
					end: () => `+=${window.innerHeight * 2.5}`,
					scrub: 0.6,
					pin: true,
					pinSpacing: true,
					anticipatePin: 1,
					invalidateOnRefresh: true
				}
			});

			// Cards 1..n fly up from below into their deck slots, one per step.
			tl.to(
				cards.slice(1),
				{
					y: (i) => 30 * (i + 1), // i is 0-indexed within slice(1) → original index = i+1
					duration: stepTime,
					stagger: stepTime,
					ease: 'power2.out'
				},
				0
			);

			// Each non-last card tilts back + scales down at the same time the next card arrives.
			tl.to(
				cards.slice(0, -1),
				{
					rotationX: -20,
					scale: (i) => scaleMax(i),
					duration: stepTime,
					stagger: { each: stepTime },
					ease: 'power2.out'
				},
				0
			);

			const refresh = () => ScrollTrigger.refresh();
			window.addEventListener('load', refresh);

			cleanup = () => {
				window.removeEventListener('load', refresh);
				tl.scrollTrigger?.kill();
				tl.kill();
			};
		})();

		return () => {
			cancelled = true;
			cleanup?.();
		};
	});
</script>

<section
	bind:this={sectionRef}
	id="approach"
	class="w-full px-6 md:px-12 lg:px-20 py-16 md:py-24"
>
	<div class="max-w-7xl mx-auto flex flex-col gap-8 md:gap-12">
		<header class="flex flex-col gap-6 md:gap-8">
			<h2 class="text-gray-700 text-4xl md:text-5xl lg:text-6xl font-display font-bold">
				Our approach
			</h2>
			<p class="max-w-5xl text-gray-700 text-xl md:text-2xl lg:text-3xl font-body">
				A proven process on +50 projects that ensures yours will be delivered on time, on budget, and exceeds expectations.
			</p>
		</header>

		<div bind:this={stackRef} class="approach-stack">
			{#each approachSteps as step, i (step.title)}
				<div class="approach-card">
					<ApproachStep
						index={i}
						title={step.title}
						titleAccent={step.titleAccent}
						blocks={step.blocks}
						highlighted={step.highlighted}
					/>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	/* All cards share the same grid cell; GSAP translates each by `y` to form the deck progressively. */
	.approach-stack {
		display: grid;
		width: 100%;
		perspective: 1500px;
	}

	.approach-stack > :global(*) {
		grid-area: 1 / 1 / 2 / 2;
	}

	.approach-card {
		will-change: transform;
	}

	.approach-card > :global(*) {
		box-shadow: 0 30px 60px -30px rgba(15, 23, 42, 0.25);
	}

	@media (prefers-reduced-motion: reduce) {
		.approach-stack {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
			perspective: none;
		}
		.approach-stack > :global(*) {
			grid-area: auto;
		}
	}
</style>
