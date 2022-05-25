import Link from "next/link";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({
  children,
}: DefaultLayoutProps) => {

  return (
    <div>
      <header>
        <Link href="/">
          <a>temp layout</a>
        </Link>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}
        {` `}
        <a href="https://codefortulsa.org">Code For Tulsa</a>
      </footer>
    </div>
  );
};

export default DefaultLayout;
