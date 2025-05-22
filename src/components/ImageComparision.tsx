import React from 'react'
import image25 from '/img/test_img_25.png'
import image26 from '/img/test_img_26.png'

const ImageComparision = () => {
  return (
    
        <div className='column '>

        <div className="comparison-slider">
        <figure className="comparison-before">
            <img className="rounded" 
            src={image26} alt="" />
            
            <div className="comparison-label">Después</div>
        </figure>

        <figure className="comparison-after">
            <img src={image25} alt="" />
            <div className="comparison-label">Antes</div>
            <textarea className="comparison-resizer" readOnly></textarea>
        </figure>
        </div>

        </div>
  );
}

export default ImageComparision