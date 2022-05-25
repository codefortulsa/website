type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>;

const UList = (props: Props) => {
  const { children, ...restProps } = props;
  return <ul {...restProps}>{children}</ul>;
};

export default UList;
