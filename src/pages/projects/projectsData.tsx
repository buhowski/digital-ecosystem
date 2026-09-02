import bgFaberBooks from './images/faber-books.jpg';
import bgBentley from './images/bentley-skinner.jpg';
// import bgStartup from './images/another-dimension-vision-by-buhowski.jpg';
import bgStartup from './images/1.jpg';
import nascentdesign from './images/nascent-design-portfolio-frontend.jpg';
import hbv from './images/homes-by-victoria.jpg';
import mb from './images/mark-buchanan-property.jpg';

import { pathToVision } from '../../components/urlsData';

const projectsData = [
	{
		img: bgStartup,
		url: pathToVision,
		urlCode: 'https://github.com/buhowski/digital-ecosystem',
		name: 'Media Ecosystem',
		year: '2026',
		description: `100% Lighthouse score achieved. Multilingual, cross-industry architecture designed.`,
		skills: [
			'React',
			'TypeScript',
			'Node.js',
			'SCSS',
			'HTML5',
			'PWA',
			'i18n',
			'SEO',
			'Core Web Vitals',
			'CI/CD',
			'UI/UX',
		],
		alt: 'Screenshot of My Startups project homepage showcasing startup business plans, full development cycle execution, React and TypeScript programming, UI/UX design, creative scripting, genius-level problem solving, strategic brainstorming, innovative design systems, SCSS styling, SEO optimization, Progressive Web App functionality, media innovation, tech entrepreneurship, interactive digital solutions, inventive coding, forward-thinking creative projects',
	},

	{
		img: nascentdesign,
		url: `https://nascentdesign.com`,
		name: 'Nascent Design',
		year: '2022',
		description: `Responsive Design with GSAP animations`,
		skills: ['JavaScript', 'GSAP', 'SCSS'],
		alt: 'Screenshot of Nascent Design website homepage with animations',
	},

	{
		img: mb,
		url: 'https://markbuchananproperty.co.uk/',
		name: 'Mark Buchanan',
		year: '2025',
		description: 'Conversion‑focused WordPress e‑commerce with responsive UI/UX',
		skills: ['JavaScript', 'SCSS', 'WordPress', 'PHP'],
		alt: 'Screenshot of Mark Buchanan property website homepage',
	},

	{
		img: hbv,
		url: 'https://homesbyvictoria.co.uk/',
		name: 'Homes By Victoria',
		year: '2024',
		description: 'Custom WordPress e‑commerce with optimized UI/UX',
		skills: ['JavaScript', 'SCSS', 'WordPress', 'PHP'],
		alt: 'Screenshot of Homes By Victoria real estate website homepage',
	},

	{
		img: bgBentley,
		url: 'https://www.bentley-skinner.co.uk',
		name: 'Bentley & Skinner',
		year: '2021',
		description: 'Pixel Perfect WordPress e‑commerce with GSAP & Barba.js transitions',
		skills: ['JavaScript', 'Barba.js', 'GSAP', 'SCSS', 'WordPress'],
		alt: 'Screenshot of Bentley & Skinner jewelry and antique website homepage',
	},

	{
		img: bgFaberBooks,
		url: 'https://www.faber.co.uk/',
		name: 'Faber',
		year: '2021',
		description: 'Pixel Perfect WordPress e‑commerce with responsive UI/UX',
		skills: ['JavaScript', 'GSAP', 'SCSS', 'WordPress', 'Pixel Perfect'],
		alt: 'Screenshot of Faber Books publisher website homepage',
	},
];

export default projectsData;
