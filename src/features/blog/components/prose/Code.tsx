type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

//TODO: Fix code highlighting and <pre> handling
const Code = (props: Props) => {
  const { children, ...restProps } = props;
  return <code className="bg-black text-white" {...restProps}>{children}</code>;
};

export default Code;
