import React from 'react'
import './gallery.css'
import Footer from '../Home/Footer'
import Navbar from '../Home/Navbar'
import '../Home/Navbar.css'

import LightGallery from 'lightgallery/react/Lightgallery.es5'

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-autoplay.css'
import 'lightgallery/css/lg-share.css'
import 'lightgallery/css/lg-rotate.css'

import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgShare from 'lightgallery/plugins/share'
import lgRotate from 'lightgallery/plugins/rotate'

function Gallery() {
  return (
    <div className='gallery'>
    <Navbar/>
    

      <div className="container-gallery">
        <div className="gallery-img">
          <span id='p1'>GALL</span>
          <span id='p2'>ERY</span>
        </div>
        <div className="glry">
      
      <LightGallery 
        speed={500}
        plugins={[lgAutoplay,lgRotate,lgThumbnail,lgZoom,lgShare]}>
        
        {/* <div className="container-gallery">
          <div className="glry"> */}
          <h1 className='gallery-h1'>Cardio</h1>
            <a href="cardio-1.webp">
              <img className='img' src="cardio-1.webp" alt="1" height={300} width={300}/>
            </a>
            <a href="cardio-2.jpg">
              <img className='img' src="cardio-2.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="cardio-3.jpg">
              <img className='img' src="cardio-3.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="cardio-4.jpg">
              <img className='img' src="cardio-4.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="cardio-5.jpg">
              <img className='img' src="cardio-5.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="cardio-6.jpg">
              <img className='img' src="cardio-6.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="wt-1.jpg">
            <h1 className='gallery-h1'>Strength Training</h1>
              <img className='img' src="wt-1.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="wt-2.jpg">
              <img className='img' src="wt-2.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="wt-3.jpg">
              <img className='img' src="wt-3.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="wt-4.jpg">
              <img className='img' src="wt-4.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="wt-5.jpg">
              <img className='img' src="wt-5.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="wt-6.jpg">
              <img className='img' src="wt-6.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="wt-7.jpg">
              <img className='img' src="wt-7.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="wt-8.jpg">
              <img className='img' src="wt-8.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="wt-9.jpg">
              <img className='img' src="wt-9.jpg" alt="1" height={300} width={300}/>
            </a>
            <h1 className='gallery-h1'>People</h1>
            <a href="ppl-1.jpg">
              <img className='img' src="ppl-1.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="ppl-2.jpg">
              <img className='img' src="ppl-2.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="ppl-3.avif">
              <img className='img' src="ppl-3.avif" alt="1" height={300} width={300}/>
            </a>
            <a href="ppl-4.webp">
              <img className='img' src="ppl-4.webp" alt="1" height={300} width={300}/>
            </a>
            <a href="ppl-5.jpg">
              <img className='img' src="ppl-5.jpg" alt="1" height={300} width={300}/>
            </a>
            <a href="ppl-6.webp">
              <img className='img' src="ppl-6.webp" alt="1" height={300} width={300}/>
            </a>
          
      </LightGallery>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Gallery