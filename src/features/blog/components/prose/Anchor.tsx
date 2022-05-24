type Props = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const Anchor = (props: Props) => {
  const { children, ...restProps } = props;
  return <a {...restProps}>{children}</a>;
};

export default Anchor;
