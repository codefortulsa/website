import sticker from "/content/asset/cff sticker design@2x.png"
import Image from "next/image"
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div className="w-64 h-screen sm:relative bg-gray-900 shadow md:h-full flex-col justify-between hidden sm:flex">
        <div>
          <div className="flex items-center my-6 cursor-pointer">
            <Link href={'/'}>
              <Image src={sticker} alt="cft logo" />
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
            <li className="w-full font-extrabold text-cft-white hover:text-gray-500 cursor-pointer py-2 bg-cft-red">
              <p className="text-sm text-center">join us</p>
            </li>
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
      </div>
    </>
  )
}
