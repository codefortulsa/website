import Image from "next/image"

export type IconLinkProps = {
	url: string,
	icon: string,
	label: string,
}

const IconLink = ({ url, icon, label }: IconLinkProps) => {

	return (
		<a
			href={url}
			target='blank'
			className="bg-cft-black items-center py-5 w-96
				text-left text-cft-white pl-5 sm:pl-10
				flex justify-center
				odd:flex-row
				even:flex-row-reverse
				lg:even:flex-row
				lg:justify-start
				hover:transition
				hover:scale-105"
		>
			<Image src={icon} width="128" height="128" alt="slack logo" className="hover:drop-shadow-[1.75px_1.75px_0.75px_rgba(171,48,57,1.0)]" />

			<div className="px-5 text-2xl hover:drop-shadow-[1.75px_1.75px_0.75px_rgba(171,48,57,1.0)]"
			>{label}</div>
		</a>
	)
}

export default IconLink
