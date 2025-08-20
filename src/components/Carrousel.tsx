import React from 'react'

import image10 from '/img/test_img_10.png'
import image2 from '/img/test_img_2.png'
import image3 from '/img/test_img_3.png'
//image 4
import image4 from '/img/test_img_4.png'

const Carrousel = () => {
  return (
    <div className="carousel ">
  
  <input className="carousel-locator" id="slide-1" type="radio" name="carousel-radio" hidden defaultChecked />
  <input className="carousel-locator" id="slide-2" type="radio" name="carousel-radio" hidden/>
  <input className="carousel-locator" id="slide-3" type="radio" name="carousel-radio" hidden />
  <input className="carousel-locator" id="slide-4" type="radio" name="carousel-radio" hidden />
  
 
  <div className="carousel-container">
    
    <figure className="relative w-full">
      <label className="absolute left-2 top-1/2 transform -translate-y-1/2 inline-flex items-center justify-center rounded-full border border-transparent px-4 py-2 text-base font-medium transition-colors bg-white/80 text-gray-900 hover:bg-white shadow-lg cursor-pointer" htmlFor="slide-4">‹</label>
      <label className="absolute right-2 top-1/2 transform -translate-y-1/2 inline-flex items-center justify-center rounded-full border border-transparent px-4 py-2 text-base font-medium transition-colors bg-white/80 text-gray-900 hover:bg-white shadow-lg cursor-pointer" htmlFor="slide-2">›</label>
      <img className="w-full h-auto rounded" 
      src={image10} alt="macOS Yosemite Wallpaper" />
    </figure>
    <figure className="relative w-full">
      <label className="absolute left-2 top-1/2 transform -translate-y-1/2 inline-flex items-center justify-center rounded-full border border-transparent px-4 py-2 text-base font-medium transition-colors bg-white/80 text-gray-900 hover:bg-white shadow-lg cursor-pointer" htmlFor="slide-1">‹</label>
      <label className="absolute right-2 top-1/2 transform -translate-y-1/2 inline-flex items-center justify-center rounded-full border border-transparent px-4 py-2 text-base font-medium transition-colors bg-white/80 text-gray-900 hover:bg-white shadow-lg cursor-pointer" htmlFor="slide-3">›</label>
      <img className="w-full h-auto rounded" 
      src={image2} alt="macOS Yosemite Wallpaper" />
    </figure>
    <figure className="relative w-full">
      <label className="absolute left-2 top-1/2 transform -translate-y-1/2 inline-flex items-center justify-center rounded-full border border-transparent px-4 py-2 text-base font-medium transition-colors bg-white/80 text-gray-900 hover:bg-white shadow-lg cursor-pointer" htmlFor="slide-2">‹</label>
      <label className="absolute right-2 top-1/2 transform -translate-y-1/2 inline-flex items-center justify-center rounded-full border border-transparent px-4 py-2 text-base font-medium transition-colors bg-white/80 text-gray-900 hover:bg-white shadow-lg cursor-pointer" htmlFor="slide-4">›</label>
      <img className="w-full h-auto rounded" 
      src={image3} alt="macOS El Capitan Wallpaper" />
    </figure>
    <figure className="relative w-full">
      <label className="absolute left-2 top-1/2 transform -translate-y-1/2 inline-flex items-center justify-center rounded-full border border-transparent px-4 py-2 text-base font-medium transition-colors bg-white/80 text-gray-900 hover:bg-white shadow-lg cursor-pointer" htmlFor="slide-3">‹</label>
      <label className="absolute right-2 top-1/2 transform -translate-y-1/2 inline-flex items-center justify-center rounded-full border border-transparent px-4 py-2 text-base font-medium transition-colors bg-white/80 text-gray-900 hover:bg-white shadow-lg cursor-pointer" htmlFor="slide-1">›</label>
      <img className="w-full h-auto rounded" 
      src={image4} alt="macOS El Capitan Wallpaper" />
    </figure>
  </div>
  
  <div className="mt-2 flex gap-2 justify-center">
    <label className="w-2 h-2 rounded-full bg-gray-300 sr-only cursor-pointer" htmlFor="slide-1">1</label>
    <label className="w-2 h-2 rounded-full bg-gray-300 sr-only cursor-pointer" htmlFor="slide-2">2</label>
    <label className="w-2 h-2 rounded-full bg-gray-300 sr-only cursor-pointer" htmlFor="slide-3">3</label>
    <label className="w-2 h-2 rounded-full bg-gray-300 sr-only cursor-pointer" htmlFor="slide-4">4</label>
  </div>
</div>
  )
}

export default Carrousel