type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const H4 = (props: Props) => {
  const { children, ...restProps } = props;
  return <h4 {...restProps}>{children}</h4>;
};

export default H4;
