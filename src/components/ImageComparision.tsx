import React from 'react'

const ImageComparision = () => {
  return (
    <div className='vp-raw docs-demo columns'>
        <div className='column col-12'>

        <div className="comparison-slider">
        <figure className="comparison-before">
            <img className="rounded" src="https://spectre-org.github.io/spectre-docs/img/macos-sierra-2.jpg" alt="" />
            
            <div className="comparison-label">Before</div>
        </figure>

        <figure className="comparison-after">
            <img src="https://plus.unsplash.com/premium_photo-1670348051093-a3f94b408bcb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="comparison-label">After</div>
            <textarea className="comparison-resizer" readOnly></textarea>
        </figure>
        </div>

        </div>
        

    </div>
    
  )
}

export default ImageComparision