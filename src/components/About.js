import React from 'react';

function About() {
	return (
		<div className="px-10 py-4 m-auto bg-white sm:shadow-lg sm:w-2/3 ">
			<h1 className="w-full text-3xl font-bold ">About</h1>
			<hr className="w-10 my-2 border-t-2 border-red-600" />
			<p className="font-medium ">
				Hello! I'm Joshua, a freelance Web Developer based in Henry County, KY. My goal is to accessible to{' '}
				<span className="underline">everyone!</span>
			</p>
		</div>
	);
}

export default About;
