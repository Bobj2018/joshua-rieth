import React from 'react';
import headshot from '../img/joshua-rieth.jpg';
function Hero() {
	return (
		<div className="p-4 sm:w-2/3 md:flex md:justify-evenly md:items-center sm:m-auto">
			<div className="relative w-4/5 m-auto overflow-hidden bg-white border rounded-lg rounded-full pb-4/5 md:hidden ">
				<img
					className="absolute object-cover w-full h-full m-auto "
					src={headshot}
					alt="headshot of joshua rieth"
				/>
			</div>
			<div className="relative hidden w-1/2 md:block ">
				<img
					className="object-cover w-5/6 m-auto overflow-hidden border rounded-full "
					src={headshot}
					alt="headshot of joshua rieth"
				/>
			</div>

			<div className="h-full p-5 mt-1 text-center md:w-1/2 md:m-0 md:p-0">
				<h2 className="text-3xl font-semibold leading-tight">Joshua Rieth</h2>
				<p className="text-gray-600">Full Stack Developer &bull; Computer Science</p>

				{/* <div className="flex items-baseline justify-center pt-3 md:items-center">
					<p className="px-2 text-xs font-bold text-white uppercase bg-red-700 rounded-full">Status</p>{' '}
					<span className="pl-2 font-semibold ">Studying at Lambda School</span>
				</div> */}
			</div>
		</div>
	);
}

export default Hero;
