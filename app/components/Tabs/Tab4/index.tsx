import Image from "next/image";
import { TbCheck } from 'react-icons/tb'
const list = [
    "Up to 5 devices protected", "Up to 5 devices protected", "Up to 5 devices protected", "Up to 5 devices protected",
]
export default function Tab4() {
    return (
        <>
            <div className="relative py-10 md:py-28">
                <div className='max-w-screen-wrap mx-auto relative px-4 w-full'>
                    <div className="space-y-10">
                        {/*Apprecial intro*/}
                        <div className="space-y-5">
                            <h2 className="text-center text-zinc-800 text-4xl font-bold ">Remote <span className="text-primary">Access</span></h2>
                            <p className="text-[#011D41]/70 text-center">By utilizing the power of the Dashboard, this will allow you to remotely access Apprecial services from anywhere in the world. manage your account and more.</p>
                        </div>


                        {/* Blocks */}
                        <div className="flex flex-col gap-10">
                            <div className="bg-white rounded-3xl shadow p-5 lg:p-10 flex flex-col sm:flex-row items-center gap-10 xl:gap-20">
                                <div className="w-80">
                                    <Image
                                        className="object-cover h-auto w-auto"
                                        src={'/images/remote-access-1.gif'}
                                        width={800}
                                        height={800}
                                        loading="eager"
                                        alt=" "
                                    />
                                </div>
                                <div className="space-y-3 max-w-2xl text-center sm:text-left">
                                    <h3 className="text-zinc-800 font-medium capitalize text-2xl">Take Control</h3>
                                    <p className="text-[#011D41]/70 ">This and everything following the text is a placeholder don’t need much here but some small description about the page that could be anything.</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl shadow p-5 lg:p-10 flex flex-col sm:flex-row-reverse items-center gap-10 xl:gap-20">
                                <div className="w-80">
                                    <Image
                                        className="object-cover h-auto w-auto"
                                        src={'/images/remote-access-2.gif'}
                                        width={800}
                                        height={800}
                                        loading="eager"
                                        alt=" "
                                    />
                                </div>
                                <div className="space-y-3 max-w-2xl text-center sm:text-left">
                                    <h3 className="text-zinc-800 font-medium capitalize text-2xl">Centralisation</h3>
                                    <p className="text-[#011D41]/70 ">This and everything following the text is a placeholder don’t need much here but some small description about the page that could be anything.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}