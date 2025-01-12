import React, { useState } from 'react'

function Header() {
  const [isOpen, setIsOpen]  = useState(false)
  return (
    <div className='bg-[url("desktop/image-header.jpg")] bg-cover bg-center h-screen w-full md:bg-[url("public/mobile/image-header.jpg")]'>
      <div className='max-w-[1300px] mx-auto p-[30px] flex justify-between items-center relative'>
        <img src="logo.svg" alt="" />
        <div className='flex items-center md:hidden'>
            <ul className='flex justify-start items-center'>
                <li className='px-6 text-white text-lg font-semibold'><a href="#">About</a></li>
                <li className='px-6 text-white text-lg font-semibold'><a href="#">Services</a></li>
                <li className='px-6 text-white text-lg font-semibold'><a href="#">Projects</a></li>
            </ul>
            <button className='px-9 text-blue-500 text-lg font-Fraunces font-bold uppercase bg-white leading-[58px] rounded-full'>Contact</button>
        </div>
        <div className='relative hidden md:block'>
          <button onClick={() => setIsOpen(prev => !prev)}><img src="icon-hamburger.svg" alt="" /></button>
          <div className= {`${isOpen ? 'md:block' : 'hidden'} w-[520px] sm:w-[280px] ml-9 bg-white p-8 absolute right-0 top-20 before:content-[""] before:absolute before:-top-5 before:right-0 before:border-r-[28px] before:border-t-[28px] before:border-r-white custom-border-t-transparent`}>
            <ul className='flex justify-start items-center flex-col gap-5'>
                <li className='px-6 text-blue-200 text-lg font-semibold'><a href="#">About</a></li>
                <li className='px-6 text-blue-200 text-lg font-semibold'><a href="#">Services</a></li>
                <li className='px-6 text-blue-200 text-lg font-semibold'><a href="#">Projects</a></li>
                <button className='px-9 text-blue-500 text-lg font-Fraunces font-bold uppercase bg-yellow leading-[58px] rounded-full'>Contact</button>
            </ul>
          </div>
        </div>
      </div>
      <h1 className='mt-[100px] font-Fraunces text-[50px] leading-[40px] font-black text-white text-center tracking-[8px] uppercase mb-10 md:text-[30px]'>We are creatives</h1>
      <img 
        className='m-auto'
        src="icon-arrow-down.svg" 
        alt=""
      />
    </div>

  )
}

export default Header