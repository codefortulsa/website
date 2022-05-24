type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>;

const TableBody = (props: Props) => {
  const { children, ...restProps } = props;
  return <tbody {...restProps}>{children}</tbody>;
};

export default TableBody;
