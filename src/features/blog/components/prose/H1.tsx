type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const H1 = (props: Props) => {
  const { children, ...restProps } = props;
  return <h1 {...restProps}>{children}</h1>;
};

export default H1;
