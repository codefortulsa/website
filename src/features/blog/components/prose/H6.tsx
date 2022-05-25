type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const H6 = (props: Props) => {
  const { children, ...restProps } = props;
  return <h6 {...restProps}>{children}</h6>;
};

export default H6;
