
import Link from "next/link";
import { TbBrandFacebook, TbBrandTwitter, TbBrandInstagram, TbBrandLinkedin } from 'react-icons/tb'
import { HiViewGrid } from 'react-icons/hi'
import Image from "next/image";
export default function Footer() {
  return (


    <div className="py-5 bg-footer">
      <div className='max-w-screen-wrap mx-auto relative px-4 flex-1 w-full flex flex-wrap items-center gap-6 justify-between '>
        <div className="flex flex-nowrap gap-3 items-center justify-center w-full sm:w-auto ">
          <HiViewGrid size="30" className="text-white shrink-0" />
          <span className="text-xs lg:text-sm text-white/80">
            Copyright &copy; Apprecial LTD. {new Date().getFullYear()}. All Rights
            Reserved.
          </span>
        </div>
        <div className="flex items-center justify-center w-full sm:w-auto gap-3 xl:gap-5">
          <Link
            href="javascript:void(0)"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <TbBrandFacebook size="20" />
          </Link>
          <Link
            href="javascript:void(0)"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <TbBrandTwitter size="20" />
          </Link>
          <Link
            href="javascript:void(0)"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <TbBrandInstagram size="20" />
          </Link>
          <Link
            href="javascript:void(0)"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <TbBrandLinkedin size="20" />
          </Link>
        </div>
        <div className="flex items-center flex-wrap gap-x-5 xl:gap-x-10 gap-y-5 justify-center w-full sm:w-auto ">
          <Link href="#" className="text-xs lg:text-sm font-medium text-white hover:text-primary ease-in-out duration-300 ">
            Site Map
          </Link>
          <Link href="#" className="text-xs lg:text-sm font-medium text-white hover:text-primary ease-in-out duration-300 ">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs lg:text-sm font-medium text-white hover:text-primary ease-in-out duration-300 ">
            Terms
          </Link>
          <Link href='https://apprecial.com' className='rounded border border-[#BB6A37] text-[#BB6A37] hover:bg-[#BB6A37] hover:text-white ease-in-out duration-300 py-1 px-3 text-sm  text-center whitespace-nowrap'>Go to Apprecial</Link>
        </div>
      </div>
    </div>
  )
}