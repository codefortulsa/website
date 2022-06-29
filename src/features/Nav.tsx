import sticker from "/content/asset/cff sticker design@2x.png"
import Image from "next/image"

export default function Nav() {
  return (
    <>
      <div className="w-64 h-screen sm:relative bg-gray-900 shadow md:h-full flex-col justify-between hidden sm:flex">
        <div className="px-8">
          <div className="flex items-center pt-10">
            <Image src={sticker} alt="cft logo" />
          </div>
          <ul className="mt-12">
            <li className="w-full text-gray-300 hover:text-gray-500 cursor-pointer mb-6">
              <p className="text-sm text-center ml-2">projects</p>
            </li>
            <li className="w-full text-gray-300 hover:text-gray-500 cursor-pointer mb-6">
              <p className="text-sm text-center ml-2">join us</p>
            </li>
            <li className="w-full text-gray-300 hover:text-gray-500 cursor-pointer mb-6">
              <p className="text-sm text-center ml-2">events</p>
            </li>
            <li className="w-full text-gray-300 hover:text-gray-500 cursor-pointer mb-6">
              <p className="text-sm text-center ml-2">blog</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
