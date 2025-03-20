import React from 'react'

const Carrousel = () => {
  return (
    <div className="carousel">
  
  <input className="carousel-locator" id="slide-1" type="radio" name="carousel-radio" hidden defaultChecked />
  <input className="carousel-locator" id="slide-2" type="radio" name="carousel-radio" hidden/>
  <input className="carousel-locator" id="slide-3" type="radio" name="carousel-radio" hidden />
  <input className="carousel-locator" id="slide-4" type="radio" name="carousel-radio" hidden />
  
 
  <div className="carousel-container">
    
    <figure className="carousel-item">
      <label className="item-prev btn btn-action btn-lg" htmlFor="slide-4"><i className="icon icon-arrow-left"></i></label>
      <label className="item-next btn btn-action btn-lg" htmlFor="slide-2"><i className="icon icon-arrow-right"></i></label>
      <img className="img-responsive rounded" src="https://st.depositphotos.com/1758925/4153/i/950/depositphotos_41535405-stock-photo-woman-applying-nail-varnish-to.jpg" alt="macOS Yosemite Wallpaper" />
    </figure>
    <figure className="carousel-item">
      <label className="item-prev btn btn-action btn-lg" htmlFor="slide-1"><i className="icon icon-arrow-left"></i></label>
      <label className="item-next btn btn-action btn-lg" htmlFor="slide-3"><i className="icon icon-arrow-right"></i></label>
      <img className="img-responsive rounded" src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpbHN8ZW58MHx8MHx8fDA%3D" alt="macOS Yosemite Wallpaper" />
    </figure>
    <figure className="carousel-item">
      <label className="item-prev btn btn-action btn-lg" htmlFor="slide-2"><i className="icon icon-arrow-left"></i></label>
      <label className="item-next btn btn-action btn-lg" htmlFor="slide-4"><i className="icon icon-arrow-right"></i></label>
      <img className="img-responsive rounded" src="https://images.unsplash.com/photo-1587729927069-ef3b7a5ab9b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmFpbHN8ZW58MHx8MHx8fDA%3D" alt="macOS El Capitan Wallpaper" />
    </figure>
    <figure className="carousel-item">
      <label className="item-prev btn btn-action btn-lg" htmlFor="slide-3"><i className="icon icon-arrow-left"></i></label>
      <label className="item-next btn btn-action btn-lg" htmlFor="slide-1"><i className="icon icon-arrow-right"></i></label>
      <img className="img-responsive rounded" src="https://plus.unsplash.com/premium_photo-1670348051093-a3f94b408bcb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="macOS El Capitan Wallpaper" />
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