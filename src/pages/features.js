import React from "react";
import theme from "theme";
import { Theme, Text, Strong, Box, Image, Section, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"features"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Header />
		<Section margin="0 0 0 0">
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
			<Text
				margin="0px 0px 0 0px"
				font="600 42px --fontFamily-googleInter"
				md-text-align="center"
				md-width="100%"
				md-margin="0px 0px 0 28"
				width="100%"
				text-align="center"
			>
				Advanced Collaboration
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				margin="32px 0px 32px 0px"
				md-flex-direction="column"
				md-align-items="center"
				md-align-self="center"
				align-items="center"
				justify-content="space-around"
				flex-direction="row"
				height="400px"
				lg-flex-direction="column"
				md-height="fit-content"
			>
				<Box
					min-width="100px"
					min-height="100px"
					width="48%"
					padding="32px 32px 32px 32px"
					md-width="100%"
					md-padding="16px 16px 16px 16px"
					background="#f5edff"
					border-radius="16px"
					display="flex"
					height="100%"
					flex-direction="column"
					flex-wrap="no-wrap"
					justify-content="center"
					lg-width="100%"
					lg-padding="16px 16px 16px 16px"
					lg-flex-direction="row"
					lg-margin="0px 0px 8px 0px"
					lg-height="110%"
					md-flex-direction="column"
				>
					<Text
						margin="0 0px 0px 0px"
						font="400 24px --fontFamily-googleInter"
						padding="0px 32px 32px 0px"
						background="rgba(255, 255, 255, 0)"
						border-width="16px"
						border-radius="16px"
						lg-height="100%"
						md-padding="0px 0 0 0px"
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
					<Components.Svg1
						display="flex"
						margin="0 0px 0px 0px"
						md-width="fit-content"
						md-height="40%"
						width="100%"
						height="fit-content"
						justify-content="center"
						lg-align-self="center"
						md-flex-direction="row"
						md-display="none"
					/>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					width="48%"
					padding="32px 32px 32px 32px"
					md-width="100%"
					md-padding="1 1 1 1"
					background="#f5edff"
					border-radius="16px"
					display="flex"
					height="100%"
					flex-direction="column"
					flex-wrap="no-wrap"
					justify-content="center"
					lg-width="100%"
					lg-padding="16px 16px 16px 16px"
					lg-flex-direction="row"
					lg-margin="8px 0px 0px 0px"
					lg-height="110%"
					md-flex-direction="column"
				>
					<Text
						font="400 24px --fontFamily-googleInter"
						padding="0px 32px 32px 0px"
						background="rgba(255, 237, 252, 0)"
						border-width="16px"
						border-radius="16px"
						md-width="100%"
						lg-height="100%"
						md-padding="0px 0 0 0px"
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
							Shared Workspaces
						</Strong>
						:
						<br />
						<br />
						{" "}Create project-specific workspaces where teams can collaborate, share files, and track progress together.
					</Text>
					<Image
						src="https://uploads.quarkly.io/6753618ae778710018d57544/images/undraw_updates_re_o5af.png?v=2024-12-08T02:02:46.185Z"
						display="block"
						width="100%"
						md-display="none"
						md-align-items="center"
						md-justify-content="center"
						md-height="200px"
						md-width="100%"
						md-margin="32px 0px 0px 0px"
						height="40%"
						lg-height="100%"
						srcSet="https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_updates_re_o5af.png?v=2024-12-08T02%3A02%3A46.185Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_updates_re_o5af.png?v=2024-12-08T02%3A02%3A46.185Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_updates_re_o5af.png?v=2024-12-08T02%3A02%3A46.185Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_updates_re_o5af.png?v=2024-12-08T02%3A02%3A46.185Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_updates_re_o5af.png?v=2024-12-08T02%3A02%3A46.185Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_updates_re_o5af.png?v=2024-12-08T02%3A02%3A46.185Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_updates_re_o5af.png?v=2024-12-08T02%3A02%3A46.185Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				margin="0px 0px 32px 0px"
				md-flex-direction="column"
				md-align-items="center"
				md-align-self="center"
				align-items="center"
				justify-content="space-around"
				flex-direction="row"
				height="400px"
				lg-flex-direction="column"
				md-padding="1 1 1 1"
			>
				<Box
					min-width="100px"
					min-height="100px"
					width="48%"
					padding="32px 32px 32px 32px"
					md-width="100%"
					md-padding="16px 16px 16px 16px"
					background="#f5edff"
					border-radius="16px"
					display="flex"
					height="100%"
					flex-direction="column"
					flex-wrap="no-wrap"
					justify-content="space-between"
					align-content="stretch"
					align-items="center"
					lg-flex-direction="row"
					lg-padding="16px 16px 16px 16px"
					lg-width="100%"
					lg-margin="0px 0px 8px 0px"
					lg-height="110%"
				>
					<Text
						margin="0 0px 16p 0px"
						font="400 24px --fontFamily-googleInter"
						padding="0px 32px 32px 0px"
						background="rgba(255, 255, 255, 0)"
						border-width="16px"
						border-radius="16px"
						lg-margin="0 0px 0 0px"
						lg-height="100%"
						md-padding="0px 0px 0px 0px"
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
							Team Mentions & Notifications
						</Strong>
						:
						<br />
						<br />
						{" "}Tag team members directly in tasks or discussions, and ensure they receive instant notifications to stay aligned.
					</Text>
					<Image
						src="https://uploads.quarkly.io/6753618ae778710018d57544/images/undraw_team_spirit_re_yl1v.png?v=2024-12-08T02:08:26.643Z"
						display="block"
						width="100%"
						md-height="150px"
						md-width="100%"
						md-margin="32px 0px 0px 0px"
						height="150px"
						lg-height="100%"
						md-display="none"
						srcSet="https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_team_spirit_re_yl1v.png?v=2024-12-08T02%3A08%3A26.643Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_team_spirit_re_yl1v.png?v=2024-12-08T02%3A08%3A26.643Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_team_spirit_re_yl1v.png?v=2024-12-08T02%3A08%3A26.643Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_team_spirit_re_yl1v.png?v=2024-12-08T02%3A08%3A26.643Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_team_spirit_re_yl1v.png?v=2024-12-08T02%3A08%3A26.643Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_team_spirit_re_yl1v.png?v=2024-12-08T02%3A08%3A26.643Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_team_spirit_re_yl1v.png?v=2024-12-08T02%3A08%3A26.643Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					width="48%"
					padding="32px 32px 32px 32px"
					md-width="100%"
					md-padding="16px 16px 16px 16px"
					background="#f5edff"
					border-radius="16px"
					display="flex"
					height="100%"
					flex-direction="column"
					flex-wrap="no-wrap"
					justify-content="center"
					lg-flex-direction="row"
					lg-padding="16px 16px 16px 16px"
					lg-width="100%"
					lg-margin="8px 0px 0px 0px"
					lg-height="110%"
					md-flex-direction="column"
				>
					<Text
						font="400 24px --fontFamily-googleInter"
						padding="0px 32px 32px 0px"
						background="rgba(255, 237, 252, 0)"
						border-width="16px"
						border-radius="16px"
						md-width="100%"
						lg-height="100%"
					>
						<Strong>
							Comment Threads
						</Strong>
						:
						<br />
						<br />
						{" "}Add comments directly to tasks, documents, or projects to streamline conversations and reduce emails.
					</Text>
					<Image
						src="https://uploads.quarkly.io/6753618ae778710018d57544/images/undraw_wall_post_re_y78d%20%281%29.png?v=2024-12-08T14:14:19.182Z"
						display="block"
						width="100%"
						md-display="none"
						md-align-items="center"
						md-justify-content="center"
						md-height="150px"
						md-width="100%"
						md-margin="32px 0px 0px 0px"
						height="40%"
						lg-height="100%"
						srcSet="https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_wall_post_re_y78d%20%281%29.png?v=2024-12-08T14%3A14%3A19.182Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_wall_post_re_y78d%20%281%29.png?v=2024-12-08T14%3A14%3A19.182Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_wall_post_re_y78d%20%281%29.png?v=2024-12-08T14%3A14%3A19.182Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_wall_post_re_y78d%20%281%29.png?v=2024-12-08T14%3A14%3A19.182Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_wall_post_re_y78d%20%281%29.png?v=2024-12-08T14%3A14%3A19.182Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_wall_post_re_y78d%20%281%29.png?v=2024-12-08T14%3A14%3A19.182Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_wall_post_re_y78d%20%281%29.png?v=2024-12-08T14%3A14%3A19.182Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
			</Box>
		</Section>
		<Section background="#f5edff" padding="24px 0 16px 0">
			<Override slot="SectionContent" md-display="flex" md-flex-direction="column" />
			<Text
				margin="32px 0px 0 0px"
				font="600 42px --fontFamily-googleInter"
				md-text-align="center"
				md-width="100%"
				md-margin="0px 0px 0 28"
				width="100%"
				text-align="center"
			>
				Task Automation
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				margin="32px 0px 32px 0px"
				md-flex-direction="column"
				md-align-items="center"
				md-align-self="center"
				align-items="center"
				justify-content="space-around"
				flex-direction="row"
				height="400px"
				lg-flex-direction="column"
			>
				<Box
					min-width="100px"
					min-height="100px"
					width="48%"
					padding="32px 32px 32px 32px"
					md-width="100%"
					md-padding="16px 16px 16px 16px"
					background="#ffffff"
					border-radius="16px"
					display="flex"
					height="100%"
					flex-direction="column"
					flex-wrap="no-wrap"
					justify-content="flex-start"
					lg-flex-direction="row"
					lg-width="100%"
					lg-padding="16px 16px 16px 16px"
					lg-margin="0px 0px 8px 0px"
					md-flex-direction="column"
				>
					<Text
						margin="18px 0px 0px 0px"
						font="400 24px --fontFamily-googleInter"
						padding="0px 32px 32px 0px"
						background="rgba(255, 255, 255, 0)"
						border-width="16px"
						border-radius="16px"
						lg-height="100%"
					>
						<Strong>
							Automated Reminders
						</Strong>
						:
						<br />
						<br />
						{" "}Never miss a deadline with auto-generated reminders for upcoming tasks.
					</Text>
					<Image
						src="https://uploads.quarkly.io/6753618ae778710018d57544/images/undraw_reminder_re_fe15.png?v=2024-12-08T14:18:59.367Z"
						display="block"
						width="100%"
						md-display="none"
						md-align-items="center"
						md-justify-content="center"
						md-height="150px"
						md-width="100%"
						md-margin="32px 0px 0px 0px"
						height="40%"
						margin="32px 0px 0px 0px"
						lg-height="100%"
						lg-align-self="center"
						srcSet="https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_reminder_re_fe15.png?v=2024-12-08T14%3A18%3A59.367Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_reminder_re_fe15.png?v=2024-12-08T14%3A18%3A59.367Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_reminder_re_fe15.png?v=2024-12-08T14%3A18%3A59.367Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_reminder_re_fe15.png?v=2024-12-08T14%3A18%3A59.367Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_reminder_re_fe15.png?v=2024-12-08T14%3A18%3A59.367Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_reminder_re_fe15.png?v=2024-12-08T14%3A18%3A59.367Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_reminder_re_fe15.png?v=2024-12-08T14%3A18%3A59.367Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					width="48%"
					padding="32px 32px 32px 32px"
					md-width="100%"
					md-padding="16px 16px 16px 16px"
					background="#ffffff"
					border-radius="16px"
					display="flex"
					height="100%"
					flex-direction="column"
					flex-wrap="no-wrap"
					justify-content="flex-start"
					lg-flex-direction="row"
					lg-width="100%"
					lg-padding="16px 16px 16px 16px"
					lg-margin="8px 0px 0px 0px"
					md-flex-direction="column"
				>
					<Text
						margin="18px 0px 0px 0px"
						font="400 24px --fontFamily-googleInter"
						padding="0px 32px 32px 0px"
						background="rgba(255, 255, 255, 0)"
						border-width="16px"
						border-radius="16px"
						lg-height="100%"
					>
						<Strong>
							Recurring Tasks
						</Strong>
						:{" "}
						<br />
						<br />
						Set tasks to repeat on a daily, weekly, or custom schedule, saving time on manual setup.
					</Text>
					<Image
						src="https://uploads.quarkly.io/6753618ae778710018d57544/images/undraw_tasks_re_v2v4.png?v=2024-12-08T14:22:44.013Z"
						display="block"
						width="100%"
						md-display="none"
						md-align-items="center"
						md-justify-content="center"
						md-height="150px"
						md-width="100%"
						md-margin="32px 0px 0px 0px"
						height="40%"
						margin="32px 0px 0px 0px"
						lg-height="100%"
						lg-align-self="center"
						srcSet="https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_tasks_re_v2v4.png?v=2024-12-08T14%3A22%3A44.013Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_tasks_re_v2v4.png?v=2024-12-08T14%3A22%3A44.013Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_tasks_re_v2v4.png?v=2024-12-08T14%3A22%3A44.013Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_tasks_re_v2v4.png?v=2024-12-08T14%3A22%3A44.013Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_tasks_re_v2v4.png?v=2024-12-08T14%3A22%3A44.013Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_tasks_re_v2v4.png?v=2024-12-08T14%3A22%3A44.013Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_tasks_re_v2v4.png?v=2024-12-08T14%3A22%3A44.013Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				margin="0px 0px 32px 0px"
				md-flex-direction="column"
				md-align-items="center"
				md-align-self="center"
				align-items="center"
				justify-content="space-around"
				flex-direction="row"
				height="400px"
				lg-flex-direction="column"
			>
				<Box
					min-width="100px"
					min-height="100px"
					width="48%"
					padding="32px 32px 32px 32px"
					md-width="100%"
					md-padding="16px 16px 16px 16px"
					background="#ffffff"
					border-radius="16px"
					display="flex"
					height="100%"
					flex-direction="column"
					flex-wrap="no-wrap"
					justify-content="space-between"
					align-content="stretch"
					align-items="center"
					lg-flex-direction="row"
					lg-width="100%"
					lg-padding="16px 16px 16px 16px"
					lg-margin="0px 0px 8px 0px"
					md-flex-direction="column"
				>
					<Text
						margin="0 0px 16p 0px"
						font="400 24px --fontFamily-googleInter"
						padding="0px 32px 32px 0px"
						background="rgba(255, 255, 255, 0)"
						border-width="16px"
						border-radius="16px"
					>
						<Strong>
							Workflow Automation
						</Strong>
						:
						<br />
						<br />
						{" "}Trigger actions (e.g., task assignment, notifications) based on specific conditions (e.g., task completion).
					</Text>
					<Image
						src="https://uploads.quarkly.io/6753618ae778710018d57544/images/undraw_control_panel_re_y3ar.png?v=2024-12-08T14:25:32.133Z"
						display="block"
						width="100%"
						md-height="150px"
						md-width="100%"
						md-margin="32px 0px 0px 0px"
						height="150px"
						lg-height="100%"
						md-display="none"
						srcSet="https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_control_panel_re_y3ar.png?v=2024-12-08T14%3A25%3A32.133Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_control_panel_re_y3ar.png?v=2024-12-08T14%3A25%3A32.133Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_control_panel_re_y3ar.png?v=2024-12-08T14%3A25%3A32.133Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_control_panel_re_y3ar.png?v=2024-12-08T14%3A25%3A32.133Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_control_panel_re_y3ar.png?v=2024-12-08T14%3A25%3A32.133Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_control_panel_re_y3ar.png?v=2024-12-08T14%3A25%3A32.133Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_control_panel_re_y3ar.png?v=2024-12-08T14%3A25%3A32.133Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					width="48%"
					padding="32px 32px 32px 32px"
					md-width="100%"
					md-padding="16px 16px 16px 16px"
					background="#ffffff"
					border-radius="16px"
					display="flex"
					height="100%"
					flex-direction="column"
					flex-wrap="no-wrap"
					justify-content="center"
					lg-flex-direction="row"
					lg-width="100%"
					lg-padding="16px 16px 16px 16px"
					lg-margin="8px 0px 0px 0px"
					md-flex-direction="column"
				>
					<Text
						font="400 24px --fontFamily-googleInter"
						padding="0px 32px 32px 0px"
						background="rgba(255, 255, 255, 0)"
						border-width="16px"
						border-radius="16px"
						md-width="100%"
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
						<Strong>
							Integration with Zapier/Other Tools
						</Strong>
						:
						<br />
						<br />
						{" "}Automate workflows by connecting to your existing apps.
					</Text>
					<Image
						src="https://uploads.quarkly.io/6753618ae778710018d57544/images/undraw_around_the_world_re_rb1p.png?v=2024-12-08T14:27:44.080Z"
						display="block"
						width="100%"
						md-display="none"
						md-align-items="center"
						md-justify-content="center"
						md-height="150px"
						md-width="100%"
						md-margin="32px 0px 0px 0px"
						height="40%"
						lg-height="100%"
						srcSet="https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_around_the_world_re_rb1p.png?v=2024-12-08T14%3A27%3A44.080Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_around_the_world_re_rb1p.png?v=2024-12-08T14%3A27%3A44.080Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_around_the_world_re_rb1p.png?v=2024-12-08T14%3A27%3A44.080Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_around_the_world_re_rb1p.png?v=2024-12-08T14%3A27%3A44.080Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_around_the_world_re_rb1p.png?v=2024-12-08T14%3A27%3A44.080Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_around_the_world_re_rb1p.png?v=2024-12-08T14%3A27%3A44.080Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_around_the_world_re_rb1p.png?v=2024-12-08T14%3A27%3A44.080Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
			</Box>
		</Section>
		<Section margin="0 0 0 0" background="#ffffff">
			<Override slot="SectionContent" md-display="flex" md-flex-direction="column" />
			<Text
				margin="32px 0px 0 0px"
				font="600 42px --fontFamily-googleInter"
				md-text-align="center"
				md-width="100%"
				md-margin="0px 0px 0 28"
				width="100%"
				text-align="center"
			>
				Customizable Dashboards
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				margin="32px 0px 32px 0px"
				md-flex-direction="column"
				md-align-items="center"
				md-align-self="center"
				align-items="center"
				justify-content="space-around"
				flex-direction="row"
				height="400px"
				lg-flex-direction="column"
			>
				<Box
					min-width="100px"
					min-height="100px"
					width="48%"
					padding="32px 32px 32px 32px"
					md-width="100%"
					md-padding="16px 16px 16px 16px"
					background="#f5edff"
					border-radius="16px"
					display="flex"
					height="100%"
					flex-direction="column"
					flex-wrap="no-wrap"
					justify-content="center"
					lg-flex-direction="row"
					lg-width="100%"
					lg-padding="16px 16px 16px 16px"
					md-flex-direction="column"
					md-margin="0px 0px 8px 0px"
				>
					<Text
						margin="0 0px 0px 0px"
						font="400 24px --fontFamily-googleInter"
						padding="0px 32px 32px 0px"
						background="rgba(255, 255, 255, 0)"
						border-width="16px"
						border-radius="16px"
					>
						<Strong>
							Drag-and-Drop Widgets
						</Strong>
						:{" "}
						<br />
						<br />
						Create personalized dashboards by selecting and organizing widgets like task lists, calendars, or analytics charts.
					</Text>
					<Image
						src="https://uploads.quarkly.io/6753618ae778710018d57544/images/undraw_drag_re_shc0.png?v=2024-12-08T14:31:00.930Z"
						display="block"
						width="100%"
						md-display="none"
						md-align-items="center"
						md-justify-content="center"
						md-height="150px"
						md-width="100%"
						md-margin="32px 0px 0px 0px"
						height="40%"
						lg-height="100%"
						lg-align-self="center"
						srcSet="https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_drag_re_shc0.png?v=2024-12-08T14%3A31%3A00.930Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_drag_re_shc0.png?v=2024-12-08T14%3A31%3A00.930Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_drag_re_shc0.png?v=2024-12-08T14%3A31%3A00.930Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_drag_re_shc0.png?v=2024-12-08T14%3A31%3A00.930Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_drag_re_shc0.png?v=2024-12-08T14%3A31%3A00.930Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_drag_re_shc0.png?v=2024-12-08T14%3A31%3A00.930Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_drag_re_shc0.png?v=2024-12-08T14%3A31%3A00.930Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					width="48%"
					padding="32px 32px 32px 32px"
					md-width="100%"
					md-padding="16px 16px 16px 16px"
					background="#f5edff"
					border-radius="16px"
					display="flex"
					height="100%"
					flex-direction="column"
					flex-wrap="no-wrap"
					justify-content="center"
					lg-flex-direction="row"
					lg-width="100%"
					lg-padding="16px 16px 16px 16px"
					lg-margin="8px 0px 0px 0px"
					md-flex-direction="column"
				>
					<Text
						margin="0 0px 0px 0px"
						font="400 24px --fontFamily-googleInter"
						padding="0px 32px 32px 0px"
						background="rgba(255, 255, 255, 0)"
						border-width="16px"
						border-radius="16px"
					>
						<Strong>
							Custom Filters
						</Strong>
						:{" "}
						<br />
						<br />
						View only what matters to you by filtering projects or tasks based on priority, status, or deadlines.
					</Text>
					<Image
						src="https://uploads.quarkly.io/6753618ae778710018d57544/images/undraw_search_re_x5gq.png?v=2024-12-08T14:31:54.947Z"
						display="block"
						width="100%"
						md-display="none"
						md-align-items="center"
						md-justify-content="center"
						md-height="150px"
						md-width="100%"
						md-margin="32px 0px 0px 0px"
						height="40%"
						lg-height="100%"
						lg-align-self="center"
						srcSet="https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_search_re_x5gq.png?v=2024-12-08T14%3A31%3A54.947Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_search_re_x5gq.png?v=2024-12-08T14%3A31%3A54.947Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_search_re_x5gq.png?v=2024-12-08T14%3A31%3A54.947Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_search_re_x5gq.png?v=2024-12-08T14%3A31%3A54.947Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_search_re_x5gq.png?v=2024-12-08T14%3A31%3A54.947Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_search_re_x5gq.png?v=2024-12-08T14%3A31%3A54.947Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_search_re_x5gq.png?v=2024-12-08T14%3A31%3A54.947Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				margin="0px 0px 32px 0px"
				md-flex-direction="column"
				md-align-items="center"
				md-align-self="center"
				align-items="center"
				justify-content="space-around"
				flex-direction="row"
				height="400px"
				lg-flex-direction="column"
			>
				<Box
					min-width="100px"
					min-height="100px"
					width="48%"
					padding="32px 32px 32px 32px"
					md-width="100%"
					md-padding="16px 16px 16px 16px"
					background="#f5edff"
					border-radius="16px"
					display="flex"
					height="100%"
					flex-direction="column"
					flex-wrap="no-wrap"
					justify-content="space-between"
					align-content="stretch"
					align-items="center"
					lg-flex-direction="row"
					lg-width="100%"
					lg-padding="16px 16px 16px 16px"
					lg-margin="0px 0px 8px 0px"
					md-flex-direction="column"
				>
					<Text
						margin="0 0px 16p 0px"
						font="400 24px --fontFamily-googleInter"
						padding="0px 32px 32px 0px"
						background="rgba(255, 255, 255, 0)"
						border-width="16px"
						border-radius="16px"
					>
						<Strong>
							Dark Mode/Light Mode
						</Strong>
						:{" "}
						<br />
						<br />
						Switch between themes for a better user experience.
					</Text>
					<Image
						src="https://uploads.quarkly.io/6753618ae778710018d57544/images/undraw_dark_mode_2xam.png?v=2024-12-08T14:34:40.658Z"
						display="block"
						width="100%"
						md-height="150px"
						md-width="100%"
						md-margin="32px 0px 0px 0px"
						height="150px"
						lg-height="100%"
						md-display="none"
						srcSet="https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_dark_mode_2xam.png?v=2024-12-08T14%3A34%3A40.658Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_dark_mode_2xam.png?v=2024-12-08T14%3A34%3A40.658Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_dark_mode_2xam.png?v=2024-12-08T14%3A34%3A40.658Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_dark_mode_2xam.png?v=2024-12-08T14%3A34%3A40.658Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_dark_mode_2xam.png?v=2024-12-08T14%3A34%3A40.658Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_dark_mode_2xam.png?v=2024-12-08T14%3A34%3A40.658Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_dark_mode_2xam.png?v=2024-12-08T14%3A34%3A40.658Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					width="48%"
					padding="32px 32px 32px 32px"
					md-width="100%"
					md-padding="16px 16px 16px 16px"
					background="#f5edff"
					border-radius="16px"
					display="flex"
					height="100%"
					flex-direction="column"
					flex-wrap="no-wrap"
					justify-content="center"
					lg-flex-direction="row"
					lg-width="100%"
					lg-padding="16px 16px 16px 16px"
					lg-margin="8px 0px 0px 0px"
					md-flex-direction="column"
				>
					<Text
						font="400 24px --fontFamily-googleInter"
						padding="0px 32px 32px 0px"
						background="rgba(255, 237, 252, 0)"
						border-width="16px"
						border-radius="16px"
						md-width="100%"
					>
						<Strong>
							Quick Access Panels
						</Strong>
						:
						<br />
						<br />
						{" "}Pin your most-used projects or tools for instant access.
					</Text>
					<Image
						src="https://uploads.quarkly.io/6753618ae778710018d57544/images/undraw_os_upgrade_re_r0qa.png?v=2024-12-08T14:37:29.456Z"
						display="block"
						width="100%"
						md-display="none"
						md-align-items="center"
						md-justify-content="center"
						md-height="150px"
						md-width="100%"
						md-margin="32px 0px 0px 0px"
						height="40%"
						lg-height="100%"
						srcSet="https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_os_upgrade_re_r0qa.png?v=2024-12-08T14%3A37%3A29.456Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_os_upgrade_re_r0qa.png?v=2024-12-08T14%3A37%3A29.456Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_os_upgrade_re_r0qa.png?v=2024-12-08T14%3A37%3A29.456Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_os_upgrade_re_r0qa.png?v=2024-12-08T14%3A37%3A29.456Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_os_upgrade_re_r0qa.png?v=2024-12-08T14%3A37%3A29.456Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_os_upgrade_re_r0qa.png?v=2024-12-08T14%3A37%3A29.456Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6753618ae778710018d57544/images/undraw_os_upgrade_re_r0qa.png?v=2024-12-08T14%3A37%3A29.456Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
			</Box>
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