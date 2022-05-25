type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

const Span = (props: Props) => {
  const { children, ...restProps } = props;
  return <span {...restProps}>{children}</span>;
};

export default Span;
