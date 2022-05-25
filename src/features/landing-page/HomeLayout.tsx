import Link from "next/link"

type HomeLayoutProps = {
  children: React.ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div>
      <header>
        <h1>
          <Link href="/">
            <a>temp layout</a>
          </Link>
        </h1>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}
        {` `}
        <a href="https://codefortulsa.org">Code For Tulsa</a>
      </footer>
    </div>
  )
}

export default HomeLayout
