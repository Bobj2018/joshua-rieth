import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

import React from 'react';

function HomePage() {
	return (
		<main role="main" id="main">
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
		</main>
	);
}

export default HomePage;
