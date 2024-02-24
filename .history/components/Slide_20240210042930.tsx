"use client"
import React from 'react'
import one from "../../public/one.png"
import two from "../../public/two.png"
import three from "../../public/three.png"
import four from "../../public/four.png"
import five from "../../public/five.png"





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
    
    <div className='w-full'> 

        <Carousel className='w-full' {...settings}>
                <div   className='w-full object-cover'    >
                    <Image width={100} height={100} src={one} alt='picone'   />
                    
                </div>
                <div   className='w-full object-cover'  >
                    <Image width={100} height={100} src={four} alt='pictwo'   />
                    
                </div>
                <div  className='w-full object-cover'>
                    <Image width={100} height={100}   src={three} alt='picthree ' />
                  
                </div>
                
                <div className='w-full object-cover'>
                    <Image  src={five} alt='picfoo' width={100} height={100 } />
                    
                </div>
                <div  className='w-full object-cover'  >
                    <Image width={100} height={100}  src={two} alt='picfiv'  />
                   
                </div>


              
                
        </Carousel> 
    </div>


        
            
        
    
   
   
  )
}

export default Slide