"use client"
import React from 'react'
import one from "../public/one.jpg"
import two from "../public/two.jpg"
import three from "../public/three.jpg"
import four from "../public/four.jpg"
import five from "../public/five.jpg"





import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'


const settings = {
    showArrows: false,
    interval: 2000,
    dynamicHeight: false,
    stopOnHover: false,
    infiniteLoop: true,
    showStatus: false,
    transitionTime: 500,
    showThumbs: false,
    showIndicators: true,
    swipeable: true,
    emulateTouch: true,
    autoPlay: true,
  };



 function Slide() {
    
    
    
  return (
    
    <div className=""> 

        <Carousel className='w-full' {...settings}>
                <div   className=' object-cover'    >
                    <Image width={200} height={100} src={one} alt='picone'   />
                    
                </div>
                <div   className=' object-cover'  >
                    <Image width={200} height={100} src={four} alt='pictwo'   />
                    
                </div>
                <div  className=' object-cover'>
                    <Image width={200} height={100}   src={three} alt='picthree ' />
                  
                </div>
                
                <div className=' object-cover'>
                    <Image  src={five} alt='picfoo' width={100} height={100 } />
                    
                </div>
                <div  className=' object-cover'  >
                    <Image width={20000} height={100}   src={two} alt='picfiv'  />
                   
                </div>


              
                
        </Carousel> 
    </div> 
  )
}

export default Slide