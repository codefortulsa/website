import githubLogo from "/public/icons/GitHubLogo.svg"
import slackLogo from "/public/icons/SlackLogo.svg"
import meetupLogo from "/public/icons/MeetupLogo.svg"
import twitterLogo from "/public/icons/TwitterLogo.svg"
import DefaultLayout from "../../features/DefaultLayout"
import { NextPageWithLayout } from "../_app"
import IconLink from "../../features/connections/components/IconLink"
import { IconLinkProps } from "../../features/connections/components/IconLink"

const links: IconLinkProps[] = [
	{
		url: "https://slack.techlahoma.org/",
		icon: slackLogo,
		label: 'Slack'
	},
	{
		url: "https://www.meetup.com/techlahoma-foundation/events",
		icon: meetupLogo,
		label: 'Meetup'
	},
	{
		url: "https://www.twitter.com/codefortulsa/",
		icon: twitterLogo,
		label: 'Twitter'
	},
	{
		url: "https://github.com/codefortulsa/",
		icon: githubLogo,
		label: 'GitHub'
	},
]

const ConnectionsPage: NextPageWithLayout = () => {
	return (
		<>
			{links.map(
				(linkProps, index) => (
					<IconLink
						key={index}
						{...linkProps}
					/>
				))}
		</>
	)
}

ConnectionsPage.getLayout = page => <DefaultLayout>{page}</DefaultLayout>

export default ConnectionsPage
