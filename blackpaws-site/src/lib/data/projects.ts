export type Project = {
	title: string;
	subtitle: string;
	image: string;
	logoSrc?: string;
	logoAlt?: string;
	tags: string[];
	href?: string;
};

export const projects: Project[] = [
	{
		title: 'Mobile tourism application',
		subtitle: 'Royal fortresses of Languedoc',
		image: 'https://placehold.co/1280x540?text=Pays+Cathare',
		logoSrc: 'https://placehold.co/119x39?text=Aude',
		logoAlt: 'Département de l’Aude',
		tags: ['Tech consulting', 'React Native', 'Unity'],
		href: '/projects/pays-cathare'
	},
	{
		title: 'B2B mobile app for responsible and socially conscious mobile plans',
		subtitle: 'Source',
		image: 'https://placehold.co/600x440?text=Source',
		logoSrc: 'https://placehold.co/80x71?text=Source',
		logoAlt: 'Source',
		tags: ['React Native'],
		href: '/projects/source'
	},
	{
		title: 'Business tool for a splint reconditioning solution',
		subtitle: 'Administration interface',
		image: 'https://placehold.co/600x440?text=Gekomed',
		logoSrc: 'https://placehold.co/112x20?text=Gekomed',
		logoAlt: 'Gekomed',
		tags: ['User interface (UI)', 'React'],
		href: '/projects/gekomed'
	}
];
