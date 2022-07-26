import DefaultLayout from "../features/DefaultLayout"
import Link from "next/link"
import { NextPageWithLayout } from "./_app"

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <div className="text-center text-xl">
        <h1 className="text-5xl">Code for Tulsa</h1>
        <p>an official brigade</p>
        <p>of</p>
        <p>[Code For America]</p>
      </div>
      <br/>
      <p>
        We’ve been building civic apps since 2011.  We’re programmers, graphic designers, PR/Marketing professionals, and all of us have a huge heart for making Tulsa a better place to live, work, and play.  We’ve worked with Tulsa Transit, the Tulsa Fire Department, the Tulsa Library, the local food bank, the regional planning authority, and FEMA.
      </p>
      <br/>
      <p>
        We became an official Code for America Brigade in late 2012, and hosted a local National Day of Civic Hacking + Hack for Change event in June of 2013, leading to the Open Search Map project with FEMA and to Scott Phillips being recognized as a White House Champion of Change.  Since then we’ve helped the City of Tulsa create an open data policy, and we’ve been working with community organizations to realize the potential of open data, and data-driven decision-making at the level of local government.
      </p>
      <br/>
      <p>
        We’re now also a part of the larger Techlahoma organization, a professional network of almost 5,000 information technology workers, hobbyists, students, teachers, and future technologists. Volunteers have created 15 user groups and 3 conferences that train on the latest skills needed to obtain employment and succeed in today's increasingly tech-focused workforce. We teach and discuss topics ranging from design, coding, data science, hardware, mobile apps, and much more.
      </p>
      <Link href="/blog">
        <a>GO TO BLOG</a>
      </Link>
    </>
  )
}

HomePage.getLayout = page => <DefaultLayout>{page}</DefaultLayout>

export default HomePage
