type Props = React.DetailedHTMLProps<
  React.BlockquoteHTMLAttributes<HTMLQuoteElement>,
  HTMLQuoteElement
>;

const Quote = (props: Props) => {
  const { children, ...restProps } = props;
  return <blockquote {...restProps}>{children}</blockquote>;
};

export default Quote;
