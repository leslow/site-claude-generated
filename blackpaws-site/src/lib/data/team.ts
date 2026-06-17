export type Member = {
	name: string;
	role: string;
	nickname: string;
	photo: string;
	linkedin?: string;
};

export const team: Member[] = [
	{
		name: 'Nicolas Thing-Leoh',
		role: 'Founder and CEO',
		nickname: 'Chef de meute',
		photo: 'https://placehold.co/1056x400?text=Nicolas',
		linkedin: 'https://www.linkedin.com/'
	},
	{
		name: 'Leslie Moinet',
		role: 'Head of Design',
		nickname: 'Aristochatte',
		photo: 'https://placehold.co/400x400?text=Leslie',
		linkedin: 'https://www.linkedin.com/'
	},
	{
		name: 'Mylène Guilly',
		role: 'Product Designer',
		nickname: 'Chat touille',
		photo: 'https://placehold.co/400x400?text=Mylène',
		linkedin: 'https://www.linkedin.com/'
	},
	{
		name: 'Ophélie Ledent',
		role: 'Brand Designer',
		nickname: 'Psychopatte',
		photo: 'https://placehold.co/400x400?text=Ophélie',
		linkedin: 'https://www.linkedin.com/'
	},
	{
		name: 'Melvyn Fontaine',
		role: 'Front-end Developer',
		nickname: 'Chat ninja',
		photo: 'https://placehold.co/400x400?text=Melvyn',
		linkedin: 'https://www.linkedin.com/'
	},
	{
		name: 'Grégoire Loupy',
		role: 'Back-end Developer',
		nickname: 'Maneki neko',
		photo: 'https://placehold.co/400x400?text=Grégoire',
		linkedin: 'https://www.linkedin.com/'
	},
	{
		name: 'Jordane Lelong',
		role: 'Framer Expert',
		nickname: 'Chat boté',
		photo: 'https://placehold.co/400x400?text=Jordane',
		linkedin: 'https://www.linkedin.com/'
	}
];
