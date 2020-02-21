import React from "react";
import {
	HeaderNavigation,
	ALIGN,
	StyledNavigationItem as NavigationItem,
	StyledNavigationList as NavigationList
} from "baseui/header-navigation";
import { Button } from "baseui/button";
import { useStyletron } from "baseui";

function Navigation() {
	const [css, theme] = useStyletron();
	return (
		<header
			className={css({
				background: theme.colors.negative,
				color: theme.colors.primaryB
			})}
		>
			<HeaderNavigation>
				<NavigationList $align={ALIGN.left}>
					<NavigationItem>Joshua Rieth</NavigationItem>
				</NavigationList>
				<NavigationList $align={ALIGN.center} />
				<NavigationList $align={ALIGN.right}>
					<NavigationItem style={{ paddingRight: "15px" }}>
						<Button disabled>Contact</Button>
					</NavigationItem>
				</NavigationList>
			</HeaderNavigation>
		</header>
	);
}
export default Navigation;
