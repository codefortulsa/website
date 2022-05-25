type Props = React.DetailedHTMLProps<
  React.LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>;

const ListItem = (props: Props) => {
  const { children, ...restProps } = props;
  return <li {...restProps}>{children}</li>;
};

export default ListItem;
