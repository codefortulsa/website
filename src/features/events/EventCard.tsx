export type CFTEvent = {
	title: String,
	date: String,
	location: String,
	description: String
}

const EventCard = ({ event }: { event: CFTEvent }) => {
	return (
		<article className='bg-cft-light-gray p-6 text-cft-black'>
			<h1>{event.title}</h1>
			<h2>{event.date}</h2>
			<h2>{event.location}</h2>
			<p>{event.description}</p>
		</article>
	)

}

export default EventCard;
