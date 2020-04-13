import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';

function App() {
	return (
		<div id="app" className="w-screen h-screen overflow-auto bg-gray-200">
			<header className="sticky z-10">
				<Navigation />
			</header>
			<section className="w-full bg-white ">
				<Hero />
			</section>
		</div>
	);
}

export default App;
