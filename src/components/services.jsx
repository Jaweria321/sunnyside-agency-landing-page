import React from 'react'

function Services() {
  return (
    <div className="" id='services'>
      <div className='flex justify-center items-center'>
        <div className='w-1/2'>
          <div className='w-[560px] ml-auto pr-[100px]'>
            <h2 className='text-[40px] font-Fraunces font-black leading-[45px] w-[330px] text-blue-500'>Transform your brand</h2>
            <p className='text-[18px] font-semibold text-blue-300 mt-7 mb-10'>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <a href='#' className='inline-block text-base font-Fraunces font-black relative leading-[12px] p-2 text-blue-500 uppercase tracking-[1px]  before:content-[""] before:w-full before:absolute before:-bottom-[6px] before:left-0 before:bg-yellow before:bg-opacity-20 before:inline-block before:h-4 before:rounded-md'>Learn More</a>
          </div>
        </div>
        <div className='w-1/2'>
          <img src="desktop/image-transform.jpg" alt="" />
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <div className='w-1/2'>
          <img src="desktop/image-stand-out.jpg" alt="" />
        </div>
        <div className='w-1/2'>
          <div className='w-[560px] mr-auto pl-[100px]'>
            <h2 className='text-[40px] font-Fraunces font-black leading-[45px] w-[330px] text-blue-500'>Stand out to the right audience</h2>
            <p className='text-[18px] font-semibold text-blue-300 mt-7 mb-10'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places..</p>
            <a href='#' className='inline-block text-base font-Fraunces font-black relative leading-[12px] p-2 text-blue-500 uppercase tracking-[1px]  before:content-[""] before:w-full before:absolute before:-bottom-[6px] before:left-0 before:bg-red-100 before:bg-opacity-20 before:inline-block before:h-4 before:rounded-md'>Learn More</a>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <div className='w-1/2 h-[600px] bg-[url("public/desktop/image-graphic-design.jpg")] bg-cover bg-center flex flex-col justify-end items-center text-center'>
          <h2 className='text-[30px] font-Fraunces font-black leading-[40px] w-[330px] text-cyan-100'>Graphic design</h2>
          <p className='text-[18px] font-semibold text-cyan-100 mt-7 mb-10 w-[330px]'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.</p>
        </div>
        <div className='w-1/2 h-[600px] bg-[url("public/desktop/image-photography.jpg")] bg-cover bg-center flex flex-col justify-end items-center text-center'>
          <h2 className='text-[30px] font-Fraunces font-black leading-[40px] w-[330px] text-blue-400 '>Graphic design</h2>
          <p className='text-[18px] font-semibold text-blue-400 mt-7 mb-10 w-[330px]'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.</p>
        </div>
      </div>
    </div>

  )
}

export default Services