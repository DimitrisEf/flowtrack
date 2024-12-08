import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Link, Box, Icon, LinkBox, Text, Section } from "@quarkly/widgets";
import { FaFacebook, FaInstagram, FaTwitterSquare, FaGithub, FaYoutube } from "react-icons/fa";
const defaultProps = {
	"padding": "50px 0 50px 0",
	"quarkly-title": "Footer-3"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"flex-direction": "column",
			"align-items": "center",
			"margin": "0px 0px 45px 0px"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"md-margin": "0px 0px 0px 0px",
			"display": "flex",
			"md-justify-content": "center",
			"md-align-items": "center",
			"justify-content": "center",
			"sm-flex-wrap": "wrap",
			"grid-template-columns": "repeat(5, 1fr)",
			"grid-gap": "16px 24px",
			"sm-grid-template-columns": "1fr"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"color": "#5a5d64",
			"margin": "0px 6px 0px 0px",
			"href": "/index",
			"font": "normal 400 18px/1.5 --fontFamily-sans",
			"text-decoration-line": "initial",
			"hover-color": "--darkL1",
			"transition": "background-color 0.1s ease 0s",
			"sm-text-align": "center",
			"md-margin": "0px 0 0px 0px",
			"children": "Home"
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"margin": "0px 6px 0px 6px",
			"href": "/features",
			"font": "normal 400 18px/1.5 --fontFamily-sans",
			"text-decoration-line": "initial",
			"color": "#5a5d64",
			"hover-color": "--darkL1",
			"transition": "background-color 0.1s ease 0s",
			"sm-text-align": "center",
			"md-margin": "0px 0 0px 6px",
			"children": "Features"
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"margin": "0px 6px 0px 6px",
			"href": "/pricing",
			"font": "normal 400 18px/1.5 --fontFamily-sans",
			"text-decoration-line": "initial",
			"color": "#5a5d64",
			"hover-color": "--darkL1",
			"transition": "background-color 0.1s ease 0s",
			"sm-text-align": "center",
			"md-margin": "0px 0 0px 6px",
			"children": "Pricing"
		}
	},
	"link3": {
		"kind": "Link",
		"props": {
			"margin": "0px 6px 0px 6px",
			"href": "/about",
			"font": "normal 400 18px/1.5 --fontFamily-sans",
			"text-decoration-line": "initial",
			"color": "#5a5d64",
			"hover-color": "--darkL1",
			"transition": "background-color 0.1s ease 0s",
			"sm-text-align": "center",
			"md-margin": "0px 0 0px 6px",
			"children": "About"
		}
	},
	"link4": {
		"kind": "Link",
		"props": {
			"margin": "0px 6px 0px 6px",
			"href": "/contact",
			"font": "normal 400 18px/1.5 --fontFamily-sans",
			"text-decoration-line": "initial",
			"color": "#5a5d64",
			"hover-color": "--darkL1",
			"transition": "background-color 0.1s ease 0s",
			"sm-text-align": "center",
			"md-margin": "0px 0 0px 6px",
			"children": "Contact"
		}
	},
	"link5": {
		"kind": "Link",
		"props": {
			"margin": "0px 6px 0px 6px",
			"href": "/bookademo",
			"font": "normal 400 18px/1.5 --fontFamily-sans",
			"text-decoration-line": "initial",
			"color": "#5a5d64",
			"hover-color": "--darkL1",
			"transition": "background-color 0.1s ease 0s",
			"sm-text-align": "center",
			"md-margin": "0px 0 0px 6px",
			"children": "Book a demo"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"display": "grid",
			"grid-template-columns": "repeat(5, 1fr)",
			"grid-gap": "16px 24px",
			"align-self": "center",
			"margin": "0px 0px 40px 0px"
		}
	},
	"linkBox": {
		"kind": "LinkBox",
		"props": {
			"href": "/"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaFacebook,
			"size": "24px",
			"color": "#5a5d64",
			"hover-color": "--dark",
			"transition": "background-color 1s ease 0s"
		}
	},
	"linkBox1": {
		"kind": "LinkBox",
		"props": {
			"href": "/"
		}
	},
	"icon1": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaInstagram,
			"size": "24px",
			"color": "#5a5d64",
			"hover-color": "--dark",
			"transition": "background-color 1s ease 0s"
		}
	},
	"linkBox2": {
		"kind": "LinkBox",
		"props": {
			"href": "/"
		}
	},
	"icon2": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaTwitterSquare,
			"size": "24px",
			"color": "#5a5d64",
			"hover-color": "--dark",
			"transition": "background-color 1s ease 0s"
		}
	},
	"linkBox3": {
		"kind": "LinkBox",
		"props": {
			"href": "/"
		}
	},
	"icon3": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaGithub,
			"size": "24px",
			"color": "#5a5d64",
			"hover-color": "--dark",
			"transition": "background-color 1s ease 0s"
		}
	},
	"linkBox4": {
		"kind": "LinkBox",
		"props": {
			"href": "/"
		}
	},
	"icon4": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaYoutube,
			"size": "24px",
			"color": "#5a5d64",
			"hover-color": "--dark",
			"transition": "background-color 1s ease 0s"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0 0px 0 0px",
			"font": "--base",
			"color": "#5a5d64",
			"text-align": "center",
			"sm-display": "flex",
			"sm-flex-wrap": "wrap",
			"children": "© 2023 FlowTrack, Inc. All rights reserved."
		}
	}
};

const Footer = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" sm-align-items="center" />
		<Box {...override("box")}>
			<Box {...override("box1")}>
				<Link {...override("link")} />
				<Link {...override("link1")} />
				<Link {...override("link2")} />
				<Link {...override("link3")} />
				<Link {...override("link4")} />
				<Link {...override("link5")} />
			</Box>
		</Box>
		<Box {...override("box2")}>
			<LinkBox {...override("linkBox")}>
				<Icon {...override("icon")} />
			</LinkBox>
			<LinkBox {...override("linkBox1")}>
				<Icon {...override("icon1")} />
			</LinkBox>
			<LinkBox {...override("linkBox2")}>
				<Icon {...override("icon2")} />
			</LinkBox>
			<LinkBox {...override("linkBox3")}>
				<Icon {...override("icon3")} />
			</LinkBox>
			<LinkBox {...override("linkBox4")}>
				<Icon {...override("icon4")} />
			</LinkBox>
		</Box>
		<Text {...override("text")} />
		{children}
	</Section>;
};

Object.assign(Footer, { ...Section,
	defaultProps,
	overrides
});
export default Footer;