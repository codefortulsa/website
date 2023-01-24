import Image, {ImageProps} from 'next/future/image';
/**
 * This relies on the @helmturner/recma-next-static-images plugin in `next.config.js`, since static images break next/image
 * @see https://github.com/vercel/next.js/discussions/19065#discussioncomment-2341463
 */
const Img = (props: ImageProps) => {
  const {children, alt, src, title, ...restProps} = props;
  return (
    <Image
      {...restProps}
      alt={alt ?? title ?? ''}
      title={title ?? alt ?? ''}
      src={src}
      loading="eager"
    >
      {children}
    </Image>
  );
};

export default Img;
