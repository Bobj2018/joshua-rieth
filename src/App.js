import React from "react";
import { Container } from "reactstrap";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import { Hero } from "./Hero";

function App() {
	document.title = "Joshua Rieth | Full Stack Web Developer";
	return (
		<>
			<Navigation />
			<Container fluid={true}>
				<Hero />
				<Project />
			</Container>
		</>
	);
}
export default App;
