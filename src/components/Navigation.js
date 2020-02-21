import React from "react";
import {
	HeaderNavigation,
	ALIGN,
	StyledNavigationItem as NavigationItem,
	StyledNavigationList as NavigationList
} from "baseui/header-navigation";
import { Button } from "baseui/button";

function Navigation() {
	return (
		<header>
			<HeaderNavigation>
				<NavigationList $align={ALIGN.left}>
					<NavigationItem>Joshua Rieth</NavigationItem>
				</NavigationList>
				<NavigationList $align={ALIGN.center} />
				<NavigationList $align={ALIGN.right}>
					<NavigationItem style={{ paddingRight: "15px" }}>
						<Button>Contact</Button>
					</NavigationItem>
				</NavigationList>
			</HeaderNavigation>
		</header>
	);
}
export default Navigation;
