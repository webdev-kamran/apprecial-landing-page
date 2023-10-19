import Image from "next/image";
import { TbCheck } from 'react-icons/tb'

export default function Tab2() {
    return (
        <>
            <div className="relative ">


                <Image
                    className="object-cover h-auto w-full max-w-screen-2xl mx-auto absolute inset-0 sm:static"
                    src={'/images/service-profile.png'}
                    width={800}
                    height={800}
                    loading="eager"
                    alt=" "
                />
                <div className="sm:absolute inset-0 flex items-end py-10 sm:bottom-40">
                    <div className='max-w-screen-wrap mx-auto relative px-4 w-full'>
                        <div className="space-y-5">
                            <h2 className="text-center text-zinc-800 text-4xl font-bold ">Service Profiles</h2>
                            <p className="text-[#011D41]/70 text-center">When registering for an account, there will be the option for you to choose between 2 different types of accounts. Personal, and Business, and it's as simple as it sounds. Business accounts require additional business verification before being granted access to any of our platforms, whereas personal accounts will require standard ID authentication through Driving Licences, Passports, Bank Statements, etc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}