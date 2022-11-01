import sticker from "/public/asset/cff-sticker-design-2x.png"
import Image from "next/image"
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <nav className="w-screen lg:w-64 bg-cft-black shadow flex-col justify-between">
        <div>
          <div className="flex items-center justify-center my-6 cursor-pointer">
            <Link href={'/'} passHref={true}>
              <Image src={sticker} alt="cft logo" width={300} height={300} objectPosition="50% 50%" />
            </Link>
          </div>
          <ul>
            <Link href={'/projects'}>
              <li className="w-full font-extrabold text-cft-black hover:text-gray-500 cursor-pointer py-2 bg-cft-white ">
                <p className="text-sm text-center">
                  projects
                </p>
              </li>
            </Link>
            <Link href={'/connections'}>
              <li className="w-full font-extrabold text-cft-white hover:text-gray-500 cursor-pointer py-2 bg-cft-red">
                <p className="text-sm text-center">join us</p>
              </li>
            </Link>
            <Link href={'/events'}>
              <li className="w-full font-extrabold text-cft-black hover:text-gray-500 cursor-pointer py-2 bg-cft-white">
                <p className="text-sm text-center">
                  events
                </p>
              </li>
            </Link>
            <Link href={'/blog'}>
              <li className="w-full font-extrabold text-cft-white hover:text-gray-500 cursor-pointer py-2 bg-cft-blue">
                <p className="text-sm text-center">
                  blog
                </p>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav;
