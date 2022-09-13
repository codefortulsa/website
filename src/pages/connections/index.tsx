import githubLogo from "/public/icons/GitHubLogo.svg"
import slackLogo from "/public/icons/SlackLogo.svg"
import meetupLogo from "/public/icons/MeetupLogo.svg"
import twitterLogo from "/public/icons/TwitterLogo.svg"
import DefaultLayout from "../../features/DefaultLayout"
import Image from "next/image"
import { NextPageWithLayout } from "../_app"

const ConnectionsPage: NextPageWithLayout = () => {
	return (
		<>
			{/*// TODO: Refactor links into a component that takes a url, icon, and label as props then style */}
			<section className="flex flex-col">
				<a href={"https://slack.techlahoma.org/"} target='blank' className="flex justify-around items-center">
					<Image src={slackLogo} alt="slack logo" />
					<h1>Slack</h1>
				</a>
				<a href={"https://www.meetup.com/techlahoma-foundation/events"} target='blank' className="flex justify-around items-center">
					<Image src={meetupLogo} alt="meetup logo" />
					<h1>Meetup</h1>
				</a>
				<a href={"https://www.twitter.com/codefortulsa/"} target='blank' className="flex justify-around items-center">
					<Image src={twitterLogo} alt="meetup logo" />
					<h1>Twitter</h1>
				</a>
				<a href={"https://github.com/codefortulsa/"} target='blank' className="flex justify-around items-center">
					<Image src={githubLogo} alt="meetup logo" />
					<h1>GitHub</h1>
				</a>
			</section>
		</>
	)
}

ConnectionsPage.getLayout = page => <DefaultLayout>{page}</DefaultLayout>

export default ConnectionsPage
