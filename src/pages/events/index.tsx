import EventCard from "../../features/events/EventCard";
import { CFTEvent } from "../../features/events/EventCard";
import type { NextPageWithLayout } from "../_app";
import type { GetStaticProps } from "next";

const testEvents: CFTEvent[] = [
	{ title: 'test event', description: 'foo, bar, and baz go to vegas', date: new Date().toDateString() },
	{ title: 'test event2', description: 'foo, bar, and baz go to vegas part 2: the reckoning', date: new Date().toDateString() },
	{ title: 'test event3', description: 'foo, bar, and baz go to vegas part 3: the reunion tour', date: new Date().toDateString() }
]

type PageProps = {
	events: CFTEvent[]
}

export const getStaticProps: GetStaticProps<PageProps> = () => {
	// TODO: fetch google sheets and meetup events, transform and merge
	return {
		props: {
			events: testEvents
		}
	}
}


const EventsIndex: NextPageWithLayout<PageProps> = ({ events }) => {
	return (
		<main className='grid md:grid-cols-2 gap-11'>
			{events.map((event, index) => (
				<EventCard key={index} event={event} />
			)

			)}
		</main>
	)
}

export default EventsIndex;
