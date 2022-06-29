import Link from "next/link";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({
  children,
}: DefaultLayoutProps) => {

  return (
    <div className="grid grid-cols-4">
      <header className="col-span-1">
        <Link href="/">
          <a>temp layout</a>
        </Link>
      </header>
      <main className="col-span-3">
        {children}
        <footer>
          © {new Date().getFullYear()}
          {` `}
          <a href="https://codefortulsa.org">Code For Tulsa</a>
        </footer>
      </main>
    </div>
  );
};

export default DefaultLayout;
