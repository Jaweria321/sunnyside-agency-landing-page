import React from 'react'

function Testimonial() {
  return (
    <div className='max-w-[1100px] mx-auto text-center pt-[180px] pb-[156px]'>
        <h2 className='mb-[84px] text-[20px] font-Fraunces font-black uppercase text-blue-100 tracking-[5px]'>Client testimonials</h2>
        <div className='flex gap-3'>
            <div>
                <img 
                    src="image-emily.jpg" 
                    alt=""
                    className='mx-auto rounded-full w-[72px] h-[72px]'
                />
                <p className='text-[18px] font-semibold text-blue-300 mt-16 mb-20'>  We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                <p className="text-[18px] leading-3 font-Fraunces font-bold text-blue-500 mb-2">Emily R.</p>
                <p className="text-[18px] font-semibold text-blue-100">Marketing Director</p>
            </div>
            <div>
                <img 
                    src="image-emily.jpg" 
                    alt=""
                    className='mx-auto rounded-full w-[72px] h-[72px]'
                />
                <p className='text-[18px] font-semibold text-blue-300 mt-16 mb-20'>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                <p className="text-[18px] leading-3 font-Fraunces font-bold text-blue-500 mb-2">Thomas S.</p>
                <p className="text-[18px] font-semibold text-blue-100">Chief Operating Officer</p>
            </div>
            <div>
                <img 
                    src="image-emily.jpg" 
                    alt=""
                    className='mx-auto rounded-full w-[72px] h-[72px]'
                />
                <p className='text-[18px] font-semibold text-blue-300 mt-16 mb-20'>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                <p className="text-[18px] leading-3 font-Fraunces font-bold text-blue-500 mb-2">Jennie F.</p>
                <p className="text-[18px] font-semibold text-blue-100">Business Owner</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonial