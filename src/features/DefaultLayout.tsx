import Link from "next/link"
import Nav from "../features/Nav"

type DefaultLayoutProps = {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="bg-cft-light-gray  dark:bg-cft-black grid grid-cols-1 lg:grid-cols-[256px_repeat(3,_minmax(0,_1fr))] gap-10 h-screen">
      <header className="bg-cft-light-gray  dark:bg-cft-black col-span-1 ">
        <Nav />
      </header>
      <main className="col-span-1 lg:col-span-3 pt-10 container px-20">
        <section>
          {children}
        </section>
        <footer className="p-4 text-right">
          © {new Date().getFullYear()}
          {` `}
          <a href="https://codefortulsa.org">Code For Tulsa</a>
        </footer>
      </main>
    </div>
  )
}

export default DefaultLayout
