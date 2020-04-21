import React from 'react';
import PortfolioCard from './PortfolioCard';

import { projects } from '../projects/projects';

function Portfolio() {
	return (
		<div className="px-10 py-4 m-auto bg-white sm:shadow-lg sm:w-2/3">
			<h1 className="w-full text-3xl font-bold ">My Portfolio</h1>
			<hr className="w-10 my-2 border-t-2 border-red-600" />
			<div className="lg:flex-wrap lg:justify-around lg:flex">
				{projects.map((project, i) => (
					<PortfolioCard key={i} project={project} />
				))}
			</div>
		</div>
	);
}

export default Portfolio;
