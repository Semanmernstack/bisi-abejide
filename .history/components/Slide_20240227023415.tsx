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

        <Carousel className='w-1/2' {...settings}>
                <div   className='  relative'    >
                    <Image className='object-contain' width={200} height={100} src={one} alt='picone'   />
                    <span className='absolute sm:top-1/2 sm:left-1/2  top-40 left-[120px] bg-green-500 px-4 py-4   w-[200px]  text-white font-bold rounded-2xl'>Shop now</span>
                    
                </div>
                <div   className='  relative'  >
                    <Image className='object-contain' width={200} height={100} src={four} alt='pictwo'   />
                    <span className='absolute sm:top-1/2 sm:left-1/2 top-40 left-[120px] z-30 bg-green-500 px-4 py-4 w-[200px]  text-white font-bold rounded-2xl'>Shop now</span>
                    
                </div>
                <div  className='  relative'>
                    <Image className='object-contain' width={200} height={100}   src={three} alt='picthree ' />
                    <span className='absolute sm:top-1/2 sm:left-1/2 top-40 left-[120px] z-30 bg-green-500 px-4 py-4   w-[200px]  text-white font-bold rounded-2xl'>Shop now</span>
                  
                </div>
                
                <div className='  relative'>
                    <Image className='object-contain'  src={five} alt='picfoo' width={200} height={100 } />
                    <span className='absolute sm:top-1/2 sm:left-1/2 top-40 left-[120px] z-30 bg-green-500 px-4 py-4  w[200px]  text-white font-bold rounded-2xl'>Shop now</span>
                    
                </div>
                <div  className=' object-contain w-full relative'  >
                    <Image width={200} height={100}   src={two} alt='picfiv'  />
                    <span className='absolute sm:top-1/2 sm:left-1/2 top-40 left-[120px] z-30 bg-green-500 px-4 py-4  w-[200px]  text-white font-bold rounded-2xl'>Shop now</span>
                   
                </div>


              
                
        </Carousel> 
    </div> 
  )
}

export default Slide