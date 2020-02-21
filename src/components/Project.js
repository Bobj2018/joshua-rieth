import * as React from "react";
import ChevronRight from "baseui/icon/chevron-right";
import TriangleRight from "baseui/icon/triangle-right";
import { StatefulMenu } from "baseui/menu";
import { ListItemLabel, MenuAdapter, ARTWORK_SIZES } from "baseui/list";
const ITEMS = [...new Array(10)].map(() => ({
	title: "React Project",
	subtitle: "Create with TLC",
	icon: TriangleRight
}));
export default () => {
	return (
		<StatefulMenu
			items={ITEMS}
			onItemSelect={() => console.log("select")}
			overrides={{
				List: {
					style: {
						height: "300px",
						width: "100%"
					}
				},
				Option: {
					props: {
						overrides: {
							ListItem: {
								component: React.forwardRef((props, ref) => (
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
								))
							}
						}
					}
				}
			}}
		/>
	);
};
