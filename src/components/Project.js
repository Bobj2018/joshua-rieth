import * as React from "react";
import ChevronRight from "baseui/icon/chevron-right";
import TriangleRight from "baseui/icon/triangle-right";
import { StatefulMenu } from "baseui/menu";
import { ListItemLabel, MenuAdapter, ARTWORK_SIZES } from "baseui/list";

const ITEMS = [
	{
		title: "Dark Mode Hooks",
		subtitle:
			"This project was used to demostrate the concept of custom hooks in React.js",
		url: "https://dark-mode-beta.now.sh",
		icon: TriangleRight
	}
];
export default () => {
	// const history = useHistory();

	return (
		<>
			<h2>Projects</h2>
			<StatefulMenu
				items={ITEMS}
				onItemSelect={e => console.log(e.item.title)}
				overrides={{
					List: {
						style: {
							maxHeight: "45%",
							width: "100%"
						}
					},
					Option: {
						props: {
							overrides: {
								ListItem: {
									component: React.forwardRef((props, ref) => (
										<a
											style={{ color: "black" }}
											href={props.item.url}
											title='Dark Room Hooks'
											target='_blank'
											rel='noopener noreferrer'
										>
											<MenuAdapter
												{...props}
												ref={ref}
												artwork={props.item.icon}
												artworkSize={ARTWORK_SIZES.LARGE}
												endEnhancer={() => <ChevronRight />}
											>
												<ListItemLabel description={props.item.subtitle}>
													{props.item.title}
												</ListItemLabel>
											</MenuAdapter>
										</a>
									))
								}
							}
						}
					}
				}}
			/>
		</>
	);
};
