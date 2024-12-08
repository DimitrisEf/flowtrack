import React from "react";
import { useOverrides, Override, SocialMedia } from "@quarkly/components";
import { Image, Text, LinkBox, Box, Link, Section } from "@quarkly/widgets";
import QuarklycommunityKitMenu from "./QuarklycommunityKitMenu";
import QuarklycommunityKitMobileSidePanel from "./QuarklycommunityKitMobileSidePanel";
import { FiMenu } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
const defaultProps = {
	"sm-padding": "8px 0 8px 0",
	"quarkly-title": "Header-5",
	"display": "block",
	"height": "fit-content"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"padding": "12px 0",
			"justify-content": "space-between",
			"align-items": "flex-start",
			"flex-direction": "row",
			"width": "fit-content",
			"sm-width": "50%",
			"sm-align-items": "center",
			"sm-flex-direction": "row",
			"sm-justify-content": "flex-start",
			"md-width": "50%",
			"lg-width": "70%",
			"md-justify-content": "flex-start",
			"height": "fit-content"
		}
	},
	"linkBox": {
		"kind": "LinkBox",
		"props": {
			"flex-direction": "row",
			"href": "/index",
			"display": "flex",
			"grid-gap": "12px"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/6457b971d28fe100213a0f35/images/flower-logo-template.svg?v=2023-08-06T19:34:51.878Z",
			"display": "block",
			"width": "36px",
			"height": "36px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0",
			"md-margin": "0px 0 0px 0",
			"text-align": "left",
			"font": "--headline3",
			"sm-margin": "0px 0 0px 0",
			"display": "block",
			"children": "FlowTrack"
		}
	},
	"quarklycommunityKitMobileSidePanel": {
		"kind": "QuarklycommunityKitMobileSidePanel",
		"props": {
			"menuPosition": "full",
			"breakpoint": "lg",
			"width": "70%",
			"sm-width": "50%",
			"md-width": "50%",
			"lg-width": "30%"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride": {
		"kind": "Override",
		"props": {
			"slot": "Children",
			"md-display": "flex"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride1": {
		"kind": "Override",
		"props": {
			"slot": "Content",
			"padding": "0px 0px 0px 0px",
			"background": "rgba(255, 255, 255, 0)",
			"lg-background": "#ffffff",
			"lg-margin": "0px 0px 0px 0px"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride2": {
		"kind": "Override",
		"props": {
			"slot": "Button Text",
			"font": "normal 600 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"text-transform": "uppercase",
			"letter-spacing": "1px",
			"sm-font": "normal 600 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
			"sm-margin": "0px 2px 0px 0px",
			"lg-margin": "0px 0px 0px 0px"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride3": {
		"kind": "Override",
		"props": {
			"slot": "Button Icon :closed",
			"category": "fi",
			"icon": FiMenu,
			"size": "32px",
			"padding": "5px 7px 5px 7px",
			"border-radius": "50px"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride4": {
		"kind": "Override",
		"props": {
			"slot": "Button Icon",
			"width": "28px",
			"height": "28px",
			"category": "ai",
			"icon": AiOutlineMenu,
			"color": "--dark",
			"size": "24px",
			"lg-width": "32px",
			"lg-height": "32px"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride5": {
		"kind": "Override",
		"props": {
			"slot": "Cross",
			"lg-width": "32px",
			"lg-height": "32px",
			"size": "32px",
			"top": "24px",
			"right": "24px"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"align-items": "center",
			"lg-justify-content": "center",
			"lg-align-items": "flex-start",
			"justify-content": "flex-end",
			"display": "flex",
			"lg-flex-direction": "column",
			"lg-margin": "0px auto 0px auto",
			"lg-min-width": "300px",
			"lg-max-width": "1280px",
			"lg-width": "90%",
			"lg-padding": "24px 0px 48px 0px",
			"height": "min-content"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"display": "none",
			"lg-width": "100%",
			"lg-margin": "0px 0px 24px 0px",
			"lg-display": "flex",
			"lg-padding": "12px 0px 12px 0px"
		}
	},
	"linkBox1": {
		"kind": "LinkBox",
		"props": {
			"flex-direction": "row",
			"href": "/index",
			"display": "flex",
			"grid-gap": "12px"
		}
	},
	"image1": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/6457b971d28fe100213a0f35/images/flower-logo-template.svg?v=2023-08-06T19:34:51.878Z",
			"display": "block",
			"width": "36px",
			"height": "36px"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"margin": "0",
			"md-margin": "0px 0 0px 0",
			"text-align": "left",
			"font": "--lead",
			"sm-margin": "0px 0 0px 0",
			"display": "block",
			"lg-font": "--lead",
			"children": "Company"
		}
	},
	"quarklycommunityKitMenu": {
		"kind": "QuarklycommunityKitMenu",
		"props": {
			"filterMode": "exclude",
			"filterPages": "/index",
			"grid-gap": "12px",
			"lg-flex-direction": "column",
			"lg-padding": "6px 0px 6px 0px",
			"lg-margin": "0px 0px 24px 0px",
			"align-items": "center",
			"flex-wrap": "no-wrap",
			"overflow-x": "visible",
			"overflow-y": "visible",
			"lg-align-items": "flex-start",
			"width": "fit-content",
			"flex": "1 1 0%",
			"align-content": "center",
			"justify-content": "flex-end",
			"display": "flex",
			"flex-direction": "row"
		}
	},
	"quarklycommunityKitMenuOverride": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"color": "--darkL2",
			"hover-color": "--primary",
			"font": "--headline2",
			"text-decoration-line": "initial",
			"transition": "color 0.1s ease 0s",
			"lg-font": "--lead"
		}
	},
	"quarklycommunityKitMenuOverride1": {
		"kind": "Override",
		"props": {
			"slot": "item-active",
			"border-width": "0 0 2px 0",
			"border-style": "solid",
			"border-color": "--color-darkL2",
			"lg-border-width": "0 0 0 2px"
		}
	},
	"quarklycommunityKitMenuOverride2": {
		"kind": "Override",
		"props": {
			"slot": "item",
			"padding": "6px 6px 6px 6px",
			"lg-padding": "6px 12px 6px 12px"
		}
	},
	"quarklycommunityKitMenuOverride3": {
		"kind": "Override",
		"props": {
			"slot": "link-active",
			"cursor": "default",
			"color": "--darkL2",
			"hover-color": "--darkL2"
		}
	},
	"quarklycommunityKitMenuOverride4": {
		"kind": "Override",
		"props": {
			"slot": "link-about",
			"font": "--mybase",
			"href": "/about"
		}
	},
	"quarklycommunityKitMenuOverride5": {
		"kind": "Override",
		"props": {
			"slot": "link-features",
			"font": "--mybase",
			"href": "/features"
		}
	},
	"quarklycommunityKitMenuOverride6": {
		"kind": "Override",
		"props": {
			"slot": "item-features",
			"font": "--base",
			"margin": "0px 16px 0px 16px"
		}
	},
	"quarklycommunityKitMenuOverride7": {
		"kind": "Override",
		"props": {
			"slot": "item-pricing",
			"font": "--base",
			"margin": "0px 16px 0px 16px"
		}
	},
	"quarklycommunityKitMenuOverride8": {
		"kind": "Override",
		"props": {
			"slot": "link-pricing",
			"font": "--mybase",
			"href": "/pricing"
		}
	},
	"quarklycommunityKitMenuOverride9": {
		"kind": "Override",
		"props": {
			"slot": "item-about",
			"margin": "0px 16px 0px 16px"
		}
	},
	"quarklycommunityKitMenuOverride10": {
		"kind": "Override",
		"props": {
			"slot": "link-contact",
			"font": "--mybase",
			"href": "/contact"
		}
	},
	"quarklycommunityKitMenuOverride11": {
		"kind": "Override",
		"props": {
			"slot": "item-contact",
			"margin": "0px 16px 0px 16px"
		}
	},
	"quarklycommunityKitMenuOverride12": {
		"kind": "Override",
		"props": {
			"slot": "link-bookademo",
			"font": "--mybase",
			"display": "none"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"font": "normal 400 16px/1.5 --fontFamily-googleInter",
			"text-decoration-line": "initial",
			"margin": "0px 0px 0px 16px",
			"background": "#522ee0",
			"border-radius": "8px",
			"href": "/bookademo",
			"color": "#ffffff",
			"padding": "8px 16px 8px 16px",
			"lg-margin": "0px 0px 24px 0px",
			"lg-padding": "12px 18px 13px 18px",
			"lg-font": "--lead",
			"children": "Book A Demo"
		}
	},
	"box3": {
		"kind": "Box",
		"props": {
			"width": "25%",
			"display": "none",
			"lg-width": "100%",
			"lg-flex-direction": "column",
			"lg-align-items": "flex-start",
			"lg-display": "flex",
			"justify-content": "space-around",
			"align-items": "center",
			"flex-wrap": "wrap",
			"lg-margin": "32px 0px 0px 0px"
		}
	},
	"socialMedia": {
		"kind": "SocialMedia",
		"props": {
			"instagram": "https://instagram.com/instagram",
			"margin": "0px 0px 0px 0px",
			"facebook": "https://www.facebook.com/quarklyapp/",
			"youtube": "https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw",
			"lg-display": "flex",
			"lg-grid-gap": "12px"
		}
	},
	"socialMediaOverride": {
		"kind": "Override",
		"props": {
			"slot": "link-twitter",
			"margin": "0px 0px 0px 5px",
			"children": <div />
		}
	},
	"socialMediaOverride1": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"border-radius": "50%",
			"background": "transparent",
			"hover-color": "--light",
			"display": "flex",
			"margin": "0 5px 0 5px",
			"padding": "5x 5px 5px 5px",
			"width": "32px",
			"height": "32px",
			"align-items": "center",
			"justify-content": "center"
		}
	},
	"socialMediaOverride2": {
		"kind": "Override",
		"props": {
			"slot": "icon",
			"size": "32px",
			"border-radius": "50px",
			"color": "--grey"
		}
	},
	"socialMediaOverride3": {
		"kind": "Override",
		"props": {
			"slot": "link-facebook",
			"margin": "0px 5px 0px 0px",
			"children": <div />
		}
	}
};

