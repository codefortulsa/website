import Link from "next/link"
import Nav from "../features/Nav"

type DefaultLayoutProps = {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="grid grid-cols-[256px_repeat(3,_minmax(0,_1fr))] gap-10 h-screen">
      <header className="col-span-1">
        <Nav />
      </header>
      <main className="col-span-3 pt-10 container px-20">
        {children}
        <footer className="absolute bottom-0 pb-4">
          © {new Date().getFullYear()}
          {` `}
          <a href="https://codefortulsa.org">Code For Tulsa</a>
        </footer>
      </main>
    </div>
  )
}

export default DefaultLayout
