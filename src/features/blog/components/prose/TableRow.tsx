type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement
>;

const TableRow = (props: Props) => {
  const { children, ...restProps } = props;
  return <tr {...restProps}>{children}</tr>;
};

export default TableRow;
