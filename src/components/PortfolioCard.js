import React from 'react';
import ProjectBuiltWith from './ProjectBuiltWith';

function PortfolioCard({ project }) {
	console.log(project);

	return (
		<div className="lg:px-10 lg:w-1/2">
			<img className="w-full mt-4" src={require(`../img/${project.img}`)} alt={project.desc} />
			<div className="">
				<h2 className="text-2xl font-semibold ">{project.name}</h2>
				<div className="flex items-baseline">
					<p>Built with:</p>
					{project.builtWith.map((builtWith, i) => {
						return <ProjectBuiltWith builtWith={builtWith} key={i} />;
					})}
				</div>
			</div>

			<ul className="flex justify-center pt-3">
				<a
					href={project.gitHubLink}
					target="_blank"
					rel="noopener noreferrer"
					className="w-1/2 py-2 text-sm font-semibold text-center text-white bg-green-600 rounded-l-full hover:bg-green-700 focus:outline-none "
				>
					Github Repo
				</a>
				<a
					href={project.projectLink}
					target="_blank"
					rel="noopener noreferrer"
					className="w-1/2 py-2 text-sm font-semibold text-center text-white bg-blue-600 rounded-r-full hover:bg-blue-700"
				>
					Project
				</a>
			</ul>
		</div>
	);
}

export default PortfolioCard;
