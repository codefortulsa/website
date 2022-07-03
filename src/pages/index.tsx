import DefaultLayout from "../features/DefaultLayout"
import Link from "next/link"
import { NextPageWithLayout } from "./_app"

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <h1>TEMP HOME PAGE</h1>
      <Link href="/blog">
        <a>GO TO BLOG</a>
      </Link>
    </>
  )
}

HomePage.getLayout = page => <DefaultLayout>{page}</DefaultLayout>

export default HomePage
