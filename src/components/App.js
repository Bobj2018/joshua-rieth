import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

function App() {
	return (
		<div id="app" className="w-screen h-screen overflow-x-hidden bg-gray-200">
			<header className="sticky z-10 bg-red-800">
				<Navigation />
			</header>
			<section className="w-full bg-white ">
				<Hero />
			</section>
			<section className="w-full py-4 bg-white">
				<About />
			</section>
			<section className="w-full py-4 bg-white">
				<Portfolio />
			</section>
			<section className="w-full py-4 bg-white">
				<Contact />
			</section>
		</div>
	);
}

export default App;
