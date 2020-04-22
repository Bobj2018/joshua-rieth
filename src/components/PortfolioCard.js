import React from 'react';
import ProjectBuiltWith from './ProjectBuiltWith';

function PortfolioCard({ project }) {
	return (
		<div className="lg:px-10 lg:w-1/2">
			<img className="w-full mt-4" src={require(`../img/${project.img}`)} alt={project.desc} />
			<div className="">
				<h3 className="text-2xl font-semibold ">{project.name}</h3>
				<div className="flex items-baseline">
					<p>Built with:</p>
					{project.builtWith.map((builtWith, i) => {
						return <ProjectBuiltWith builtWith={builtWith} key={i} />;
					})}
				</div>
			</div>

			<ul className="flex justify-center pt-3">
				<li className="w-1/2 py-2 text-sm font-semibold text-center text-white bg-green-600 rounded-l-full hover:bg-green-700 focus:border-black focus:border-8">
					<a
						href={project.gitHubLink}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`Github Repo Link for ${project.name}`}
					>
						Github Repo
					</a>
				</li>
				<li className="w-1/2 py-2 text-sm font-semibold text-center text-white bg-blue-600 rounded-r-full hover:bg-blue-700 focus:border-black focus:border-8">
					<a
						href={project.projectLink}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`Project Link for ${project.name}`}
					>
						Project
					</a>
				</li>
			</ul>
		</div>
	);
}

export default PortfolioCard;
