import H1 from "./H1";
import H2 from "./H2";
import H3 from "./H3";
import H4 from "./H4";
import H5 from "./H5";
import H6 from "./H6";
import Anchor from "./Anchor";
import Img from "./Img";
import Span from "./Span";
import Em from "./Em";
import Strong from "./Strong";
import HRule from "./HRule";
import Quote from "./Quote";
import Code from "./Code";
import Pre from "./Pre";
import Paragraph from "./Paragraph";
import Table from "./Table";
import TableHeaderCell from "./TableHeaderCell";
import TableDataCell from "./TableDataCell";
import TableRow from "./TableRow";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import OList from "./OList";
import UList from "./UList";
import ListItem from "./ListItem";
/** Object mapping html elements to their custom components  */
const customComponentMap = {
  em: Em,
  strong: Strong,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  a: Anchor,
  img: Img,
  blockquote: Quote,
  pre: Pre,
  span: Span,
  code: Code,
  p: Paragraph,
  table: Table,
  thead: TableHead,
  tbody: TableBody,
  th: TableHeaderCell,
  td: TableDataCell,
  tr: TableRow,
  ol: OList,
  ul: UList,
  li: ListItem,
  hr: HRule,
}
export default customComponentMap;
export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Anchor,
  Img,
  Code,
  Em,
  Strong,
  HRule,
  Span,
  Pre,
  Paragraph,
  Quote,
  UList,
  OList,
  ListItem,
  TableBody,
  TableHead,
  TableHeaderCell,
  TableDataCell,
  TableRow,
  Table,
};
