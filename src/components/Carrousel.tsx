import React from 'react'

import image10 from '/img/test_img_10.png'
import image2 from '/img/test_img_2.png'
import image3 from '/img/test_img_3.png'
//image 4
import image4 from '/img/test_img_4.png'

const Carrousel = () => {
  return (
    <div className="carousel mt-80 mx-30">
  
  <input className="carousel-locator" id="slide-1" type="radio" name="carousel-radio" hidden defaultChecked />
  <input className="carousel-locator" id="slide-2" type="radio" name="carousel-radio" hidden/>
  <input className="carousel-locator" id="slide-3" type="radio" name="carousel-radio" hidden />
  <input className="carousel-locator" id="slide-4" type="radio" name="carousel-radio" hidden />
  
 
  <div className="carousel-container">
    
    <figure className="carousel-item">
      <label className="item-prev btn btn-action btn-lg" htmlFor="slide-4"><i className="icon icon-arrow-left"></i></label>
      <label className="item-next btn btn-action btn-lg" htmlFor="slide-2"><i className="icon icon-arrow-right"></i></label>
      <img className="img-responsive rounded" 
      src={image10} alt="macOS Yosemite Wallpaper" />
    </figure>
    <figure className="carousel-item">
      <label className="item-prev btn btn-action btn-lg" htmlFor="slide-1"><i className="icon icon-arrow-left"></i></label>
      <label className="item-next btn btn-action btn-lg" htmlFor="slide-3"><i className="icon icon-arrow-right"></i></label>
      <img className="img-responsive rounded" 
      src={image2} alt="macOS Yosemite Wallpaper" />
    </figure>
    <figure className="carousel-item">
      <label className="item-prev btn btn-action btn-lg" htmlFor="slide-2"><i className="icon icon-arrow-left"></i></label>
      <label className="item-next btn btn-action btn-lg" htmlFor="slide-4"><i className="icon icon-arrow-right"></i></label>
      <img className="img-responsive rounded" 
      src={image3} alt="macOS El Capitan Wallpaper" />
    </figure>
    <figure className="carousel-item">
      <label className="item-prev btn btn-action btn-lg" htmlFor="slide-3"><i className="icon icon-arrow-left"></i></label>
      <label className="item-next btn btn-action btn-lg" htmlFor="slide-1"><i className="icon icon-arrow-right"></i></label>
      <img className="img-responsive rounded" 
      src={image4} alt="macOS El Capitan Wallpaper" />
    </figure>
  </div>
  
  <div className="carousel-nav">
    <label className="nav-item text-hide c-hand" htmlFor="slide-1">1</label>
    <label className="nav-item text-hide c-hand" htmlFor="slide-2">2</label>
    <label className="nav-item text-hide c-hand" htmlFor="slide-3">3</label>
    <label className="nav-item text-hide c-hand" htmlFor="slide-4">4</label>
  </div>
</div>
  )
}

export default Carrousel