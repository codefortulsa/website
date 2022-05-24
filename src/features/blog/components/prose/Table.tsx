type Props = React.DetailedHTMLProps<
  React.TableHTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>;

const Table = (props: Props) => {
  const { children, ...restProps } = props;
  return <table {...restProps}>{children}</table>;
};

export default Table;
