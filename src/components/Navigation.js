import React, { useState } from 'react';

function Navigation() {
	let [isOpen, setIsOpen] = useState(false);

	return (
		<div className="items-center w-full h-10 m-auto bg-red-800 shadow-lg sm:flex sm:justify-between sm:w-2/3">
			<div className="flex items-center justify-between h-full text-white ">
				<div className="px-4 ">
					<h1 className="text-lg font-bold">Joshua Rieth</h1>
				</div>
				<div className="px-4 sm:hidden">
					<button
						aria-expanded={isOpen}
						id="menu"
						className="p-2 -mr-2 font-semibold text-red-400 hover:text-white focus:border-black "
						aria-label="Navigation Menu"
						onClick={() => setIsOpen(!isOpen)}
					>
						<svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
							{isOpen ? (
								<path
									fillRule="evenodd"
									d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
								/>
							) : (
								<path
									fillRule="evenodd"
									d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
								/>
							)}
						</svg>
					</button>
				</div>
			</div>
			<nav
				role="navigation"
				id="nav"
				className={`${
					isOpen ? 'block' : 'hidden'
				} pb-2 px-2 font-semibold text-white bg-red-800 sm:block sm:py-0 `}
			>
				<div className=" sm:flex">
					<a
						className="block px-2 rounded-full sm:px-2 hover:bg-red-700 focus:border-black focus:border-8"
						href="/"
						aria-label="Home"
						onBlur={() => setIsOpen(false)}
					>
						Home
					</a>
					{/* <a className="block px-2 mt-1 rounded-full sm:px-2 sm:mt-0 hover:bg-red-700" href="/">
						About
					</a> */}
				</div>
			</nav>
		</div>
	);
}

export default Navigation;
