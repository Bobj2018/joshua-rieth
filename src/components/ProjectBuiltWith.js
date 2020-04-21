import React from 'react';

function ProjectBuiltWith({ builtWith }) {
	switch (builtWith) {
		case 'React':
			return (
				<span className="px-2 ml-2 text-sm font-semibold text-white bg-teal-400 rounded-full">{builtWith}</span>
			);
		default:
			break;
	}
}

export default ProjectBuiltWith;
