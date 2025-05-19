import React from 'react'
import image16 from '/img/test_img_16.png'

const ImageComparision = () => {
  return (
    
        <div className='column col-md-12 col-6'>

        <div className="comparison-slider">
        <figure className="comparison-before">
            <img className="rounded" 
            src={image16} alt="" />
            
            <div className="comparison-label">Antes</div>
        </figure>

        <figure className="comparison-after">
            <img src="https://plus.unsplash.com/premium_photo-1670348051093-a3f94b408bcb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="comparison-label">Después</div>
            <textarea className="comparison-resizer" readOnly></textarea>
        </figure>
        </div>

        </div>
        

    
    
  )
}

export default ImageComparision