type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLOListElement>,
  HTMLOListElement
>;

const OList = (props: Props) => {
  const { children, ...restProps } = props;
  return <ol {...restProps}>{children}</ol>;
};

export default OList;
