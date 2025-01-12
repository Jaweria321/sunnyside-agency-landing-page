import React from 'react'

function Gallery() {
  return (
    <div className='flex md:flex-wrap'>
        <img className='w-1/4 md:hidden' src="desktop/image-gallery-milkbottles.jpg" alt="" />
        <img className='w-1/4 md:hidden' src="desktop/image-gallery-orange.jpg" alt="" />
        <img className='w-1/4 md:hidden' src="desktop/image-gallery-cone.jpg" alt="" />
        <img className='w-1/4 md:hidden' src="desktop/image-gallery-sugarcubes.jpg" alt="" />

        <img className='hidden md:block w-1/2' src="mobile/image-gallery-milkbottles.jpg" alt="" />
        <img className='hidden md:block w-1/2' src="mobile/image-gallery-orange.jpg" alt="" />
        <img className='hidden md:block w-1/2' src="mobile/image-gallery-cone.jpg" alt="" />
        <img className='hidden md:block w-1/2' src="mobile/image-gallery-sugar-cubes.jpg" alt="" />
    </div>
  )
}

export default Gallery