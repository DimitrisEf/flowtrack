import React from "react";
import theme from "theme";
import { Theme, Text, Section, Box, List, Image, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"bookademo"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Header>
			<Override slot="quarklycommunityKitMenuOverride1" display="none" />
		</Components.Header>
		<Section>
			<Text
				margin="0px 0px 20px 0px"
				font="normal 600 22px/1.5 --fontFamily-sansTrebuchet"
				color="#543ae7"
				lg-margin="0px 0px 20px 0px"
				text-align="center"
			>
				Book a Demo
			</Text>
		</Section>
		<Section lg-flex-direction="row">
			<Override slot="SectionContent" flex="0 1 auto" flex-direction="row" lg-flex-direction="column" />
			<Box min-width="100px" min-height="100px" width="50%" lg-width="100%">
				<Text margin="32px 0px 0 0px" font="700 32px --fontFamily-googleInter">
					Discover How FlowTrack Can Transform Your Workflow{"\n\n"}
				</Text>
				<Text margin="0px 0px 0px 0px" font="500 18px --fontFamily-googleInter">
					<br />
					<br />
					Get a personalized walkthrough of our platform and see how FlowTrack can help your team streamline processes, improve collaboration, and achieve better results.
					<br />
					<br />
					Whether you’re a small business, a growing team, or an enterprise, we’ll tailor the demo to your unique needs. Experience firsthand the features and benefits that make FlowTrack the trusted choice for thousands of teams worldwide.{"\n\n"}
				</Text>
			</Box>
			<Components.Bookingcal2 flex="1 1 0%" padding="0px 32px 0px 32px" lg-align-self="center" lg-margin="32px 0px 0px 0px" />
		</Section>
		<Section
			padding="80px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="#fafaf9"
			display="flex"
			quarkly-title="Advantages/Features-28"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				grid-gap="5%"
				sm-min-width="280px"
				lg-display="flex"
				lg-flex-direction="column"
				lg-flex-wrap="no-wrap"
				lg-align-self="stretch"
				lg-align-items="center"
			/>
			<Box
				display="flex"
				width="45%"
				flex-direction="column"
				justify-content="flex-start"
				align-items="flex-start"
				lg-width="80%"
				lg-align-items="flex-start"
				lg-margin="0px 0px 60px 0px"
				sm-margin="0px 0px 40px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="24px 0px 16px 0px"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
				sm-width="100%"
			>
				<Text
					as="h1"
					margin="0px"
					font="normal 600 40px/1.5 --fontFamily-googleInter"
					color="--dark"
					width="100%"
					md-width="100%"
					md-margin="0px 0px 32px 0px"
					md-padding="0px 0px 0px 0px"
					sm-font="normal 600 40px/1.2 --fontFamily-sans"
				>
					What to Expect During Your Demo{"\n\n"}
				</Text>
				<List
					margin="40px 0px 0px 0px"
					padding="0px 0px 0px 0px"
					as="ul"
					sm-margin="24px 0 0 0"
					list-style-type="none"
					font="normal normal 18px/150% sans-serif"
					display="flex"
					flex-direction="column"
					grid-gap="25px"
					lg-margin="32px 0px 0px 0px"
				>
					<Box
						margin="0px 0px 0px 0px"
						display="flex"
						grid-gap="16px"
						flex-direction="column"
						flex-wrap="no-wrap"
					>
						<Text padding="0" margin="0" color="--dark" font="500 18px/27px --fontFamily-googleInter">
							• A live, personalized session with one of our product experts.{"\n\n\n\n"}
						</Text>
						<Text padding="0" margin="0" color="--dark" font="500 18px/27px --fontFamily-googleInter">
							• An overview of FlowTrack’s key features and how they align with your goals.{"\n\n"}
						</Text>
						<Text padding="0" margin="0" color="--dark" font="500 18px/27px --fontFamily-googleInter">
							• Answers to all your questions about pricing, features, and implementation.{"\n\n"}
						</Text>
						<Text padding="0" margin="0" color="--dark" font="500 18px/27px --fontFamily-googleInter">
							• Insights into how other teams in your industry are using FlowTrack
						</Text>
					</Box>
				</List>
			</Box>
			<Box
				display="flex"
				width="50%"
				justify-content="flex-end"
				lg-justify-content="center"
				overflow-y="hidden"
				overflow-x="hidden"
				lg-width="100%"
				padding="0px 0px 0px 16px"
				align-items="center"
				lg-padding="0px 0px 0px 0px"
				font="20px sans-serif"
			>
				<Image
					src="https://uploads.quarkly.io/6753618ae778710018d57544/images/undraw_presentation_re_sxof.png?v=2024-12-08T17:10:00.810Z"
					display="block"
					border-radius={0}
					srcSet="https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_presentation_re_sxof.png?v=2024-12-08T17%3A10%3A00.810Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_presentation_re_sxof.png?v=2024-12-08T17%3A10%3A00.810Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_presentation_re_sxof.png?v=2024-12-08T17%3A10%3A00.810Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_presentation_re_sxof.png?v=2024-12-08T17%3A10%3A00.810Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_presentation_re_sxof.png?v=2024-12-08T17%3A10%3A00.810Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_presentation_re_sxof.png?v=2024-12-08T17%3A10%3A00.810Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_presentation_re_sxof.png?v=2024-12-08T17%3A10%3A00.810Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
		</Section>
		<Section
			padding="80px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="#fafaf9"
			display="flex"
			quarkly-title="Advantages/Features-28"
			lg-flex-direction="column"
			lg-align-items="center"
		>
			<Override
				slot="SectionContent"
				flex-direction="row-reverse"
				flex-wrap="wrap"
				grid-gap="5%"
				sm-min-width="280px"
				lg-flex-direction="column"
				lg-align-items="center"
			/>
			<Box
				display="flex"
				width="45%"
				flex-direction="column"
				justify-content="flex-start"
				align-items="flex-start"
				lg-width="80%"
				lg-align-items="flex-start"
				lg-margin="0px 0px 60px 0px"
				sm-margin="0px 0px 40px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="24px 0px 16px 0px"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
				sm-width="100%"
			>
				<Text
					as="h1"
					margin="0px"
					font="normal 600 40px/1.5 --fontFamily-googleInter"
					color="--dark"
					width="100%"
					md-width="100%"
					md-margin="0px 0px 32px 0px"
					md-padding="0px 0px 0px 0px"
					sm-font="normal 600 40px/1.2 --fontFamily-sans"
				>
					Why Schedule a Demo?{"\n\n"}
				</Text>
				<List
					margin="40px 0px 0px 0px"
					padding="0px 0px 0px 0px"
					as="ul"
					sm-margin="24px 0 0 0"
					list-style-type="none"
					font="normal normal 18px/150% sans-serif"
					display="flex"
					flex-direction="column"
					grid-gap="25px"
					lg-margin="32px 0px 0px 0px"
				>
					<Box
						margin="0px 0px 0px 0px"
						display="flex"
						grid-gap="16px"
						flex-direction="column"
						flex-wrap="no-wrap"
					>
						<Text padding="0" margin="0" color="--dark" font="500 18px/27px --fontFamily-googleInter">
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
								font="700 20px/27px Inter, sans-serif"
							>
								Tailored to You:
							</Strong>
							{" "}See exactly how [Product Name] can solve your team’s challenges.
							<br />
							{"\n\n"}
						</Text>
						<Text padding="0" margin="0" color="--dark" font="500 18px/27px --fontFamily-googleInter">
							<Strong font="700 20px/27px Inter, sans-serif">
								Explore the Features
							</Strong>
							: Get an in-depth look at the tools and capabilities.{"\n\n"}
						</Text>
						<Text padding="0" margin="0" color="--dark" font="500 18px/27px --fontFamily-googleInter">
							<Strong font="700 20px/27px Inter, sans-serif">
								Save Time
							</Strong>
							: Learn how to implement our solution quickly and effectively.
						</Text>
						<Text padding="0" margin="0" color="--dark" font="500 18px/27px --fontFamily-googleInter">
							<Strong font="700 20px/27px Inter, sans-serif">
								Risk-Free
							</Strong>
							: No obligations—just insights to help your business thrive.
						</Text>
					</Box>
				</List>
			</Box>
			<Box
				display="flex"
				width="50%"
				justify-content="flex-end"
				lg-justify-content="center"
				overflow-y="hidden"
				overflow-x="hidden"
				lg-width="100%"
				padding="0px 0px 0px 16px"
				align-items="center"
				lg-padding="0px 0px 0px 0px"
				font="20px sans-serif"
			>
				<Image
					src="https://uploads.quarkly.io/6753618ae778710018d57544/images/undraw_remote_meeting_re_abe7.png?v=2024-12-08T17:17:06.158Z"
					display="block"
					border-radius={0}
					srcSet="https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_remote_meeting_re_abe7.png?v=2024-12-08T17%3A17%3A06.158Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_remote_meeting_re_abe7.png?v=2024-12-08T17%3A17%3A06.158Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_remote_meeting_re_abe7.png?v=2024-12-08T17%3A17%3A06.158Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_remote_meeting_re_abe7.png?v=2024-12-08T17%3A17%3A06.158Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_remote_meeting_re_abe7.png?v=2024-12-08T17%3A17%3A06.158Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_remote_meeting_re_abe7.png?v=2024-12-08T17%3A17%3A06.158Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_remote_meeting_re_abe7.png?v=2024-12-08T17%3A17%3A06.158Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
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