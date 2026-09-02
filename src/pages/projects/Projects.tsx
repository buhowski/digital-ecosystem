import { useRef } from 'react';
import PageHelmet from '../../components/PageHelmet';
import { portfolioMetaTags } from '../../components/metaTagsBasic';
import projectsData from './projectsData';
import './Projects.scss';

const Projects = () => {
	const descriptionRefs = useRef<Array<HTMLDivElement | null>>([]);

	return (
		<div className='wrapper wrapper--projects'>
			<PageHelmet metaTags={portfolioMetaTags} />

			<h1 className='base-title h1'>Some Works</h1>

			<div className='projects-container'>
				{projectsData.map(({ img, url, urlCode, name, year, description, skills, alt }, i) => (
					<div className='project' key={i}>
						<div className='project__inner'>
							<div className='project-description' ref={(el) => (descriptionRefs.current[i] = el)}>
								<div className='project-description__container'>
									<a
										href={url}
										target='_blank'
										rel='noopener noreferrer'
										className='project-description__header'
									>
										{name && (
											<p className='project-description__name'>
												{name}
												<span>_</span>
											</p>
										)}

										{year && <p className='project-description__year'>{year}</p>}
									</a>

									{description && <p className='project-description__text'>{description}</p>}

									{skills && (
										<div className='project-description__items'>
											{skills?.map((skill, i) => (
												<span key={i}>{skill}</span>
											))}
										</div>
									)}

									<div className='project-description__actions'>
										{url && (
											<a
												href={url}
												target='_blank'
												rel='noopener noreferrer'
												className='project-description__action'
											>
												Live
											</a>
										)}

										{urlCode && (
											<a
												href={urlCode}
												target='_blank'
												rel='noopener noreferrer'
												className='project-description__action'
											>
												Code
											</a>
										)}
									</div>
								</div>
							</div>

							<a className='project-link' href={url} target='_blank' rel='noopener noreferrer'>
								<img className='project-link__img' src={img} alt={alt} />
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
