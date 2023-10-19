import Image from "next/image";
export default function Tab0() {
    return (
        <>
        <div className="relative py-10">
            <Image
                    className="object-cover absolute -bottom-20 left-1/2 -translate-x-1/2 opacity-10 w-3/4"
                    src={'/images/bottom-elips.svg'}
                    width={1000}
                    height={1000}
                    loading="eager"
                    alt=" "
                />
        
            <div className="relative flex justify-end">
                

                <Image
                    className="object-cover relative lg:hidden w-5/6 sm:w-3/5  h-auto"
                    src={'/images/dashboard_screen_mobile_new_v2.png'}
                    width={1000}
                    height={600}
                    loading="eager"
                    alt=" "
                />

                <Image
                    className="object-cover relative w-1/2 xl:w-auto hidden lg:block"
                    src={'/images/dashboard_screen2.svg'}
                    width={800}
                    height={400}
                    loading="eager"
                    alt=" "
                />




            </div>
            <div className="md:absolute pt-10 sm:pt-20 md:pt-0 inset-0 z-10 flex justify-center items-center">
                <div className='max-w-screen-wrap mx-auto relative px-4 w-full'>
                    <div className="md:w-1/2 md:max-w-sm space-y-3">
                        <h2 className="text-zinc-800 text-4xl font-bold ">About The <span className="text-primary">Dashboard</span></h2>
                        <p className="text-[#011D41]/70">Unlock the full potential of Apprecial's mobile-based services with our intuitive and feature-rich dashboard. It allows you to stay in control by providing remote access so you can easily manage your subscriptions, track account activity, or connect with our support team, all from one convenient location.</p>
                    </div>
                </div>
            </div>
            </div>
        </>


    )
}