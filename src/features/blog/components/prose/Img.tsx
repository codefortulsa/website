import Image from "next/image";
/**
 * @see https://github.com/vercel/next.js/discussions/19065#discussioncomment-2341463
 */

type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

//TODO: Fix blog images
const Img = (props: Props) => {
  const { children, alt, src = "", placeholder, ...restProps } = props
  // Needs placeholder implementation
  return (
    <Image alt={alt ?? ""} src={src} layout="fixed" width={"200"} height={"50"} {...restProps}>
      {children}
    </Image>
  )
}

export default Img
