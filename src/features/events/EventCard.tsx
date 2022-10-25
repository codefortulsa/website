export type CFTEvent = {
	title: String,
	date: String,
	location: String,
	description: String
}

const EventCard = ({ event }: { event: CFTEvent }) => {
	const title: string = event.title.toUpperCase();
	const cardStyle: string = `bg-cft-white dark:bg-cft-blue text-black dark:text-white 
		p-4 shadow-lg shadow-red-900`;

	return (
		<article className={cardStyle}>
			<h2 className='text-3xl'>{title}</h2>
			<time className='text-2xl' dateTime={event.date.toString()}>
				{event.date}
			</time>
			<p className='mt-3'>{event.location}</p>
			<p>{event.description}</p>
		</article>
	)

}

export default EventCard;