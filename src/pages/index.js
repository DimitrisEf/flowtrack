import React from "react";
import theme from "theme";
import { Theme, Text, Link, Button, Box, Image, Section, Icon, Strong, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { FaGalacticRepublic, FaHornbill, FaReact } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Header>
			<Override slot="quarklycommunityKitMenuOverride8">
				Pricing
			</Override>
			<Override slot="quarklycommunityKitMenuOverride4">
				About
			</Override>
			<Override slot="quarklycommunityKitMenuOverride10" href="/contact">
				Contact
			</Override>
		</Components.Header>
		<Section padding="100px 0 0 0" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/blurred-gradient-colorful-background.jpg?v=2023-04-27T14:13:16.718Z) 50% 50% /cover repeat scroll padding-box" quarkly-title="Hero-17" transition="background-color 0.2s ease 0s">
			<Override slot="SectionContent" flex-direction="row" />
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				justify-content="space-around"
				lg-flex-direction="column"
				flex-direction="column"
			>
				<Box
					min-width="100px"
					min-height="100px"
					lg-width="100%"
					display="flex"
					flex-direction="column"
					lg-padding="0px 0 0px 0px"
					lg-margin="0px 0px 50px 0px"
					margin="0px 0px 80px 0px"
					align-items="center"
				>
					<Text
						margin="0px 0px 20px 0px"
						font="normal 700 64px/1.2 --fontFamily-sans"
						sm-font="normal 700 42px/1.2 --fontFamily-sans"
						padding="0px 250px 0px 250px"
						text-align="center"
						lg-padding="0px 0 0px 0"
					>
						Revolutionize Your Workflow
					</Text>
					<Text
						margin="0px 0px 50px 0px"
						font="--lead"
						color="#8b9197"
						text-align="center"
						padding="0px 250px 0px 250px"
						lg-padding="0px 0 0px 0"
						lg-margin="0px 0px 30px 0px"
					>
						Streamline your projects, improve team collaboration, and hit deadlines faster with our powerful, cloud-based project management software.
					</Text>
					<Box
						min-width="10px"
						min-height="10px"
						display="flex"
						sm-flex-direction="column"
						sm-align-items="center"
						sm-align-self="center"
						sm-justify-content="center"
					>
						<Link
							href="/bookademo"
							color="--light"
							background="#522ee0"
							font="normal 400 17px/1.5 --fontFamily-sans"
							text-decoration-line="initial"
							padding="12px 28px 12px 28px"
							margin="0px 15px 0px 0px"
							border-radius="8px"
							border-color="#522ee0"
							border-width="2px"
							border-style="solid"
							sm-text-align="center"
							sm-margin="0px 0px 16px 0px"
						>
							Get Started
						</Link>
						<Button
							margin="0px 0 0px 0px"
							padding="12px 28px 12px 28px"
							background="rgba(0, 119, 204, 0)"
							color="--darkL1"
							font="normal 400 17px/1.5 --fontFamily-googleInter"
							type="link"
							text-decoration-line="initial"
							href="/features"
						>
							Features
						</Button>
					</Box>
				</Box>
				<Image
					src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/3090699_447.png?v=2023-05-31T10:55:25.060Z"
					object-fit="cover"
					background="--color-lightD1"
					padding="15px 15px 0px 15px"
					border-radius="15px 15px 0 0"
					height="400px"
					object-position="0 0"
					lg-height="300px"
					md-height="200px"
					srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/3090699_447.png?v=2023-05-31T10%3A55%3A25.060Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/3090699_447.png?v=2023-05-31T10%3A55%3A25.060Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/3090699_447.png?v=2023-05-31T10%3A55%3A25.060Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/3090699_447.png?v=2023-05-31T10%3A55%3A25.060Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/3090699_447.png?v=2023-05-31T10%3A55%3A25.060Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/3090699_447.png?v=2023-05-31T10%3A55%3A25.060Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/3090699_447.png?v=2023-05-31T10%3A55%3A25.060Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" background="#ffffff" sm-padding="60px 0 60px 0">
			<Box
				width="100%"
				display="flex"
				flex-direction="column"
				md-width="100%"
				md-align-items="center"
				md-justify-content="center"
				md-text-align="center"
				lg-width="100%"
				margin="0px 0px 56px 0px"
				align-items="center"
			>
				<Text
					margin="0px 0px 16px 0px"
					font="normal 600 32px/1.2 --fontFamily-googleInter"
					color="--dark"
					md-text-align="center"
					sm-font="normal 700 32px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					text-align="center"
				>
					Why Choose FlowTrack?
				</Text>
			</Box>
			<Box
				display="flex"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="32px 4%"
				md-grid-template-columns="1fr"
				flex="0 1 auto"
				grid-column-gap="2%"
			>
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#f5edff"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
					height="fit-content"
					flex="1 1 0%"
					width="auto"
				>
					<Icon
						category="fa"
						icon={FaGalacticRepublic}
						margin="0px 0px 30px 0px"
						color="--dark"
						size="48px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Task Automation
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
						height="fit-content"
					>
						Automate repetitive tasks and save time.
					</Text>
				</Box>
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#f5edff"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
					height="fit-content"
					flex="1 1 0%"
					width="auto"
				>
					<Icon
						category="fa"
						icon={FaHornbill}
						margin="0px 0px 30px 0px"
						color="--dark"
						size="48px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Real-Time Collaboration
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Keep your team aligned with real-time updates.
					</Text>
				</Box>
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#f5edff"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
					height="fit-content"
					flex="1 1 0%"
					width="auto"
				>
					<Icon
						category="fa"
						icon={FaReact}
						margin="0px 0px 30px 0px"
						color="--dark"
						size="48px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Customizable Dashboards
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Visualize your workflow your way.
					</Text>
				</Box>
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#f5edff"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
					flex="1 1 0%"
					height="fit-content"
					width="auto"
				>
					<Icon
						category="fa"
						icon={FaReact}
						margin="0px 0px 30px 0px"
						color="--dark"
						size="48px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Advanced Reporting
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Make data-driven decisions with ease.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section>
			<Override slot="SectionContent" md-display="flex" md-flex-direction="column" />
			<Text
				margin="32px 0px 20px 0px"
				font="normal 500 20px/1.5 --fontFamily-sansHelvetica"
				color="--indigo"
				lg-margin="0px 0px 20px 0px"
				text-align="center"
			>
				Features
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				margin="32px 0px 32px 0px"
				md-flex-direction="column"
				md-align-items="center"
				md-align-self="center"
			>
				<Box
					min-width="100px"
					min-height="100px"
					width="60%"
					padding="0px 56px 0px 0px"
					md-width="100%"
					md-padding="0px 0 0px 0px"
				>
					<Text
						margin="0px 0px 0 0px"
						font="600 42px --fontFamily-googleInter"
						md-text-align="center"
						md-width="100%"
						md-margin="0px 0px 0 28"
					>
						Advanced Collaboration
					</Text>
					<Text
						margin="72px 0px 0px 0px"
						font="400 24px --fontFamily-googleInter"
						padding="32px 32px 32px 32px"
						background="#f5edff"
						border-width="16px"
						border-radius="16px"
					>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							Real-Time Updates
						</Strong>
						:
						<br />
						{" "}
						<br />
						Changes made by team members are instantly visible to everyone, ensuring seamless communication and no version conflicts.
						<br />
					</Text>
				</Box>
				<Components.Svg1
					width="40%"
					height="auto"
					display="flex"
					margin="128px 0px 0px 0px"
					md-width="fit-content"
					md-height="40%"
				/>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				margin="64px 0px 32px 0px"
				padding="0px 0px 0px 48px"
				justify-content="space-around"
				md-flex-direction="column-reverse"
				md-padding="0px 0px 0px 0"
			>
				<Image
					src="https://uploads.quarkly.io/6753618ae778710018d57544/images/undraw_updates_re_o5af.png?v=2024-12-08T02:02:46.185Z"
					display="block"
					width="250px"
					md-display="flex"
					md-align-items="center"
					md-justify-content="center"
					md-height="150px"
					md-width="100%"
					md-margin="32px 0px 0px 0px"
					srcSet="https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_updates_re_o5af.png?v=2024-12-08T02%3A02%3A46.185Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_updates_re_o5af.png?v=2024-12-08T02%3A02%3A46.185Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_updates_re_o5af.png?v=2024-12-08T02%3A02%3A46.185Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_updates_re_o5af.png?v=2024-12-08T02%3A02%3A46.185Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_updates_re_o5af.png?v=2024-12-08T02%3A02%3A46.185Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_updates_re_o5af.png?v=2024-12-08T02%3A02%3A46.185Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_updates_re_o5af.png?v=2024-12-08T02%3A02%3A46.185Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Box
					min-width="100px"
					min-height="100px"
					padding="0px 0px 0px 56px"
					width="65%"
					md-padding="0px 0px 0px 0"
					md-width="100%"
				>
					<Text
						font="400 24px --fontFamily-googleInter"
						padding="32px 32px 32px 32px"
						background="#ffedfc"
						border-width="16px"
						border-radius="16px"
						md-width="100%"
					>
						<Strong>
							Shared Workspaces
						</Strong>
						:
						<br />
						<br />
						{" "}Create project-specific workspaces where teams can collaborate, share files, and track progress together.
					</Text>
				</Box>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				margin="64px 0px 32px 0px"
				padding="0px 48px 0px 0"
				justify-content="space-around"
				md-justify-content="center"
				md-flex-direction="column"
				md-padding="0px 0 0px 0"
			>
				<Box
					min-width="100px"
					min-height="100px"
					padding="0px 0px 0px 0"
					width="65%"
					md-width="100%"
				>
					<Text
						font="400 24px --fontFamily-googleInter"
						padding="32px 32px 32px 32px"
						background="#f7edff"
						border-width="16px"
						border-radius="16px"
					>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						/>
						<Strong />
						<Strong>
							Team Mentions & Notifications
						</Strong>
						:
						<br />
						<br />
						{" "}Tag team members directly in tasks or discussions, and ensure they receive instant notifications to stay aligned.
					</Text>
				</Box>
				<Image
					src="https://uploads.quarkly.io/6753618ae778710018d57544/images/undraw_team_spirit_re_yl1v.png?v=2024-12-08T02:08:26.643Z"
					display="block"
					width="300px"
					md-height="150px"
					md-width="100%"
					md-margin="32px 0px 0px 0px"
					srcSet="https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_team_spirit_re_yl1v.png?v=2024-12-08T02%3A08%3A26.643Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_team_spirit_re_yl1v.png?v=2024-12-08T02%3A08%3A26.643Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_team_spirit_re_yl1v.png?v=2024-12-08T02%3A08%3A26.643Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_team_spirit_re_yl1v.png?v=2024-12-08T02%3A08%3A26.643Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_team_spirit_re_yl1v.png?v=2024-12-08T02%3A08%3A26.643Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_team_spirit_re_yl1v.png?v=2024-12-08T02%3A08%3A26.643Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_team_spirit_re_yl1v.png?v=2024-12-08T02%3A08%3A26.643Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
			<Button
				margin="16px 0px 0px 0px"
				background="#543ae7"
				type="link"
				text-align="center"
				align-self="center"
				width="fit-content"
				padding="8px 24px 8px 24px"
				font="normal 400 16px/1.5 --fontFamily-googleInter"
				border-radius="4px"
				md-margin="42px 0px 0px 0px"
				md-width="80%"
				text-decoration-line="initial"
				href="/features"
			>
				View more
			</Button>
		</Section>
		<Section padding="120px 0 140px 0" sm-padding="80px 0 90px 0" quarkly-title="Statistics-4">
			<Text margin="0px 0px 0px 0px" font="normal 600 42px/1.2 --fontFamily-googleInter">
				Our mission
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				margin="50px 0px 0px 0px"
				md-flex-direction="column"
				sm-margin="30px 0px 0px 0px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					width="60%"
					margin="0px 10% 0px 0px"
					padding="4px 0px 0px 0px"
					md-width="100%"
					md-margin="0px 10% 50px 0px"
					sm-padding="0 0px 0px 0px"
					sm-margin="0px 10% 35px 0px"
				>
					<Text margin="0px 0px 25px 0px" font="normal 300 25px/1.5 --fontFamily-googleInter" color="#35363a">
						At FlowStack, our mission is to deliver innovative solutions that empower our customers while fostering a positive impact on society. We are committed to sustainability, diversity, and inclusivity, ensuring these values guide every aspect of our operations.
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 300 18px/1.5 --fontFamily-googleInter" color="#828282">
						We achieve this by continuously enhancing our products and services, cultivating creativity and collaboration, and adhering to the highest ethical standards. Our ultimate goal is to lead the industry with excellence, earning the trust and respect of our customers, employees, and stakeholders through our unwavering commitment to social responsibility.
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px" md-align-self="center">
					<Text margin="0px 0px 0px 0px" font="normal 700 46px/1.2 --fontFamily-sans" sm-font="normal 700 42px/1.2 --fontFamily-sans">
						35.000+
					</Text>
					<Text margin="8px 0px 20px 0px" font="normal 300 18px/1.5 --fontFamily-sansHelvetica" color="#35363a">
						Projects managed daily on our platform
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 700 46px/1.2 --fontFamily-sans" sm-font="normal 700 42px/1.2 --fontFamily-sans">
						99%
					</Text>
					<Text margin="8px 0px 20px 0px" font="normal 300 18px/1.5 --fontFamily-sansHelvetica" color="#35363a">
						Customer satisfaction rate
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 700 46px/1.2 --fontFamily-sans" sm-font="normal 700 42px/1.2 --fontFamily-sans">
						10.000+
					</Text>
					<Text margin="8px 0px 20px 0px" font="normal 300 18px/1.5 --fontFamily-sansHelvetica" color="#35363a">
						Teams collaborating globally with our tools
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="90px 0 100px 0" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/blurred-premium-violet-color-abstract-wallpaper.jpg?v=2023-04-27T14:14:02.129Z) 0% 0% /cover repeat scroll padding-box" quarkly-title="Reviews-4">
			<Text
				margin="0px 0px 20px 0px"
				font="normal 500 20px/1.5 --fontFamily-sansHelvetica"
				color="--indigo"
				lg-margin="0px 0px 20px 0px"
				text-align="center"
			>
				Testimonials
			</Text>
			<Text margin="0px 0px 70px 0px" font="normal 600 46px/1.2 --fontFamily-sans" text-align="center" md-margin="0px 0px 50px 0px">
				What customers say about us
			</Text>
			<Box min-width="100px" min-height="100px" display="flex" lg-flex-direction="column">
				<Box
					min-width="100px"
					min-height="100px"
					width="25%"
					lg-width="100%"
					lg-display="flex"
					md-flex-direction="column"
					flex-direction="column"
					lg-flex-direction="row"
				>
					<Box
						min-width="100px"
						min-height="100px"
						padding="20px 20px 20px 20px"
						background="#f3f3f7"
						border-radius="8px"
						box-shadow="--m"
						display="flex"
						flex-direction="column"
						lg-margin="0px 0 25px 0px"
						sm-padding="20px 15px 20px 15px"
						margin="0px 5px 25px 0px"
						justify-content="space-between"
					>
						<Box min-width="100px" min-height="100px">
							<Text margin="0px 0px 18px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1">
								FlowTrack has completely transformed the way we manage our projects. The automation features save us hours every week, and the team loves how easy it is to use!
							</Text>
						</Box>
						<Box
							min-width="100px"
							min-height="100px"
							display="flex"
							align-items="center"
							md-min-width={0}
							md-min-height={0}
						>
							<Image
								src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/13q.jpg?v=2023-04-18T18:57:20.417Z"
								display="block"
								margin="0px 18px 0px 0px"
								width="60px"
								height="60px"
								border-radius="50%"
								border-width="1px"
								border-style="solid"
								border-color="#b0b7bb"
								object-fit="cover"
								srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/13q.jpg?v=2023-04-18T18%3A57%3A20.417Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/13q.jpg?v=2023-04-18T18%3A57%3A20.417Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/13q.jpg?v=2023-04-18T18%3A57%3A20.417Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/13q.jpg?v=2023-04-18T18%3A57%3A20.417Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/13q.jpg?v=2023-04-18T18%3A57%3A20.417Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/13q.jpg?v=2023-04-18T18%3A57%3A20.417Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/13q.jpg?v=2023-04-18T18%3A57%3A20.417Z&quality=85&w=3200 3200w"
								sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
							<Box min-width="10px" min-height="10px">
								<Text margin="0px 0px 7px 0px" font="normal 600 17px/1.5 --fontFamily-sans">
									Adam Luis
								</Text>
								<Text margin="0px 0px 0px 0px" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" color="#676d73">
									@adamluis
								</Text>
							</Box>
						</Box>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						padding="20px 20px 20px 20px"
						background="#f3f3f7"
						border-radius="8px"
						box-shadow="--m"
						display="flex"
						flex-direction="column"
						lg-margin="0px 20px 25px 20px"
						sm-padding="20px 15px 20px 15px"
						margin="0px 5px 25px 0px"
						md-margin="0px 0 25px 0"
						justify-content="space-between"
					>
						<Box min-width="100px" min-height="100px">
							<Text margin="0px 0px 18px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1">
								The customizable dashboards are a game-changer. I can track everything I need in one place, and it has improved my productivity significantly.
							</Text>
						</Box>
						<Box
							min-width="100px"
							min-height="100px"
							display="flex"
							align-items="center"
							md-min-width={0}
							md-min-height={0}
						>
							<Image
								src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21:12:16.116Z"
								display="block"
								margin="0px 18px 0px 0px"
								width="60px"
								height="60px"
								border-radius="50%"
								border-width="1px"
								border-style="solid"
								border-color="#b0b7bb"
								object-fit="cover"
								srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21%3A12%3A16.116Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21%3A12%3A16.116Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21%3A12%3A16.116Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21%3A12%3A16.116Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21%3A12%3A16.116Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21%3A12%3A16.116Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21%3A12%3A16.116Z&quality=85&w=3200 3200w"
								sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
							<Box min-width="10px" min-height="10px">
								<Text margin="0px 0px 7px 0px" font="normal 600 17px/1.5 --fontFamily-sans">
									Michael Lee
								</Text>
								<Text margin="0px 0px 0px 0px" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" color="#676d73">
									@michaellee
								</Text>
							</Box>
						</Box>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						padding="20px 20px 20px 20px"
						background="#f3f3f7"
						border-radius="8px"
						box-shadow="--m"
						display="flex"
						flex-direction="column"
						lg-margin="0px 0 25px 0px"
						sm-padding="20px 15px 20px 15px"
						margin="0px 5px 0px 0px"
						justify-content="space-between"
					>
						<Box min-width="100px" min-height="100px">
							<Text margin="0px 0px 18px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1">
								FlowTrack made it easy to collaborate with our remote team. Real-time updates and notifications keep everyone on the same page, no matter where they are.
							</Text>
						</Box>
						<Box
							min-width="100px"
							min-height="100px"
							display="flex"
							align-items="center"
							md-min-width={0}
							md-min-height={0}
						>
							<Image
								src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/9q.jpg?v=2023-04-18T18:57:05.682Z"
								display="block"
								margin="0px 18px 0px 0px"
								width="60px"
								height="60px"
								border-radius="50%"
								border-width="1px"
								border-style="solid"
								border-color="#b0b7bb"
								object-fit="cover"
								srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/9q.jpg?v=2023-04-18T18%3A57%3A05.682Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/9q.jpg?v=2023-04-18T18%3A57%3A05.682Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/9q.jpg?v=2023-04-18T18%3A57%3A05.682Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/9q.jpg?v=2023-04-18T18%3A57%3A05.682Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/9q.jpg?v=2023-04-18T18%3A57%3A05.682Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/9q.jpg?v=2023-04-18T18%3A57%3A05.682Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/9q.jpg?v=2023-04-18T18%3A57%3A05.682Z&quality=85&w=3200 3200w"
								sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
							<Box min-width="10px" min-height="10px">
								<Text margin="0px 0px 7px 0px" font="normal 600 17px/1.5 --fontFamily-sans">
									Carlos Odis
								</Text>
								<Text margin="0px 0px 0px 0px" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" color="#676d73">
									@carlosodis
								</Text>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box min-width="100px" min-height="100px" width="50%" lg-width="100%">
					<Box
						min-width="100px"
						min-height="100px"
						padding="30px 0 10px 0"
						background="#f3f3f7"
						border-radius="8px"
						box-shadow="--m"
						margin="0px 20px 25px 20px"
						display="flex"
						flex-direction="column"
						justify-content="space-between"
						lg-margin="0px 0 25px 0px"
						md-padding="20px 0 10px 0"
					>
						<Box min-width="100px" min-height="100px">
							<Text
								margin="0px 0px 28px 0px"
								font="normal 400 20px/1.5 --fontFamily-sansHelvetica"
								color="--darkL1"
								padding="0px 30px 0px 30px"
								md-padding="0px 20px 0px 20px"
								md-margin="0px 0px 25px 0px"
							>
								FlowTrack’s advanced reporting tools have given us valuable insights into our workflows. We’ve identified bottlenecks and improved efficiency across the board.
							</Text>
						</Box>
						<Box
							min-width="100px"
							min-height="100px"
							display="flex"
							justify-content="space-between"
							align-items="center"
							padding="0px 30px 0px 30px"
							border-width="1px 0 0 0"
							border-style="solid"
							border-color="--color-lightD2"
							md-padding="0px 20px 0px 20px"
							md-min-width={0}
							md-min-height={0}
						>
							<Box min-width="100px" min-height="100px" display="flex" align-items="center">
								<Image
									src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21:12:01.188Z"
									display="block"
									margin="0px 18px 0px 0px"
									width="60px"
									height="60px"
									border-radius="50%"
									border-width="1px"
									border-style="solid"
									border-color="#b0b7bb"
									object-fit="cover"
									srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=3200 3200w"
									sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
								/>
								<Box min-width="10px" min-height="10px">
									<Text margin="0px 0px 7px 0px" font="normal 600 17px/1.5 --fontFamily-sans">
										Maria Davidson
									</Text>
									<Text margin="0px 0px 0px 0px" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" color="#676d73">
										@mariadavid
									</Text>
								</Box>
							</Box>
						</Box>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="grid"
						grid-template-columns="repeat(2, 1fr)"
						grid-template-rows="repeat(2, 1fr)"
						md-grid-template-columns="1fr"
						md-grid-template-rows="auto"
					>
						<Box
							min-width="100px"
							min-height="100px"
							padding="20px 20px 20px 20px"
							background="#f3f3f7"
							border-radius="8px"
							box-shadow="--m"
							margin="0px 12px 25px 20px"
							display="flex"
							flex-direction="column"
							lg-margin="0px 10px 25px 0px"
							sm-margin="0px 0 25px 0px"
							md-margin="0px 0 25px 0px"
							justify-content="space-between"
						>
							<Box min-width="100px" min-height="100px">
								<Text margin="0px 0px 18px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1">
									We’ve tried other tools, but FlowTrack is by far the most intuitive. The onboarding process was seamless, and the customer support is always helpful.
								</Text>
							</Box>
							<Box
								min-width="100px"
								min-height="100px"
								display="flex"
								align-items="center"
								md-min-width={0}
								md-min-height={0}
							>
								<Image
									src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20:54:40.886Z"
									display="block"
									margin="0px 18px 0px 0px"
									width="60px"
									height="60px"
									border-radius="50%"
									border-width="1px"
									border-style="solid"
									border-color="#b0b7bb"
									object-fit="cover"
									srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=3200 3200w"
									sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
								/>
								<Box min-width="10px" min-height="10px">
									<Text margin="0px 0px 7px 0px" font="normal 600 17px/1.5 --fontFamily-sans">
										Leslie Alexander
									</Text>
									<Text margin="0px 0px 0px 0px" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" color="#676d73">
										@lesliealexander
									</Text>
								</Box>
							</Box>
						</Box>
						<Box
							min-width="100px"
							min-height="100px"
							padding="20px 20px 20px 20px"
							background="#f3f3f7"
							border-radius="8px"
							box-shadow="--m"
							margin="0px 20px 25px 12px"
							display="flex"
							flex-direction="column"
							lg-margin="0px 0 25px 10px"
							sm-margin="0px 0 25px 0"
							md-margin="0px 0 25px 0"
							justify-content="space-between"
						>
							<Box min-width="100px" min-height="100px">
								<Text margin="0px 0px 18px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1">
									I love how FlowTrack integrates with our existing tools. It has become the central hub for all our team’s activities, and the learning curve was minimal.
								</Text>
							</Box>
							<Box
								min-width="100px"
								min-height="100px"
								display="flex"
								align-items="center"
								md-min-width={0}
								md-min-height={0}
							>
								<Image
									src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21:07:08.834Z"
									display="block"
									margin="0px 18px 0px 0px"
									width="60px"
									height="60px"
									border-radius="50%"
									border-width="1px"
									border-style="solid"
									border-color="#b0b7bb"
									object-fit="cover"
									srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21%3A07%3A08.834Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21%3A07%3A08.834Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21%3A07%3A08.834Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21%3A07%3A08.834Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21%3A07%3A08.834Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21%3A07%3A08.834Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21%3A07%3A08.834Z&quality=85&w=3200 3200w"
									sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
								/>
								<Box min-width="10px" min-height="10px">
									<Text margin="0px 0px 7px 0px" font="normal 600 17px/1.5 --fontFamily-sans">
										Melisa Williams
									</Text>
									<Text margin="0px 0px 0px 0px" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" color="#676d73">
										@melisawilliams
									</Text>
								</Box>
							</Box>
						</Box>
						<Box
							min-width="100px"
							min-height="100px"
							padding="20px 20px 20px 20px"
							background="#f3f3f7"
							border-radius="8px"
							box-shadow="--m"
							margin="0px 12px 0px 20px"
							display="flex"
							flex-direction="column"
							lg-margin="0px 10px 25px 0px"
							sm-margin="0px 0 25px 0px"
							md-margin="0px 0 25px 0px"
							justify-content="space-between"
						>
							<Box min-width="100px" min-height="100px">
								<Text margin="0px 0px 18px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1">
									The analytics and reporting tools in FlowTrack are incredibly detailed. They’ve helped us make data-driven decisions and improved our overall efficiency.
								</Text>
							</Box>
							<Box
								min-width="100px"
								min-height="100px"
								display="flex"
								align-items="center"
								md-min-width={0}
								md-min-height={0}
							>
								<Image
									src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21:06:57.036Z"
									display="block"
									margin="0px 18px 0px 0px"
									width="60px"
									height="60px"
									border-radius="50%"
									border-width="1px"
									border-style="solid"
									border-color="#b0b7bb"
									object-fit="cover"
									srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21%3A06%3A57.036Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21%3A06%3A57.036Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21%3A06%3A57.036Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21%3A06%3A57.036Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21%3A06%3A57.036Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21%3A06%3A57.036Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21%3A06%3A57.036Z&quality=85&w=3200 3200w"
									sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
								/>
								<Box min-width="10px" min-height="10px">
									<Text margin="0px 0px 7px 0px" font="normal 600 17px/1.5 --fontFamily-sans">
										Alex White
									</Text>
									<Text margin="0px 0px 0px 0px" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" color="#676d73">
										@alexwhite
									</Text>
								</Box>
							</Box>
						</Box>
						<Box
							min-width="100px"
							min-height="100px"
							padding="20px 20px 20px 20px"
							background="#f3f3f7"
							border-radius="8px"
							box-shadow="--m"
							margin="0px 20px 0px 12px"
							display="flex"
							flex-direction="column"
							lg-margin="0px 0 25px 10px"
							sm-margin="0px 0 25px 0"
							md-margin="0px 0 25px 0"
							justify-content="space-between"
						>
							<Box min-width="100px" min-height="100px">
								<Text margin="0px 0px 18px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1">
									Customer support is phenomenal! Whenever we’ve had an issue or a question, their team has been quick to respond and resolve it.
								</Text>
							</Box>
							<Box
								min-width="100px"
								min-height="100px"
								display="flex"
								align-items="center"
								md-min-width={0}
								md-min-height={0}
							>
								<Image
									src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/15q.jpg?v=2023-04-17T21:06:45.941Z"
									display="block"
									margin="0px 18px 0px 0px"
									width="60px"
									height="60px"
									border-radius="50%"
									border-width="1px"
									border-style="solid"
									border-color="#b0b7bb"
									object-fit="cover"
									srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/15q.jpg?v=2023-04-17T21%3A06%3A45.941Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/15q.jpg?v=2023-04-17T21%3A06%3A45.941Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/15q.jpg?v=2023-04-17T21%3A06%3A45.941Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/15q.jpg?v=2023-04-17T21%3A06%3A45.941Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/15q.jpg?v=2023-04-17T21%3A06%3A45.941Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/15q.jpg?v=2023-04-17T21%3A06%3A45.941Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/15q.jpg?v=2023-04-17T21%3A06%3A45.941Z&quality=85&w=3200 3200w"
									sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
								/>
								<Box min-width="10px" min-height="10px">
									<Text margin="0px 0px 7px 0px" font="normal 600 17px/1.5 --fontFamily-sans">
										Mike Affleck
									</Text>
									<Text margin="0px 0px 0px 0px" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" color="#676d73">
										@mikeaffleck
									</Text>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					width="25%"
					lg-width="100%"
					lg-display="flex"
					md-flex-direction="column"
				>
					<Box
						min-width="100px"
						min-height="100px"
						padding="20px 20px 20px 20px"
						background="#f3f3f7"
						border-radius="8px"
						box-shadow="--m"
						margin="0px 0 25px 5px"
						display="flex"
						flex-direction="column"
						lg-margin="0px 0 0 0px"
						sm-padding="20px 15px 20px 15px"
						md-margin="0 0 25px 0"
						justify-content="space-between"
					>
						<Box min-width="100px" min-height="100px">
							<Text margin="0px 0px 18px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1">
								Our productivity has skyrocketed since switching to FlowTrack. The task automation alone has saved us so much time, and our projects are more organized than ever.
							</Text>
						</Box>
						<Box
							min-width="100px"
							min-height="100px"
							display="flex"
							align-items="center"
							md-min-width={0}
							md-min-height={0}
						>
							<Image
								src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/16q.jpg?v=2023-04-18T18:57:30.439Z"
								display="block"
								margin="0px 18px 0px 0px"
								width="60px"
								height="60px"
								border-radius="50%"
								border-width="1px"
								border-style="solid"
								border-color="#b0b7bb"
								object-fit="cover"
								srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/16q.jpg?v=2023-04-18T18%3A57%3A30.439Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/16q.jpg?v=2023-04-18T18%3A57%3A30.439Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/16q.jpg?v=2023-04-18T18%3A57%3A30.439Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/16q.jpg?v=2023-04-18T18%3A57%3A30.439Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/16q.jpg?v=2023-04-18T18%3A57%3A30.439Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/16q.jpg?v=2023-04-18T18%3A57%3A30.439Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/16q.jpg?v=2023-04-18T18%3A57%3A30.439Z&quality=85&w=3200 3200w"
								sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
							<Box min-width="10px" min-height="10px">
								<Text margin="0px 0px 7px 0px" font="normal 600 17px/1.5 --fontFamily-sans">
									Jane Adams
								</Text>
								<Text margin="0px 0px 0px 0px" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" color="#676d73">
									@janeadams
								</Text>
							</Box>
						</Box>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						padding="20px 20px 20px 20px"
						background="#f3f3f7"
						border-radius="8px"
						box-shadow="--m"
						margin="0px 0 25px 5px"
						display="flex"
						flex-direction="column"
						lg-margin="0px 20px 0 20px"
						sm-padding="20px 15px 20px 15px"
						md-margin="0 0 25px 0"
						justify-content="space-between"
					>
						<Box min-width="100px" min-height="100px">
							<Text margin="0px 0px 18px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1">
								FlowTrack is worth every penny. The collaborative features have improved communication within our team and made deadlines much easier to meet.
							</Text>
						</Box>
						<Box
							min-width="100px"
							min-height="100px"
							display="flex"
							align-items="center"
							md-min-width={0}
							md-min-height={0}
						>
							<Image
								src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/3q.jpg?v=2023-04-17T22:37:36.273Z"
								display="block"
								margin="0px 18px 0px 0px"
								width="60px"
								height="60px"
								border-radius="50%"
								border-width="1px"
								border-style="solid"
								border-color="#b0b7bb"
								object-fit="cover"
								srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/3q.jpg?v=2023-04-17T22%3A37%3A36.273Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/3q.jpg?v=2023-04-17T22%3A37%3A36.273Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/3q.jpg?v=2023-04-17T22%3A37%3A36.273Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/3q.jpg?v=2023-04-17T22%3A37%3A36.273Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/3q.jpg?v=2023-04-17T22%3A37%3A36.273Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/3q.jpg?v=2023-04-17T22%3A37%3A36.273Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/3q.jpg?v=2023-04-17T22%3A37%3A36.273Z&quality=85&w=3200 3200w"
								sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
							<Box min-width="10px" min-height="10px">
								<Text margin="0px 0px 7px 0px" font="normal 600 17px/1.5 --fontFamily-sans">
									Tom Paul
								</Text>
								<Text margin="0px 0px 0px 0px" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" color="#676d73">
									@tompaul
								</Text>
							</Box>
						</Box>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						padding="20px 20px 20px 20px"
						background="#f3f3f7"
						border-radius="8px"
						box-shadow="--m"
						margin="0px 0 0px 5px"
						display="flex"
						flex-direction="column"
						lg-margin="0px 0 0 0px"
						sm-padding="20px 15px 20px 15px"
						justify-content="space-between"
					>
						<Box min-width="100px" min-height="100px">
							<Text margin="0px 0px 18px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1">
								The user interface is clean and easy to navigate. Even team members who are not tech-savvy have adopted it quickly, which is a huge plus for us.
							</Text>
						</Box>
						<Box
							min-width="100px"
							min-height="100px"
							display="flex"
							align-items="center"
							md-min-width={0}
							md-min-height={0}
						>
							<Image
								src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/6q.jpg?v=2023-04-18T18:56:44.939Z"
								display="block"
								margin="0px 18px 0px 0px"
								width="60px"
								height="60px"
								border-radius="50%"
								border-width="1px"
								border-style="solid"
								border-color="#b0b7bb"
								object-fit="cover"
								srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/6q.jpg?v=2023-04-18T18%3A56%3A44.939Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/6q.jpg?v=2023-04-18T18%3A56%3A44.939Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/6q.jpg?v=2023-04-18T18%3A56%3A44.939Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/6q.jpg?v=2023-04-18T18%3A56%3A44.939Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/6q.jpg?v=2023-04-18T18%3A56%3A44.939Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/6q.jpg?v=2023-04-18T18%3A56%3A44.939Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/6q.jpg?v=2023-04-18T18%3A56%3A44.939Z&quality=85&w=3200 3200w"
								sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
							/>
							<Box min-width="10px" min-height="10px">
								<Text margin="0px 0px 7px 0px" font="normal 600 17px/1.5 --fontFamily-sans">
									Sarah Cook
								</Text>
								<Text margin="0px 0px 0px 0px" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" color="#676d73">
									@sarahcook
								</Text>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="120px 0 120px 0" lg-margin="0 0 0 0" lg-padding="80px 0 80px 0" quarkly-title="Price-10">
			<Text
				margin="0px 0px 20px 0px"
				font="normal 600 22px/1.5 --fontFamily-sansTrebuchet"
				color="#543ae7"
				lg-margin="0px 0px 20px 0px"
				text-align="center"
			>
				Pricing
			</Text>
			<Text
				margin="0px 0px 20px 0px"
				font="normal 600 46px/1.2 --fontFamily-sans"
				text-align="center"
				md-margin="0px 0px 50px 0px"
				width="700p"
				align-self="center"
				color="--darkL1"
				sm-margin="0px 0px 30px 0px"
			>
				Elevate Your Business with Plans Tailored to Your Needs!
			</Text>
			<Text
				margin="0px 0px 70px 0px"
				text-align="center"
				font="normal 300 20px/1.5 --fontFamily-sansTrebuchet"
				width="700px"
				align-self="center"
				md-width="100%"
				color="#80868a"
				md-margin="0px 0px 60px 0px"
				sm-margin="0px 0px 40px 0px"
			>
				Elevate Your Business with Plans Tailored to Your Needs!
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				lg-margin="0px 0 0px 0"
				md-flex-direction="column"
				border-width="1px"
				lg-flex-direction="column"
			>
				<Box
					min-width="100px"
					min-height="100px"
					padding="36px 36px 26px 36px"
					border-color="#dadbe2"
					display="flex"
					flex-direction="column"
					position="relative"
					z-index="2"
					width="33%"
					lg-width="100%"
					lg-padding="30px 30px 30px 30px"
					lg-align-items="stretch"
					sm-padding="30px 15px 40px 15px"
					font="normal 300 20px/1.5 --fontFamily-sansHelvetica"
					md-border-width="1px"
					md-padding="40px 30px 40px 30px"
					md-align-items="stretch"
					justify-content="space-between"
					border-width="1px 0 1px 1px"
					border-style="solid"
					margin="40px 0px 0px 0px"
					border-radius="25px 0 0 25px"
					lg-margin="0 0px 40px 0px"
					lg-border-radius="25px"
					lg-border-width="1px"
				>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						flex-direction="column"
						margin="0px 0px 35px 0px"
					>
						<Text
							margin="0px 0px 15px 0px"
							font="normal 600 18px/1.5 --fontFamily-sansTrebuchet"
							color="--darkL1"
							lg-margin="0px 0px 20px 0px"
							sm-margin="0px 0px 10px 0px"
						>
							Basic Plan
						</Text>
						<Text margin="0px 0px 25px 0px" font="normal 300 17px/1.5 --fontFamily-sansTrebuchet" color="#80868a">
							Variants: Monthly, Annual
						</Text>
						<Text margin="0px 0px 20px 0px" font="normal 300 17px/1.5 --fontFamily-sansTrebuchet" color="#80868a">
							<Span
								font="normal 700 46px/1.2 --fontFamily-sans"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
								color="--darkL1"
							>
								$20
							</Span>
							{" "}/ month
						</Text>
						<Box min-width="100px" min-height="100px">
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								align-items="center"
								border-color="#bec3ca"
								margin="0 0 8px 0"
							>
								<Icon
									category="io"
									icon={IoIosCheckmarkCircle}
									size="25px"
									color="#543ae7"
									margin="0px 8px 0px 0px"
								/>
								<Text margin="0px 0px 0px 0px" font="normal 300 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
									basic analytics
								</Text>
							</Box>
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								align-items="center"
								border-color="#bec3ca"
								margin="0 0 8px 0"
							>
								<Icon
									category="io"
									icon={IoIosCheckmarkCircle}
									size="25px"
									color="#543ae7"
									margin="0px 8px 0px 0px"
								/>
								<Text margin="0px 0px 0px 0px" font="normal 300 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
									limited storage
								</Text>
							</Box>
							<Box min-width="10px" min-height="10px" display="flex" align-items="center">
								<Icon
									category="io"
									icon={IoIosCheckmarkCircle}
									size="25px"
									color="#543ae7"
									margin="0px 8px 0px 0px"
								/>
								<Text margin="0px 0px 0px 0px" font="normal 300 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
									support via email
								</Text>
							</Box>
						</Box>
					</Box>
					<Button
						color="#543ae7"
						border-color="#543ae7"
						border-radius="4px"
						font="normal 400 17px/1.5 --fontFamily-sansHelvetica"
						margin="0px 0px 35px 0px"
						sm-margin="0px 0px 15px 0px"
						background="rgba(84, 58, 231, 0)"
						border-width="1px"
						border-style="solid"
					>
						Buy plan
					</Button>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					padding="36px 36px 26px 36px"
					border-color="#dadbe2"
					display="flex"
					flex-direction="column"
					position="relative"
					z-index="1"
					width="33%"
					lg-width="100%"
					lg-padding="30px 30px 30px 30px"
					lg-align-items="stretch"
					md-padding="40px 30px 0 30px"
					md-align-items="stretch"
					sm-padding="30px 15px 30px 15px"
					justify-content="space-between"
					border-width="1px"
					border-style="solid"
					border-radius="25px 25px 0 0"
					lg-margin="0px 0px 40px 0px"
					lg-border-radius="25px"
				>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						flex-direction="column"
						margin="0px 0px 35px 0px"
					>
						<Box
							min-width="10px0"
							min-height={0}
							display="flex"
							justify-content="space-between"
							align-items="center"
							margin="0px 0px 15px 0px"
						>
							<Text font="normal 600 18px/1.5 --fontFamily-sansTrebuchet" color="#543ae7" lg-margin="0px 0px 20px 0px" margin="0 5px 0 0px">
								Standard Plan
							</Text>
							<Text
								margin="0px 0px 0 0px"
								font="normal 300 14px/1.5 --fontFamily-sansTrebuchet"
								color="#543ae7"
								lg-margin="0px 0px 20px 0px"
								padding="4px 8px 4px 8px"
								background="#ced1ff"
								border-radius="25px"
							>
								Most Popular
							</Text>
						</Box>
						<Text margin="0px 0px 25px 0px" font="normal 300 17px/1.5 --fontFamily-sansTrebuchet" color="#80868a">
							Variants: Monthly, Annual
						</Text>
						<Text margin="0px 0px 20px 0px" font="normal 300 17px/1.5 --fontFamily-sansTrebuchet" color="#80868a">
							<Span
								font="normal 700 46px/1.2 --fontFamily-sans"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
								color="--darkL1"
							>
								$30
							</Span>
							{" "}/ month
						</Text>
						<Box min-width="100px" min-height="100px">
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								align-items="center"
								border-color="#393341"
								margin="0 0 8px 0"
							>
								<Icon
									category="io"
									icon={IoIosCheckmarkCircle}
									size="25px"
									color="#543ae7"
									margin="0px 8px 0px 0px"
								/>
								<Text margin="0px 0px 0px 0px" font="normal 300 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
									including advanced analytics
								</Text>
							</Box>
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								align-items="center"
								border-color="#393341"
								margin="0 0 8px 0"
							>
								<Icon
									category="io"
									icon={IoIosCheckmarkCircle}
									size="25px"
									color="#543ae7"
									margin="0px 8px 0px 0px"
								/>
								<Text margin="0px 0px 0px 0px" font="normal 300 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
									unlimited storage
								</Text>
							</Box>
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								align-items="center"
								margin="0 0 8px 0"
								border-color="#bec3ca"
							>
								<Icon
									category="io"
									icon={IoIosCheckmarkCircle}
									size="25px"
									color="#543ae7"
									margin="0px 8px 0px 0px"
								/>
								<Text margin="0px 0px 0px 0px" font="normal 300 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
									API access
								</Text>
							</Box>
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								align-items="center"
								border-color="#bec3ca"
							>
								<Icon
									category="io"
									icon={IoIosCheckmarkCircle}
									size="25px"
									color="#543ae7"
									margin="0px 8px 0px 0px"
								/>
								<Text margin="0px 0px 0px 0px" font="normal 300 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
									custom branding
								</Text>
							</Box>
						</Box>
					</Box>
					<Button
						background="#543ae7"
						color="--light"
						border-color="--color-indigo"
						border-radius="4px"
						font="normal 400 17px/1.5 --fontFamily-sansHelvetica"
						margin="0px 0px 35px 0px"
					>
						Buy plan
					</Button>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					padding="36px 36px 26px 36px"
					border-color="#dadbe2"
					display="flex"
					flex-direction="column"
					position="relative"
					z-index="1"
					width="33%"
					lg-width="100%"
					lg-padding="30px 30px 30px 30px"
					lg-align-items="stretch"
					sm-padding="30px 15px 30px 15px"
					md-padding="40px 30px 40px 30px"
					md-align-items="stretch"
					justify-content="space-between"
					border-width="1px 1px 1px 0"
					border-style="solid"
					margin="40px 0px 0px 0px"
					border-radius="0 25px 25px 0"
					lg-margin="0 0px 0px 0px"
					lg-border-radius="25px"
					lg-border-width="1px"
				>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						flex-direction="column"
						lg-align-items="stretch"
						margin="0px 0px 35px 0px"
					>
						<Text
							margin="0px 0px 15px 0px"
							font="normal 600 18px/1.5 --fontFamily-sansTrebuchet"
							color="--darkL1"
							lg-margin="0px 0px 20px 0px"
							sm-margin="0px 0px 10px 0px"
						>
							Premium Plan
						</Text>
						<Text margin="0px 0px 25px 0px" font="normal 300 17px/1.5 --fontFamily-sansTrebuchet" color="#80868a">
							Variants: Monthly, Annual
						</Text>
						<Text margin="0px 0px 25px 0px" font="normal 300 17px/1.5 --fontFamily-sansTrebuchet" color="#80868a">
							<Span
								font="normal 700 46px/1.2 --fontFamily-sans"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
								color="--darkL1"
							>
								$55
							</Span>
							{" "}/ month
						</Text>
						<Box min-width="100px" min-height="100px">
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								align-items="center"
								border-color="#393341"
								margin="0 0 8px 0"
							>
								<Icon
									category="io"
									icon={IoIosCheckmarkCircle}
									size="25px"
									color="#543ae7"
									margin="0px 8px 0px 0px"
								/>
								<Text margin="0px 0px 0px 0px" font="normal 300 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
									including advanced analytics
								</Text>
							</Box>
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								align-items="center"
								border-color="#393341"
								margin="0 0 8px 0"
							>
								<Icon
									category="io"
									icon={IoIosCheckmarkCircle}
									size="25px"
									color="#543ae7"
									margin="0px 8px 0px 0px"
								/>
								<Text margin="0px 0px 0px 0px" font="normal 300 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
									unlimited storage
								</Text>
							</Box>
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								align-items="center"
								margin="0 0 8px 0"
								border-color="#bec3ca"
							>
								<Icon
									category="io"
									icon={IoIosCheckmarkCircle}
									size="25px"
									color="#543ae7"
									margin="0px 8px 0px 0px"
								/>
								<Text margin="0px 0px 0px 0px" font="normal 300 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
									API access
								</Text>
							</Box>
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								align-items="center"
								margin="0 0 8px 0"
								border-color="#bec3ca"
							>
								<Icon
									category="io"
									icon={IoIosCheckmarkCircle}
									size="25px"
									color="#543ae7"
									margin="0px 8px 0px 0px"
								/>
								<Text margin="0px 0px 0px 0px" font="normal 300 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
									custom branding
								</Text>
							</Box>
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								align-items="center"
								border-color="#bec3ca"
							>
								<Icon
									category="io"
									icon={IoIosCheckmarkCircle}
									size="25px"
									color="#543ae7"
									margin="0px 8px 0px 0px"
								/>
								<Text margin="0px 0px 0px 0px" font="normal 300 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
									priority support via email and phone
								</Text>
							</Box>
						</Box>
					</Box>
					<Button
						color="#543ae7"
						border-color="#543ae7"
						border-radius="4px"
						font="normal 400 17px/1.5 --fontFamily-sansHelvetica"
						margin="0px 0px 35px 0px"
						sm-margin="0px 0px 15px 0px"
						background="rgba(84, 58, 231, 0)"
						border-width="1px"
						border-style="solid"
					>
						Buy plan
					</Button>
				</Box>
			</Box>
			<Button
				margin="16px 0px 0px 0px"
				background="#543ae7"
				type="link"
				text-align="center"
				align-self="center"
				width="fit-content"
				padding="8px 24px 8px 24px"
				font="normal 400 16px/1.5 --fontFamily-googleInter"
				border-radius="4px"
				text-decoration-line="initial"
				href="/pricing"
			>
				View more
			</Button>
		</Section>
		<Section padding="40px 0 40px 0" sm-padding="60px 0 60px 0">
			<Box
				padding="40px 72px 40px 72px"
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Image%20%289%29.png?v=2021-08-26T14:56:08.732Z) 0% 0% /cover no-repeat scroll padding-box"
				border-radius="24px"
				margin="0px 0px 64px 0px"
				sm-padding="60px 36px 60px 36px"
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