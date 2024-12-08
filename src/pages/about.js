import React from "react";
import theme from "theme";
import { Theme, Text, Strong, Section, Box, Image, Icon, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import * as Components from "components";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"about"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Header />
		<Section padding="64px 0 64px 0" sm-padding="120px 0 124px 0" quarkly-title="Hero-15">
			<Text
				margin="0px 0px 20px 0px"
				font="normal 600 22px/1.5 --fontFamily-sansTrebuchet"
				color="#543ae7"
				lg-margin="0px 0px 20px 0px"
				text-align="center"
			>
				About
			</Text>
			<Text
				margin="0px 0px 50px 0px"
				text-align="center"
				font="normal 700 64px/1.2 --fontFamily-sans"
				letter-spacing="1px"
				color="#522EE0"
				padding="0px 250px 0px 250px"
				lg-padding="0px 0 0px 0"
				md-font="normal 700 42px/1.2 --fontFamily-sans"
				sm-font="normal 700 36px/1.2 --fontFamily-sans"
			>
				Empowering Teams, Transforming Workflows
			</Text>
			<Text
				margin="0px 0px 0px 0px"
				color="#828282"
				text-align="center"
				padding="0px 250px 0px 250px"
				font="--lead"
				lg-padding="0px 0 0px 0"
			>
				At FlowTrack, we believe in simplifying the complex. Founded in 2008, we’ve dedicated ourselves to building tools that empower teams to collaborate, innovate, and achieve more—faster and smarter.
				<br />
				<br />
				Our mission is simple:{" "}
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
					to create solutions that eliminate bottlenecks, improve productivity, and drive success for businesses of all sizes.
				</Strong>
			</Text>
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
		<Section padding="120px 0 140px 0" sm-padding="80px 0 90px 0" quarkly-title="Statistics-4">
			<Text margin="0px 0px 0px 0px" font="normal 600 42px/1.2 --fontFamily-googleInter">
				Our vision
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
					margin="0px 0 0px 0px"
					padding="4px 0px 0px 0px"
					md-width="100%"
					md-margin="0px 10% 50px 0px"
					sm-padding="0 0px 0px 0px"
					sm-margin="0px 10% 35px 0px"
				>
					<Text margin="0px 0px 32px 0px" font="normal 400 32px/1.5 --fontFamily-googleInter" color="#35363a">
						At FlowStack, our mission is to deliver innovative solutions that empower our customers while fostering a positive impact on society. We are committed to sustainability, diversity, and inclusivity, ensuring these values guide every aspect of our operations.
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 300 24px/1.5 --fontFamily-googleInter" color="#828282">
						We achieve this by continuously enhancing our products and services, cultivating creativity and collaboration, and adhering to the highest ethical standards. Our ultimate goal is to lead the industry with excellence, earning the trust and respect of our customers, employees, and stakeholders through our unwavering commitment to social responsibility.
					</Text>
				</Box>
				<Image src="https://uploads.quarkly.io/6753618ae778710018d57544/images/undraw_starry_window_re_0v82.png?v=2024-12-08T15:20:36.929Z" display="block" srcSet="https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_starry_window_re_0v82.png?v=2024-12-08T15%3A20%3A36.929Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_starry_window_re_0v82.png?v=2024-12-08T15%3A20%3A36.929Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_starry_window_re_0v82.png?v=2024-12-08T15%3A20%3A36.929Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_starry_window_re_0v82.png?v=2024-12-08T15%3A20%3A36.929Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_starry_window_re_0v82.png?v=2024-12-08T15%3A20%3A36.929Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_starry_window_re_0v82.png?v=2024-12-08T15%3A20%3A36.929Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_starry_window_re_0v82.png?v=2024-12-08T15%3A20%3A36.929Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw" />
			</Box>
		</Section>
		<Section background="#ffffff" padding="90px 0 110px 0" quarkly-title="Team-10">
			<Text margin="0px 0px 0px 0px" color="#000000" text-align="center" font="600 48px --fontFamily-sans">
				Meet our team
			</Text>
			<Text text-align="center" color="#000000" font="300 22px --fontFamily-sansHelvetica">
				Our team culture is based on collaboration, open communication, and continuous learning.{" "}
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				margin="70px 0px 0px 0px"
				grid-template-columns="repeat(3, 1fr)"
				grid-template-rows="repeat(2, 1fr)"
				grid-gap="30px 30px"
				padding="0px 0 0px 0"
				lg-padding="0px 0 0px 0"
				lg-margin="50px 0px 0px 0px"
				lg-grid-gap="30px 20px"
				md-grid-template-columns="repeat(2, 1fr)"
				md-grid-template-rows="repeat(3, 1fr)"
				md-grid-gap="36px 25px"
				sm-grid-template-columns="1fr"
				sm-grid-gap="35px 0"
				flex-direction="row"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					sm-display="flex"
					sm-flex-direction="column"
					sm-align-items="center"
					padding="50px 50px 50px 50px"
					background="rgba(82, 46, 224, 0.06)"
					border-radius="25px"
					sm-padding="28px 28px 28px 28px"
					lg-padding="35px 35px 35px 35px"
					align-items="center"
				>
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20:54:40.886Z"
						display="block"
						width="220px"
						border-radius="50%"
						lg-width="180px"
						sm-width="100%"
						lg-max-width="100%"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="25px 0px 0px 0px" color="--dark" font="600 18px --fontFamily-sans" text-align="center">
						Leslie Alexander
					</Text>
					<Text margin="8px 0px 0px 0px" color="--grey" font="300 17px --fontFamily-sansHelvetica" text-align="center">
						Co-Founder / CEO
					</Text>
					<Box min-width="100px" display="flex" justify-content="center" margin="25px 0px 0px 0px">
						<LinkBox href="twitter.com" margin="0px 10px 0px 0px">
							<Icon
								category="fa"
								icon={FaTwitter}
								size="25px"
								color="--grey"
								hover-color="--darkL1"
							/>
						</LinkBox>
						<LinkBox href="linkedin.com">
							<Icon
								category="fa"
								icon={FaLinkedin}
								size="25px"
								color="--grey"
								hover-color="--darkL1"
							/>
						</LinkBox>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					sm-display="flex"
					sm-flex-direction="column"
					sm-align-items="center"
					display="flex"
					flex-direction="column"
					padding="50px 50px 50px 50px"
					background="rgba(82, 46, 224, 0.06)"
					border-radius="25px"
					sm-padding="28px 28px 28px 28px"
					lg-padding="35px 35px 35px 35px"
					align-items="center"
				>
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/11q.jpg?v=2023-04-17T21:11:40.598Z"
						display="block"
						width="220px"
						border-radius="50%"
						lg-width="180px"
						sm-width="100%"
						lg-max-width="100%"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/11q.jpg?v=2023-04-17T21%3A11%3A40.598Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/11q.jpg?v=2023-04-17T21%3A11%3A40.598Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/11q.jpg?v=2023-04-17T21%3A11%3A40.598Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/11q.jpg?v=2023-04-17T21%3A11%3A40.598Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/11q.jpg?v=2023-04-17T21%3A11%3A40.598Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/11q.jpg?v=2023-04-17T21%3A11%3A40.598Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/11q.jpg?v=2023-04-17T21%3A11%3A40.598Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="25px 0px 0px 0px" color="--dark" font="600 18px --fontFamily-sans" text-align="center">
						Michael Foster
					</Text>
					<Text margin="8px 0px 0px 0px" color="--grey" font="300 17px --fontFamily-sansHelvetica" text-align="center">
						Co-Founder / CO
					</Text>
					<Box min-width="100px" display="flex" justify-content="center" margin="25px 0px 0px 0px">
						<LinkBox href="twitter.com" margin="0px 10px 0px 0px">
							<Icon
								category="fa"
								icon={FaTwitter}
								size="25px"
								color="--grey"
								hover-color="--darkL1"
							/>
						</LinkBox>
						<LinkBox href="linkedin.com">
							<Icon
								category="fa"
								icon={FaLinkedin}
								size="25px"
								color="--grey"
								hover-color="--darkL1"
							/>
						</LinkBox>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					sm-display="flex"
					sm-flex-direction="column"
					sm-align-items="center"
					display="flex"
					flex-direction="column"
					color="--grey"
					padding="50px 50px 50px 50px"
					background="rgba(82, 46, 224, 0.06)"
					border-radius="25px"
					sm-padding="28px 28px 28px 28px"
					lg-padding="35px 35px 35px 35px"
					align-items="center"
				>
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21:06:57.036Z"
						display="block"
						width="220px"
						border-radius="50%"
						lg-width="180px"
						sm-width="100%"
						lg-max-width="100%"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21%3A06%3A57.036Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21%3A06%3A57.036Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21%3A06%3A57.036Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21%3A06%3A57.036Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21%3A06%3A57.036Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21%3A06%3A57.036Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21%3A06%3A57.036Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="25px 0px 0px 0px" color="--dark" font="600 18px --fontFamily-sans" text-align="center">
						Dries Vincent
					</Text>
					<Text margin="8px 0px 0px 0px" color="--grey" font="300 17px --fontFamily-sansHelvetica" text-align="center">
						Business Relations
					</Text>
					<Box min-width="100px" display="flex" justify-content="center" margin="25px 0px 0px 0px">
						<LinkBox href="twitter.com" margin="0px 10px 0px 0px">
							<Icon
								category="fa"
								icon={FaTwitter}
								size="25px"
								color="--grey"
								hover-color="--darkL1"
							/>
						</LinkBox>
						<LinkBox href="linkedin.com">
							<Icon
								category="fa"
								icon={FaLinkedin}
								size="25px"
								color="--grey"
								hover-color="--darkL1"
							/>
						</LinkBox>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					sm-display="flex"
					sm-flex-direction="column"
					sm-align-items="center"
					display="flex"
					flex-direction="column"
					padding="50px 50px 50px 50px"
					background="rgba(82, 46, 224, 0.06)"
					border-radius="25px"
					sm-padding="28px 28px 28px 28px"
					lg-padding="35px 35px 35px 35px"
					align-items="center"
				>
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21:07:08.834Z"
						display="block"
						width="220px"
						border-radius="50%"
						lg-width="180px"
						sm-width="100%"
						lg-max-width="100%"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21%3A07%3A08.834Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21%3A07%3A08.834Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21%3A07%3A08.834Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21%3A07%3A08.834Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21%3A07%3A08.834Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21%3A07%3A08.834Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21%3A07%3A08.834Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="25px 0px 0px 0px" color="--dark" font="600 18px --fontFamily-sans" text-align="center">
						Lindsay Walton
					</Text>
					<Text margin="8px 0px 0px 0px" color="--grey" font="300 17px --fontFamily-sansHelvetica" text-align="center">
						Front-end Developer
					</Text>
					<Box min-width="100px" display="flex" justify-content="center" margin="25px 0px 0px 0px">
						<LinkBox href="twitter.com" margin="0px 10px 0px 0px">
							<Icon
								category="fa"
								icon={FaTwitter}
								size="25px"
								color="--grey"
								hover-color="--darkL1"
							/>
						</LinkBox>
						<LinkBox href="linkedin.com">
							<Icon
								category="fa"
								icon={FaLinkedin}
								size="25px"
								color="--grey"
								hover-color="--darkL1"
							/>
						</LinkBox>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					sm-display="flex"
					sm-flex-direction="column"
					sm-align-items="center"
					display="flex"
					flex-direction="column"
					padding="50px 50px 50px 50px"
					background="rgba(82, 46, 224, 0.06)"
					border-radius="25px"
					sm-padding="28px 28px 28px 28px"
					lg-padding="35px 35px 35px 35px"
					align-items="center"
				>
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21:11:29.178Z"
						display="block"
						width="220px"
						border-radius="50%"
						lg-width="180px"
						sm-width="100%"
						lg-max-width="100%"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21%3A11%3A29.178Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21%3A11%3A29.178Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21%3A11%3A29.178Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21%3A11%3A29.178Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21%3A11%3A29.178Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21%3A11%3A29.178Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21%3A11%3A29.178Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="25px 0px 0px 0px" color="--dark" font="600 18px --fontFamily-sans" text-align="center">
						Courtney Henry
					</Text>
					<Text margin="8px 0px 0px 0px" color="--grey" font="300 17px --fontFamily-sansHelvetica" text-align="center">
						Designer
					</Text>
					<Box min-width="100px" display="flex" justify-content="center" margin="25px 0px 0px 0px">
						<LinkBox href="twitter.com" margin="0px 10px 0px 0px">
							<Icon
								category="fa"
								icon={FaTwitter}
								size="25px"
								color="--grey"
								hover-color="--darkL1"
							/>
						</LinkBox>
						<LinkBox href="linkedin.com">
							<Icon
								category="fa"
								icon={FaLinkedin}
								size="25px"
								color="--grey"
								hover-color="--darkL1"
							/>
						</LinkBox>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					sm-display="flex"
					sm-flex-direction="column"
					sm-align-items="center"
					display="flex"
					flex-direction="column"
					padding="50px 50px 50px 50px"
					background="rgba(82, 46, 224, 0.06)"
					border-radius="25px"
					sm-padding="28px 28px 28px 28px"
					lg-padding="35px 35px 35px 35px"
					align-items="center"
				>
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21:12:01.188Z"
						display="block"
						width="220px"
						border-radius="50%"
						lg-width="180px"
						sm-width="100%"
						lg-max-width="100%"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="25px 0px 0px 0px" color="--dark" font="600 18px --fontFamily-sans" text-align="center">
						Whitney Francis
					</Text>
					<Text margin="8px 0px 0px 0px" color="--grey" font="300 17px --fontFamily-sansHelvetica" text-align="center">
						Copywriter
					</Text>
					<Box min-width="100px" display="flex" justify-content="center" margin="25px 0px 0px 0px">
						<LinkBox href="twitter.com" margin="0px 10px 0px 0px">
							<Icon
								category="fa"
								icon={FaTwitter}
								size="25px"
								color="--grey"
								hover-color="--darkL1"
							/>
						</LinkBox>
						<LinkBox href="linkedin.com">
							<Icon
								category="fa"
								icon={FaLinkedin}
								size="25px"
								color="--grey"
								hover-color="--darkL1"
							/>
						</LinkBox>
					</Box>
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