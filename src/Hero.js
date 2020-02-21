import React from "react";
import Jumbotron from "reactstrap/lib/Jumbotron";
import { Heading, HeadingLevel } from "baseui/heading";
import { Paragraph2 } from "baseui/typography";
export const Hero = () => (
	<Jumbotron
		fluid={true}
		style={{
			paddingLeft: "15px",
			marginTop: "15px"
		}}
	>
		<HeadingLevel>
			<Heading>Joshua Rieth</Heading>
		</HeadingLevel>
		<Paragraph2>Full Stack Web Developer</Paragraph2>
	</Jumbotron>
);
