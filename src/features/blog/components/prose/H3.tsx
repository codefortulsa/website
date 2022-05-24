type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const H3 = (props: Props) => {
  const { children, ...restProps } = props;
  return <h3 {...restProps}>{children}</h3>;
};

export default H3;
