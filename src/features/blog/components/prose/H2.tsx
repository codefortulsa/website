type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const H2 = (props: Props) => {
  const { children, ...restProps } = props;
  return <h2 {...restProps}>{children}</h2>;
};

export default H2;
