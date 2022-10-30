import Image from "next/image"
import { FC } from "react";

export type IconLinkProps = {
	url: string,
	icon: string,
	label: string,
	reverse?: boolean
}

const IconLink = ({ url, icon, label, reverse = false }: IconLinkProps) => {
	const rowReverse = reverse ? ' xs:flex-row-reverse' : '';

	return (
		<div>
			<a
				href={url}
				target='blank'
				className={"flex justify-around items-center" + rowReverse}
			>
				<Image src={icon} alt="slack logo" />
				<h1>{label}</h1>
			</a>
		</div>
	)
}

export default IconLink
