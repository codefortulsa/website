type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
>;

const Pre = (props: Props) => {
  const { children, ...restProps } = props;
  return <pre {...restProps}>{children}</pre>;
};

export default Pre;
