import Image from "next/image";
export default function Navbar() {
    return (
        <>
            <div className="flex justify-center md:justify-between gap-5 items-center flex-wrap md:flex-nowrap  ">
                <div className="space-y-7 md:max-w-md">
                    <h1 className="text-4xl xl:text-5xl text-zinc-800 xl:leading-snug font-bold text-center md:text-left">Take real control
                        of your devices</h1>
                    <p className="text-zinc-800 text-center md:text-left">Apprecial creates innovative digital products that make your day-to-day life more manageable.</p>
                   <div className="flex justify-center md:justify-start"><button className=" px-4 py-2.5 bg-primary hover:bg-primary-1 rounded-xl shadow ustify-center items-center gap-2.5 inline-flex text-white ease-in-out duration-300">Read More</button></div>
                </div>
                <div className="flex justify-center md:justify-end w-full md:w-auto 2xl:-mr-40">
                    <Image
                        className="object-cover "
                        src={'/images/hero-graphic.svg'}
                        width={583}
                        height={607}
                        loading="eager"
                        alt=" "
                    /></div>


            </div>
        </>

    )
}