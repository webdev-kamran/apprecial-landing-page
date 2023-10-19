import Image from "next/image";
import { TbCheck } from 'react-icons/tb'

export default function Tab3() {
    return (
        <>
            <div className="relative ">


                <Image
                    className="object-cover h-auto w-full mx-auto absolute inset-0 sm:static opacity-40 lg:opacity-100"
                    src={'/images/support-bg.svg'}
                    width={800}
                    height={800}
                    loading="eager"
                    alt=" "
                />
                <div className="sm:absolute inset-0 flex items-center justify-center py-10  ">
                    <div className='max-w-lg mx-auto relative px-4 w-full '>
                        <div className="space-y-5">
                        <Image
                    className="object-cover h-auto w-auto mx-auto "
                    src={'/images/icons-share-ideas.svg'}
                    width={60}
                    height={60}
                    loading="eager"
                    alt=" "
                />
                            <h2 className="text-center text-zinc-800 text-3xl sm:text-4xl font-bold ">Share Ideas & Contribute</h2>
                            <p className="text-[#011D41]/70 text-center">You are welcome to share ideas for new app features or suggestions for the current ones you believe can be improved. Voicing your opinion can get you great rewards and credits.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}