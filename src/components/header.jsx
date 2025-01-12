import React from 'react'

function Header() {
  return (
    <div className='bg-[url("public/desktop/image-header.jpg")] bg-cover bg-center h-screen w-full'>
      <div className='max-w-[1300px] mx-auto p-[30px] flex justify-between items-center'>
        <img src="logo.svg" alt="" />
        <div className='flex items-center'>
            <ul className='flex justify-start items-center'>
                <li className='px-6 text-white text-lg font-semibold'><a href="#">About</a></li>
                <li className='px-6 text-white text-lg font-semibold'><a href="#">Services</a></li>
                <li className='px-6 text-white text-lg font-semibold'><a href="#">Projects</a></li>
            </ul>
            <button className='px-9 text-blue-500 text-lg font-Fraunces font-bold uppercase bg-white leading-[58px] rounded-full'>Contact</button>
        </div>
      </div>
      <h1 className='mt-[100px] font-Fraunces text-[50px] leading-[40px] font-black text-white text-center tracking-[8px] uppercase mb-10'>We are creatives</h1>
      <img 
        className='m-auto'
        src="icon-arrow-down.svg" 
        alt=""
      />
    </div>

  )
}

export default Header