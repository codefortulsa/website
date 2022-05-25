type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

const Em = (props: Props) => {
  const { children, ...restProps } = props;
  return <em {...restProps}>{children}</em>;
};

export default Em;
