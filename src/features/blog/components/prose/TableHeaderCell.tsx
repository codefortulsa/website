type Props = React.DetailedHTMLProps<
  React.ThHTMLAttributes<HTMLTableHeaderCellElement>,
  HTMLTableHeaderCellElement
>;

const TableHeaderCell = (props: Props) => {
  const { children, ...restProps } = props;
  return <th {...restProps}>{children}</th>;
};

export default TableHeaderCell;
