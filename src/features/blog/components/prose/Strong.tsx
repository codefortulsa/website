type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

const Strong = (props: Props) => {
  const { children, ...restProps } = props;
  return <strong {...restProps}>{children}</strong>;
};

export default Strong;
