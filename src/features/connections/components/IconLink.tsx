import Image from "next/image"

export type IconLinkProps = {
	url: string,
	icon: string,
	label: string,
	reverse?: boolean
}

const IconLink = ({ url, icon, label, reverse = false }: IconLinkProps) => {

	return (
		<div className="flex flex-row bg-cft-black text-cft-white
			sm:even:flex-row lg:even:flex-row-reverse  
			  ">
			<a
				href={url}
				target='blank'
				className="items-center py-5 w-96
				text-left pl-5 sm:pl-10
				flex justify-start
				hover:transition
				hover:drop-shadow-[1.75px_1.75px_0.75px_rgba(171,48,57,1.0)] 
				hover:text-cft-blue-400 
				hover:scale-105"
			>
				<div className="w-32 h-32 ">
					<Image src={icon} alt="slack logo" />
				</div>

				<div className="pl-5 sm:pl-10 text-2xl"
				>{label}</div>
			</a>
		</div>
	)
}

export default IconLink
