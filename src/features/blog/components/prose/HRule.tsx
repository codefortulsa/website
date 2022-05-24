type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHRElement>,
  HTMLHRElement
>;

const HRule = (props: Props) => {
  const { children, ...restProps } = props;
  return <hr {...restProps}>{children}</hr>;
};

export default HRule;
