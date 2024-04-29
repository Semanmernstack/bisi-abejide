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
    
    <div className=" max-2xl mx-auto"> 

        <Carousel className='w-full ' {...settings}>
                <div   className='   relative'    >
                    <Image className=" object-center h-96  w-96" src={one} alt='picone'  />
                    <div className='flex flex-col absolute top-1/2 left-1/3 z-30   bg-slate-500 px-4 py-4    text-white font-bold rounded-2xl'>
                       
                        <h1 className=''>Welcome to <span className='text-lg md:text-xl'>LOLAFLO</span></h1>
                        <span className='text-xs animate-pulse'>Shop here</span>

                    </div >
                    
                    
                </div>
                <div   className='  relative'  >
                    <Image className='h-96 object-center w-full  '    src={four} alt='pictwo'   />
                        <div  className='flex flex-col absolute top-1/2 left-1/3 z-30   bg-slate-500 px-4 py-4   text-white font-bold rounded-2xl'>
                            <h1 className=''>Welcome to <span className='text-lg md:text-xl'>LOLAFLO</span></h1>
                            <span className='text-xs animate-pulse'>Shop here</span>
                        </div>

                    
                    
                    
                </div>
                <div  className=' relative'>
                    <Image className=' h-96 object-center w-full '    src={three} alt='picthree ' />
                    <div  className=' flex flex-col absolute top-1/2 left-1/3 z-30   bg-slate-500 px-4 py-4    text-white font-bold rounded-2xl'>
                        <h1 className=''>Welcome to <span className='text-lg md:text-xl'>LOLAFLO</span></h1>
                        <span className='text-xs animate-pulse'>Shop here</span>
                        </div>
                  
                </div>
                
                <div className='  relative '>
                    <Image className='h-96 object-center w-full'   src={five} alt='picfoo'  />
                    <div  className=' flex flex-col absolute top-1/2 left-1/3 z-30   bg-slate-500 px-4 py-4  text-white font-bold rounded-2xl'>
                        <h1 className=''>Welcome to <span className='text-lg md:text-xl'>LOLAFLO</span></h1>
                        <span className='text-xs animate-pulse'>Shop here</span>
                        </div>
                    
                </div>
                <div  className='   relative'  >
                    <Image className='h-96  object-center w-full'   src={two} alt='picfiv'/>
                    <div  className='flex flex-col absolute top-1/2 left-1/3 z-30   bg-slate-500 px-4 py-4  text-white font-bold rounded-2xl'>
                        <h1 className=''>Welcome to <span className='text-lg md:text-xl'>LOLAFLO</span></h1>
                        <span className='text-xs animate-pulse'>Shop here</span>
                        </div>
                   
                </div>


              
                
        </Carousel> 
    </div> 
  )
}

export default Slide