export type ServiceItem = { title: string; body: string };

export type Service = {
	title: string;
	tagline: string;
	items: ServiceItem[];
};

export const services: Service[] = [
	{
		title: 'Consulting',
		tagline:
			'Strategic guidance to transform your vision into actionable roadmaps and technical specifications.',
		items: [
			{
				title: 'Workshops',
				body: 'Organization of workshops and seminars with key stakeholders involved in the creation of your product in order to align different visions.'
			},
			{
				title: 'Technical review',
				body: 'Audit of your product and proposals for concrete improvements in the short, medium, and long term.'
			},
			{
				title: 'Requirement analysis',
				body: "Before launching production, study the technical and functional feasibility of the product's ambitions in order to create a roadmap that will be followed and ensure development without any unpleasant surprises."
			}
		]
	},
	{
		title: 'Design',
		tagline:
			'From user research to polished interfaces, we shape products that feel obvious to use.',
		items: [
			{
				title: 'UX & UI Design',
				body: 'Wireframes, prototypes, design systems, and pixel-perfect interfaces tailored to your brand.'
			},
			{
				title: 'Brand identity',
				body: 'Logo, visual language, and brand guidelines that make your product unmistakable.'
			}
		]
	},
	{
		title: 'Development',
		tagline:
			'Robust, maintainable codebases for web, mobile, and immersive experiences — built with the right tool for the job.',
		items: [
			{
				title: 'Web platforms',
				body: 'React, Svelte, Next.js, SvelteKit — modern frameworks tuned for performance and developer experience.'
			},
			{
				title: 'Mobile apps',
				body: 'React Native and native modules for products that feel at home on iOS and Android.'
			},
			{
				title: 'Real-time & 3D',
				body: 'Unity, WebGL and real-time rendering for projects that need more than a webpage.'
			}
		]
	},
	{
		title: 'Prototyping',
		tagline: 'De-risk your roadmap with high-fidelity prototypes you can test with real users.',
		items: [
			{
				title: 'Clickable prototypes',
				body: 'Validate your hypotheses early with interactive Figma or Framer prototypes.'
			},
			{
				title: 'Technical spikes',
				body: 'Throwaway code that proves a concept before you commit to a full build.'
			}
		]
	},
	{
		title: 'Support',
		tagline: "We don't disappear after launch. Maintenance, evolutions, and on-call when you need us.",
		items: [
			{
				title: 'Maintenance',
				body: 'Bug fixes, dependency updates, and security patches on a predictable cadence.'
			},
			{
				title: 'Product evolution',
				body: 'Iterate on the live product based on user feedback and business priorities.'
			}
		]
	}
];
