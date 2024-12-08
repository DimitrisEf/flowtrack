import React from "react";
import theme from "theme";
import { Theme, Text, Icon, Box, Link, LinkBox, Input, Button, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Formspree } from "@quarkly/components";
import * as Components from "components";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"contact"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Header />
		<Section
			color="--light"
			padding="32px 0 100px 0"
			sm-padding="40px 0"
			position="relative"
			background="linear-gradient(0deg,rgba(82, 46, 224, 0.17) 0%,rgba(82, 46, 224, 0) 100%)"
			quarkly-title="Form-1"
		>
			<Text
				margin="0px 0px 64px 0px"
				font="normal 600 22px/1.5 --fontFamily-sansTrebuchet"
				color="#543ae7"
				lg-margin="0px 0px 20px 0px"
				text-align="center"
			>
				Contact
			</Text>
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="50%" md-width="100%">
					<Box md-display="flex" md-flex-direction="column" md-justify-content="center" md-align-items="center">
						<Box
							sm-padding="64px 0 0 0"
							margin="32px 0 0 0"
							max-width="360px"
							position="relative"
							padding="0 0 0 64px"
							md-width="100%"
							md-max-width="100%"
							md-align-self="stretch"
						>
							<Icon
								size="48px"
								top="0"
								left="0"
								category="md"
								icon={MdLocationOn}
								position="absolute"
								color="#000000"
							/>
							<Text as="h4" margin="6px 0" font="--base" color="#000000">
								Visit us
							</Text>
							<Text as="p" margin="6px 0" font="--headline3" color="#000000">
								4998 Hanover Street, New York, 10011
							</Text>
						</Box>
						<Box
							position="relative"
							padding="0 0 0 64px"
							sm-padding="64px 0 0 0"
							margin="64px 0 0 0"
							max-width="360px"
							md-width="100%"
							md-max-width="100%"
							md-align-self="stretch"
						>
							<Icon
								top="0"
								left="0"
								category="md"
								icon={MdEmail}
								position="absolute"
								size="48px"
								color="#000000"
							/>
							<Text font="--base" as="h4" margin="6px 0" color="#000000">
								Email us
							</Text>
							<Text as="p" margin="6px 0" font="--headline3">
								<Link href="mailto:hello@company.com" text-decoration="none" hover-text-decoration="underline" color="#000000">
									info@FlowTrack.com
								</Link>
							</Text>
						</Box>
						<Box
							padding="0 0 0 64px"
							margin="64px 0 0 0"
							max-width="360px"
							position="relative"
							md-width="100%"
							md-max-width="100%"
							md-align-self="stretch"
						>
							<Icon
								left="0"
								category="md"
								icon={MdPhone}
								position="absolute"
								size="48px"
								top="0"
								color="#000000"
							/>
							<Text font="--base" as="h4" margin="6px 0" color="#000000">
								Call us
							</Text>
							<Text as="p" margin="6px 0" font="--headline3" color="#000000">
								+1 (234) 567-89-00
								<br />
								+1 (234) 567-89-00
							</Text>
						</Box>
						<Box
							sm-padding="0"
							margin="48px 0"
							max-width="360px"
							position="relative"
							display="flex"
							padding="0 0 0 64px"
							md-width="100%"
							md-max-width="100%"
							md-align-self="stretch"
							md-align-items="center"
							md-display="flex"
							md-flex-direction="row"
							md-justify-content="flex-start"
						>
							<LinkBox margin="0px 16px 0px 0px">
								<Icon
									width="48px"
									height="48px"
									size="24px"
									background="--color-primary"
									border-radius="50%"
									category="fa"
									icon={FaFacebookF}
									color="--light"
									margin="0px 0px 0px 0px"
								/>
							</LinkBox>
							<LinkBox margin="0px 16px 0px 0px">
								<Icon
									background="--color-primary"
									border-radius="50%"
									category="fa"
									icon={FaTwitter}
									width="48px"
									height="48px"
									size="24px"
									color="--light"
									margin="0px 0px 0px 0px"
								/>
							</LinkBox>
							<LinkBox margin="0px 16px 0px 0px">
								<Icon
									category="fa"
									icon={FaLinkedinIn}
									width="48px"
									height="48px"
									size="24px"
									background="--color-primary"
									border-radius="50%"
									color="--light"
									margin="0px 0px 0px 0px"
								/>
							</LinkBox>
						</Box>
					</Box>
				</Box>
				<Box
					margin="0 0 0 0"
					md-max-width="100%"
					background="#522ee0"
					max-width="600px"
					border-radius="16px"
					padding="56px 48px"
					flex="0 1 auto"
					width="50%"
					md-width="100%"
				>
					<Text as="h3" font="--headline3" margin="0 0 20px 0">
						Leave us message
					</Text>
					<Formspree endpoint="xeqpgrlv">
						<Box gap="16px" display="flex" flex-direction="row" flex-wrap="wrap">
							<Box padding="8px 8px 8px 8px" width="100%">
								<Box display="flex" flex-direction="column">
									<Text margin="0 0 4px 0" font="--mybase">
										Name
									</Text>
									<Input max-width="400px" width="100%" name="name" border-radius="8px" />
								</Box>
							</Box>
							<Box width="100%" padding="8px 8px 8px 8px">
								<Box display="flex" flex-direction="column">
									<Text font="--mybase" margin="0 0 4px 0">
										Email
									</Text>
									<Input
										max-width="400px"
										width="100%"
										type="email"
										name="email"
										border-radius="8px"
									/>
								</Box>
							</Box>
							<Box padding="8px 8px 8px 8px" width="100%">
								<Box display="flex" flex-direction="column">
									<Text font="--mybase" margin="0 0 4px 0">
										Message
									</Text>
									<Input
										width="100%"
										name="message"
										as="textarea"
										rows="4"
										border-radius="8px"
									/>
								</Box>
							</Box>
							<Box width="100%" padding="32px 8px 8px 8px">
								<Box display="flex" flex-direction="column" align-items="flex-start">
									<Button
										background="#ffffff"
										width="100%"
										padding="12px 24px 12px 24px"
										font="normal 600 16px/1.5 --fontFamily-googleInter"
										color="#1b1b1b"
										border-radius="8px"
									>
										Send
									</Button>
								</Box>
							</Box>
						</Box>
					</Formspree>
				</Box>
			</Box>
		</Section>
		<Section padding="40px 0 40px 0" sm-padding="60px 0 60px 0" background="linear-gradient(0deg,rgba(82, 46, 224, 0) 48.6%,rgba(82, 46, 224, 0.17) 100%)">
			<Box
				padding="40px 72px 40px 72px"
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Image%20%289%29.png?v=2021-08-26T14:56:08.732Z) 0% 0% /cover no-repeat scroll padding-box"
				border-radius="24px"
				margin="0px 0px 64px 0px"
				sm-padding="60px 36px 60px 36px"
				box-shadow="2px 2px 30px 10px #ffffff"
			>
				<Box
					width="full"
					display="flex"
					flex-direction="column"
					md-width="100%"
					md-align-items="center"
					md-justify-content="center"
					md-text-align="center"
					lg-width="100%"
					align-items="center"
					justify-content="center"
					align-content="space-between"
					flex-wrap="no-wrap"
				>
					<Text
						margin="0px 0px 32px 0px"
						font="normal 700 42px/1.2 --fontFamily-googleInter"
						color="--dark"
						md-text-align="center"
						sm-font="normal 700 32px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
						text-align="center"
						align-self="center"
						width="50%"
					>
						Ready to Streamline Your Workflow?
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						font="normal 500 16px/1.5 --fontFamily-googleInter"
						color="--greyD3"
						md-text-align="center"
						text-align="center"
						align-self="center"
						width="50%"
					>
						Take your business to the next level? Start your free trial today or book a personalized demo to see how we can help your team achieve more.
					</Text>
					<Button
						margin="32px 0px 0px 0px"
						padding="8px 24px 8px 24px"
						font="normal 400 16px/1.5 --fontFamily-googleInter"
						background="#0f0f0f"
						border-radius="4px"
						type="link"
						text-decoration-line="initial"
						href="/bookademo"
					>
						Book a Demo
					</Button>
				</Box>
			</Box>
		</Section>
		<Components.Footer />
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6753618ae778710018d57542"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});