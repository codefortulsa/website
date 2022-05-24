type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

const Paragraph = (props: Props) => {
  const { children, ...restProps } = props;
  return <p {...restProps}>{children}</p>;
};

export default Paragraph;
