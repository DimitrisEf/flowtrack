import React from "react";
import theme from "theme";
import { Theme, Text, Span, Icon, Box, Button, Image, Section, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import * as Components from "components";
import { IoIosCheckmarkCircle } from "react-icons/io";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"pricing"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Header />
		<Section padding="64px 0 32px 0" lg-margin="0 0 0 0" lg-padding="80px 0 80px 0" quarkly-title="Price-10">
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
				display="flex"
				justify-content="center"
				align-content="center"
				align-items="center"
				width="fit-content"
				align-self="center"
				margin="32px 0px 0px 0px"
				color="#acacac"
				background="rgba(0, 119, 204, 0)"
			>
				Compare Plans
				<Image
					src="https://uploads.quarkly.io/6753618ae778710018d57544/images/down-arrow-svgrepo-com.png?v=2024-12-08T14:49:38.198Z"
					display="block"
					width="10px"
					margin="0px 0px 0px 8px"
					border-color="#556e86"
					srcSet="https://smartuploads.quarkly.io/6753618ae778710018d57544/images/down-arrow-svgrepo-com.png?v=2024-12-08T14%3A49%3A38.198Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/down-arrow-svgrepo-com.png?v=2024-12-08T14%3A49%3A38.198Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/down-arrow-svgrepo-com.png?v=2024-12-08T14%3A49%3A38.198Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/down-arrow-svgrepo-com.png?v=2024-12-08T14%3A49%3A38.198Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/down-arrow-svgrepo-com.png?v=2024-12-08T14%3A49%3A38.198Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/down-arrow-svgrepo-com.png?v=2024-12-08T14%3A49%3A38.198Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/down-arrow-svgrepo-com.png?v=2024-12-08T14%3A49%3A38.198Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Button>
		</Section>
		<Box
			min-width="100px"
			min-height="100px"
			display="flex"
			margin="0px 0px 16px 0px"
			padding="0px 64px 32px 64px"
			justify-content="space-between"
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
				width="32%"
				lg-width="100%"
				lg-padding="30px 30px 30px 30px"
				lg-align-items="stretch"
				sm-padding="30px 15px 40px 15px"
				font="normal 300 20px/1.5 --fontFamily-sansHelvetica"
				md-border-width="1px"
				md-padding="40px 30px 40px 30px"
				md-align-items="stretch"
				justify-content="space-between"
				border-width="1px"
				border-style="solid"
				margin="40px 0px 0px 0px"
				border-radius="25px"
				lg-margin="0 0px 40px 0px"
				lg-border-radius="25px"
				lg-border-width="1px"
				height="100%"
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
					<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
					<Box min-width="100px" min-height="100px">
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							border-color="#bec3ca"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								basic analytics
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							border-color="#bec3ca"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								limited storage
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								support via email
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								10 projects max
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								1 GB file upload limit
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								Access to community forums for help
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								Integration with basic apps (e.g., Google Drive, Slack)
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								Task automation (limited to 3 automations per project)
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				padding="36px 36px 26px 36px"
				border-color="#dadbe2"
				display="flex"
				flex-direction="column"
				position="relative"
				z-index="2"
				lg-width="100%"
				lg-padding="30px 30px 30px 30px"
				lg-align-items="stretch"
				sm-padding="30px 15px 40px 15px"
				font="normal 300 20px/1.5 --fontFamily-sansHelvetica"
				md-border-width="1px"
				md-padding="40px 30px 40px 30px"
				md-align-items="stretch"
				justify-content="space-between"
				border-style="solid"
				margin="40px 0px 0px 0px"
				border-radius="25px"
				lg-margin="0 0px 40px 0px"
				lg-border-radius="25px"
				lg-border-width="1px"
				border-width="1px"
				height="100%"
				background="linear-gradient(180deg,rgba(84, 58, 231, 0.22) 0%,transparent 6.2%) 0 0 no-repeat"
				width="32%"
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
						text-shadow="0 0 16px #ffffff"
					>
						Standard Plan
					</Text>
					<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
					<Box min-width="100px" min-height="100px">
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							border-color="#bec3ca"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								including advanced analytics
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							border-color="#bec3ca"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								unlimited storage
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								API access
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								custom branding
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								Unlimited projects
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								10 GB file upload limit
								<br />
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								Priority email support (faster response times)
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								Advanced integrations (e.g., Microsoft Teams, Trello)
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								Workflow templates (pre-made templates to streamline tasks)
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								Basic time tracking (track time spent on tasks/projects)
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								User roles & permissions (assign different roles to team members)
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								Access to beta features before release
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				padding="36px 36px 26px 36px"
				border-color="#dadbe2"
				display="flex"
				flex-direction="column"
				position="relative"
				z-index="2"
				width="32%"
				lg-width="100%"
				lg-padding="30px 30px 30px 30px"
				lg-align-items="stretch"
				sm-padding="30px 15px 40px 15px"
				font="normal 300 20px/1.5 --fontFamily-sansHelvetica"
				md-border-width="1px"
				md-padding="40px 30px 40px 30px"
				md-align-items="stretch"
				justify-content="space-between"
				border-style="solid"
				margin="40px 0px 0px 0px"
				border-radius="25px"
				lg-margin="0 0px 40px 0px"
				lg-border-radius="25px"
				lg-border-width="1px"
				border-width="1px"
				height="fit-content"
				background="linear-gradient(180deg,rgba(84, 58, 231, 0.42) 0%,transparent 13.8%) 0 0 no-repeat"
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
						text-shadow="0 0 16px #ffffff"
					>
						Premium Plan
					</Text>
					<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
					<Box min-width="100px" min-height="100px">
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							border-color="#bec3ca"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								including advanced analytics
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							border-color="#bec3ca"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								unlimited storage
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								API access
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								custom branding
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								priority support via email and phone
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								50 GB file upload limit
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								Dedicated account manager
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								Enterprise-grade integrations (e.g., Salesforce, HubSpot, Zapier)
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								Custom workflows (design workflows tailored to your business)
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								Single Sign-On (SSO) for enhanced security
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								Advanced reporting (customizable, exportable reports)
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								Custom onboarding for your team (training sessions with a specialist)
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								SLA-backed uptime guarantee (e.g., 99.9% uptime)
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								Audit logs (track changes made by users for security)
							</Text>
						</Box>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0 0 12px 0"
						>
							<Icon
								category="io"
								icon={IoIosCheckmarkCircle}
								size="25px"
								color="#543ae7"
								margin="0px 8px 0px 0px"
							/>
							<Text margin="0px 0px 0px 0px" font="normal 500 17px/1.2 --fontFamily-sansTrebuchet" color="#80868a">
								Advanced data encryption and compliance tools (GDPR, SOC 2)
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
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