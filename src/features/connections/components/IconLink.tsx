import Image from "next/image"

export type IconLinkProps = {
	url: string,
	icon: string,
	label: string,
	reverse?: boolean
}

const IconLink = ({ url, icon, label, reverse = false }: IconLinkProps) => {

	return (
		<div className="odd:bg-slate-900 even:bg-slate-800
		flex even:flex-row sm:even:flex-row-reverse lg:even:flex-row">
			<a
				href={url}
				target='blank'
				className="items-center py-5 w-96
				text-left pl-5 sm:pl-10
				flex justify-start"
			>
				<div className="w-32 h-32">
					<Image src={icon} alt="slack logo" />
				</div>

				<div className="pl-5 sm:pl-10 text-2xl">{label}</div>
			</a>
		</div>
	)
}

export default IconLink
