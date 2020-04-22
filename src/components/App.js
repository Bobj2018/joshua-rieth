import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

function App() {
	return (
		<div id="app" className="w-screen h-screen overflow-x-hidden bg-gray-200">
			<ul className="fixed z-50 p-0 m-2 font-bold" tabIndex="0">
				<li>
					<a
						className="px-5 sr-only focus:not-sr-only focus:text-white focus:bg-black focus:block"
						href="#nav"
						aria-label="Skip to Navigation"
					>
						Skip to Navigation
					</a>
				</li>
				<li>
					<a
						className="px-5 sr-only focus:not-sr-only focus:text-white focus:bg-black focus:block"
						href="#main"
						aria-label="Skip to Main Content"
					>
						Skip to Main Content
					</a>
				</li>
			</ul>

			<header className="sticky z-10 bg-red-800" role="banner">
				<Navigation />
			</header>
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
		</div>
	);
}

export default App;
