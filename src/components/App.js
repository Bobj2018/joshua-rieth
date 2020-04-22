import React from 'react';
import Navigation from './Navigation';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';

import ReactGA from 'react-ga';
import { useEffect } from 'react';

const GOOGLE_ID = process.env.REACT_APP_GOOGLE_ID;

function App() {
	ReactGA.initialize(GOOGLE_ID);

	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	});

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

			<Switch>
				<Route path="/" component={HomePage} />
			</Switch>
		</div>
	);
}

export default App;