const Header = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" flex-direction="row" justify-content="space-between" />
		<Box {...override("box")}>
			<LinkBox {...override("linkBox")}>
				<Image {...override("image")} />
				<Text {...override("text")} />
			</LinkBox>
		</Box>
		<QuarklycommunityKitMobileSidePanel {...override("quarklycommunityKitMobileSidePanel")}>
			<Override {...override("quarklycommunityKitMobileSidePanelOverride")} />
			<Override {...override("quarklycommunityKitMobileSidePanelOverride1")} />
			<Override {...override("quarklycommunityKitMobileSidePanelOverride2")} />
			<Override {...override("quarklycommunityKitMobileSidePanelOverride3")} />
			<Override {...override("quarklycommunityKitMobileSidePanelOverride4")} />
			<Override {...override("quarklycommunityKitMobileSidePanelOverride5")} />
			<Box {...override("box1")}>
				<Box {...override("box2")}>
					<LinkBox {...override("linkBox1")}>
						<Image {...override("image1")} />
						<Text {...override("text1")} />
					</LinkBox>
				</Box>
				<QuarklycommunityKitMenu {...override("quarklycommunityKitMenu")}>
					<Override {...override("quarklycommunityKitMenuOverride")} />
					<Override {...override("quarklycommunityKitMenuOverride1")} />
					<Override {...override("quarklycommunityKitMenuOverride2")} />
					<Override {...override("quarklycommunityKitMenuOverride3")} />
					<Override {...override("quarklycommunityKitMenuOverride4")} />
					<Override {...override("quarklycommunityKitMenuOverride5")} />
					<Override {...override("quarklycommunityKitMenuOverride6")} />
					<Override {...override("quarklycommunityKitMenuOverride7")} />
					<Override {...override("quarklycommunityKitMenuOverride8")} />
					<Override {...override("quarklycommunityKitMenuOverride9")} />
					<Override {...override("quarklycommunityKitMenuOverride10")} />
					<Override {...override("quarklycommunityKitMenuOverride11")} />
					<Override {...override("quarklycommunityKitMenuOverride12")} />
				</QuarklycommunityKitMenu>
				<Link {...override("link")} />
				<Box {...override("box3")}>
					<SocialMedia {...override("socialMedia")}>
						<Override {...override("socialMediaOverride")} />
						<Override {...override("socialMediaOverride1")} />
						<Override {...override("socialMediaOverride2")} />
						<Override {...override("socialMediaOverride3")} />
					</SocialMedia>
				</Box>
			</Box>
		</QuarklycommunityKitMobileSidePanel>
		{children}
	</Section>;
};

Object.assign(Header, { ...Section,
	defaultProps,
	overrides
});
export default Header;