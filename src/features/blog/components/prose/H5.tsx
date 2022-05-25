type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const H5 = (props: Props) => {
  const { children, ...restProps } = props;
  return <h5 {...restProps}>{children}</h5>;
};

export default H5;
