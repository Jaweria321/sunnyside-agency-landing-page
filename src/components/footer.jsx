import React from 'react'

function Footer() {
  return (
    <footer className='bg-cyan-300 py-[72px] text-center'>
        <img src="logo-footer.svg" alt="" className='mx-auto' />
        <ul className='flex justify-center items-center gap-[56px] text-blue-400 font-semibold mt-[42px]'>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Projects</a></li>
        </ul>
        <ul className='flex justify-center items-center gap-[28px] text-blue-400 font-semibold mt-[88px]'>
            <li><a href=""><img src="icon-facebook.svg" alt="" /></a></li>
            <li><a href=""><img src="icon-instagram.svg" alt="" /></a></li>
            <li><a href=""><img src="icon-twitter.svg" alt="" /></a></li>
            <li><a href=""><img src="icon-pinterest.svg" alt="" /></a></li>
        </ul>
    </footer>
  )
}

export default Footer