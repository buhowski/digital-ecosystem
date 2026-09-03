import bgFaberBooks from './images/faber-books.jpg';
import bgBentley from './images/bentley-skinner.jpg';
import bgStartup from '../../assets/startup/another-dimension-universe-vision-by-olexander-buhowski.jpg';
import nascentdesign from './images/nascent-design-portfolio-frontend.jpg';
import hbv from './images/homes-by-victoria.jpg';
import mb from './images/mark-buchanan-property.jpg';

import { pathToVision } from '../../components/urlsData';

const projectsData = [
	{
		img: bgStartup,
		url: pathToVision,
		urlCode: 'https://github.com/buhowski/digital-ecosystem',
		name: 'Digital Ecosystem',
		year: '2026',
		description:
			'100% Lighthouse score achieved. Multilingual PWA architecture. Full-cycle startup ecosystem (Founder).',
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
		alt: 'Media Ecosystem startup homepage by Olexander Buhowski - Another Dimension Universe Vision, React TypeScript frontend developer portfolio, UI UX web design, PWA, SEO optimization, custom web development showcase',
	},

	{
		img: nascentdesign,
		url: `https://nascentdesign.com`,
		name: 'Nascent Design',
		year: '2022',
		description: 'Fluid GSAP animations. Interactive visual components. Fully responsive layout.',
		skills: ['JavaScript', 'GSAP', 'SCSS'],
		alt: 'Nascent Design website homepage - GSAP animated interactive web design, JavaScript SCSS frontend developer portfolio project, custom web development showcase by Olexander Buhowski',
	},

	{
		img: bgBentley,
		url: 'https://www.bentley-skinner.co.uk',
		name: 'Bentley & Skinner',
		year: '2021',
		description:
			'Pixel-perfect luxury e-commerce. Seamless Barba.js transitions. GSAP visual effects.',
		skills: ['JavaScript', 'Barba.js', 'GSAP', 'SCSS', 'WordPress'],
		alt: 'Bentley and Skinner luxury jewelry e-commerce website - custom WordPress web design, GSAP Barba.js smooth page transitions, frontend developer portfolio showcase by Olexander Buhowski',
	},

	{
		img: mb,
		url: 'https://markbuchananproperty.co.uk/',
		name: 'Mark Buchanan',
		year: '2025',
		description: 'Custom WordPress e-commerce. Conversion-focused UI/UX. Optimized PHP backend.',
		skills: ['JavaScript', 'SCSS', 'WordPress', 'PHP'],
		alt: 'Mark Buchanan property e-commerce website - WordPress PHP custom web development, responsive UI UX design, real estate frontend portfolio project by Olexander Buhowski',
	},

	{
		img: bgFaberBooks,
		url: 'https://www.faber.co.uk/',
		name: 'Faber',
		year: '2021',
		description: 'High-traffic publishing e-commerce. Pixel-perfect layout. GSAP animation.',
		skills: ['JavaScript', 'GSAP', 'SCSS', 'WordPress', 'Pixel Perfect'],
		alt: 'Faber Books publisher e-commerce website homepage - pixel perfect WordPress web development, GSAP animations, responsive UI UX design, frontend portfolio project by Olexander Buhowski',
	},

	{
		img: hbv,
		url: 'https://homesbyvictoria.co.uk/',
		name: 'Homes By Victoria',
		year: '2024',
		description: 'Custom WordPress e-commerce. Conversion-focused UI/UX. Optimized PHP backend.',
		skills: ['JavaScript', 'SCSS', 'WordPress', 'PHP'],
		alt: 'Homes By Victoria real estate e-commerce website homepage - custom WordPress web development, SCSS PHP UI UX design, frontend portfolio project by Olexander Buhowski',
	},
];

export default projectsData;
