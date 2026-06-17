export type ApproachBlock = { eyebrow: string; body: string };

export type ApproachStep = {
	title: string;
	titleAccent: string;
	blocks: ApproachBlock[];
	highlighted?: boolean;
};

export const approachSteps: ApproachStep[] = [
	{
		title: 'Hello, ',
		titleAccent: '“enchanté”',
		blocks: [
			{
				eyebrow: 'Video call',
				body: 'Meeting and presentation of your project and BlackPaws. We gather your requirements, taking into account your constraints and elements already available in the project, in order to tailor our support to your needs. We then identify the team you need.'
			}
		]
	},
	{
		title: 'Deconstruction ',
		titleAccent: 'workshop',
		blocks: [
			{
				eyebrow: '2-hour workshop',
				body: 'After reviewing the information you have provided, BlackPaws will organize, facilitate, and lead a reframing workshop with your designated teams, led by a technical expert and a design expert. The purpose of this workshop is to present and challenge the elements that have been understood and assimilated, as well as to work with you to complete the elements necessary for the smooth running of the rest of the project.'
			}
		]
	},
	{
		title: 'Project ',
		titleAccent: 'Roadmap',
		blocks: [
			{
				eyebrow: 'Rituals and milestones',
				body: 'Thanks to the information gathered, we can now establish a precise roadmap for the project. Together, we will establish the necessary rituals with the identified stakeholders, as well as the key milestones for validating each stage.'
			}
		]
	},
	{
		title: 'Production and ',
		titleAccent: 'validation',
		highlighted: true,
		blocks: [
			{
				eyebrow: 'BlackPaws secret sauce',
				body: 'Our experts work in-house or alongside your teams to produce the necessary elements: user research, user flows, wireframes, mock-ups, technical architecture, back-end and front-end development, user testing, etc.'
			},
			{
				eyebrow: 'We build together, as a team!',
				body: "At each stage, we correct, adjust, and validate together. You share your constraints, and we propose solutions! You give your approval at the end of each stage before moving on to the next. It's a solid, well-established process that allows you to remain calm throughout the project and ensure that decisions are sustainable for the future."
			}
		]
	},
	{
		title: 'Delivery of the ',
		titleAccent: 'baby',
		blocks: [
			{
				eyebrow: 'Handover and key delivery',
				body: "Once the project is complete, we organize a comprehensive handover that includes a detailed briefing for your teams to ensure a smooth transition after we leave. You get everything back, and we remain available to answer any questions you may have. The goal: your independence! If you call us back, it's because we're nice and friendly, not because we've made you technically dependent on us."
			}
		]
	}
];
