type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>;

const TableHead = (props: Props) => {
  const { children, ...restProps } = props;
  return <thead {...restProps}>{children}</thead>;
};

export default TableHead;
