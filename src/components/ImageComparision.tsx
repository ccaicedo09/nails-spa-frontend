import React from 'react'
import image16 from '/img/test_img_16.png'

const ImageComparision = () => {
  return (
    
        <div className='md:col-span-6'>

        <div className="relative w-full overflow-hidden rounded border border-gray-200">
        <figure className="relative">
            <img className="rounded" 
            src={image16} alt="" />
            
            <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded">Antes</div>
        </figure>

        <figure className="relative">
            <img src="https://plus.unsplash.com/premium_photo-1670348051093-a3f94b408bcb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded">Despues</div>
            <textarea className="absolute inset-0 opacity-0" readOnly></textarea>
        </figure>
        </div>

        </div>
        

    
    
  )
}

export default ImageComparision