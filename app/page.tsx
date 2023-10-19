// import React, { useState } from "react";
"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from 'next/image'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Tab0 from './components/Tabs/Tab0'
import Tab1 from './components/Tabs/Tab1'
import Tab2 from './components/Tabs/Tab2'
import Tab3 from './components/Tabs/Tab3'
import Tab4 from './components/Tabs/Tab4'
import { TbChevronUp, TbChevronDown } from 'react-icons/tb'
 
const tab = [
  'Overview', 'Apprecial Accounts', 'Service Profiles', 'Support & Feedback', 'Remote Access'
]




export default function Home(props: any) {
  const [currentTab, setCurrentTab] = useState(0);
  const [tabDropdown, setTabDropdown] = useState(false);
  return (
    <>

      <div className='min-h-screen flex flex-col '>
        <Image
          className="object-cover absolute top-0 left-0 w-1/3 xl:w-auto"
          src={'/images/top-left-elips.svg'}
          width={600}
          height={600}
          loading="eager"
          alt=" "
        />


        <Header />
        <main className="flex-1 space-y-5">   
          <div className='max-w-screen-wrap px-4 mx-auto relative flex-1 w-full'>
                <Hero />

            <button onClick={() => setTabDropdown(!tabDropdown)}  className="flex md:hidden w-full rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary justify-between items-center"><span>Tabs List</span>{tabDropdown ? <TbChevronUp size="20"/> : <TbChevronDown size="20"/> }</button>

            <div className={`flex-col gap-3 py-3 bg-neutral-100 rounded-lg mt-2 md:gap-0 md:py-0 md:bg-transparent md:rounded-none md:mt-0 md:flex-row justify-between  md:flex ${tabDropdown ? 'flex' : 'hidden'}`}>
              {/* Tabs */}
              {tab.map((item:any, index:any) => {
                return (
                  <>
                    <button key={index} onClick={() => setCurrentTab(index)} className={`border-b-2 hover:border-primary text-center hover:text-primary text-lg font-medium  capitalize pb-2 ${currentTab === index ? 'border-transparent md:border-primary text-primary' : 'text-zinc-800 border-transparent'}`}>{item}</button>

                  </>
                );
              })}
            </div>
            </div>
          <div className="bg-neutral-50 overflow-hidden relative">


          

            <div className="relative">
        
              {currentTab === 0 ? (
                <Tab0 />
              ) :
                currentTab === 1 ? (
                  <Tab1 />
                  )
                  :
                  currentTab === 2 ? (
                  <Tab2 />
                    )
                    :
                    currentTab === 3 ? (
                      <Tab3 />
                      )
                      :
                      currentTab === 4 ? (
                        <Tab4 />
                        )
                        :
                        null}
</div>
            </div> 

        </main>

        <Footer />
      </div>

    </>
  )
}
