 
import Link from "next/link"; 
import {HiViewGridAdd, HiViewGrid} from 'react-icons/hi'
 
import Image from "next/image";
export default function Header() {
    return (

      <div className='max-w-screen-wrap mx-auto relative px-4 w-full'>
        <div className="flex items-center gap-6 justify-between py-5">
          <Link href="/">           
            <Image
              className="object-cover  "
              src={'/images/logo-dashboard.svg'}
              width={180}
              height={24}
              loading="eager"
              alt=" "
            />
          </Link>

        <Link href="https://dash.apprecial.com" target="_blank" rel="noopener noreferrer" className='rounded-xl bg-white shadow border-2 border-primary text-primary  font-semibold leading-snug flex gap-2 py-1.5 px-2 sm:px-4 items-center justify-center hover:text-white ease-in-out duration-300 hover:bg-primary text-sm sm:text-lg' >
            <HiViewGrid size="30" />
              Dashboard 
        </Link>
      </div>
      </div>
       
    )
}