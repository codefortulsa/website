type Props = React.DetailedHTMLProps<
  React.TdHTMLAttributes<HTMLTableDataCellElement>,
  HTMLTableDataCellElement
>;

const TableDataCell = (props: Props) => {
  const { children, ...restProps } = props;
  return <td {...restProps}>{children}</td>;
};

export default TableDataCell;
