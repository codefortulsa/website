import Image from "next/image";
import type { ImageProps } from "next/image";

type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

//TODO: Fix blog images
const Img = (props: Props) => {
  const { children, alt, ...restProps } = props;

  return (
    <img alt={alt ?? ""} {...restProps}>
      {children}
    </img>
  );
};

export default Img;
