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

        <Carousel className='   ' {...settings}>
                <div   className='  relative'    >
                    <Image className=" object-contain"width={100} height={100} src={one} alt='picone'  />
                    <div className='flex flex-colabsolute top-1/2 left-1/3 z-30   bg-slate-500 px-4 py-4    text-white font-bold rounded-2xl'>
                       
                        <h1 className=''>Welcome to <span className='text-lg md:text-xl'>LOLAFLO</span></h1>
                        <span className='text-xs animate-pulse'>Shop here</span>

                    </div >
                    
                    
                </div>
                <div   className='  relative'  >
                    <Image className='object-contain' width={100} height={100} src={four} alt='pictwo'   />
                        <div  className='flex flex-col absolute top-1/2 left-1/3 z-30   bg-slate-500 px-4 py-4   text-white font-bold rounded-2xl'>
                            <h1 className=''>Welcome to <span className='text-lg md:text-xl'>LOLAFLO</span></h1>
                            <span className='text-xs animate-pulse'>Shop here</span>
                        </div>

                    
                    
                    
                </div>
                <div  className='  relative'>
                    <Image className='object-contain' width={100} height={100}   src={three} alt='picthree ' />
                    <div  className=' flex flex-col absolute top-1/2 left-1/3 z-30   bg-slate-500 px-4 py-4    text-white font-bold rounded-2xl'>
                        <h1 className=''>Welcome to <span className='text-lg md:text-xl'>LOLAFLO</span></h1>
                        <span className='text-xs animate-pulse'>Shop here</span>
                        </div>
                  
                </div>
                
                <div className='  relative '>
                    <Image className='object-contain'  src={five} alt='picfoo' width={100} height={100 } />
                    <div  className=' flex flex-col absolute top-1/2 left-1/3 z-30   bg-slate-500 px-4 py-4  text-white font-bold rounded-2xl'>
                        <h1 className=''>Welcome to <span className='text-lg md:text-xl'>LOLAFLO</span></h1>
                        <span className='text-xs animate-pulse'>Shop here</span>
                        </div>
                    
                </div>
                <div  className=' w-full relative'  >
                    <Image className='object-contain' width={100} height={100}   src={two} alt='picfiv'  />
                    <div  className='flex flex-col absolute top-1/2 left-1/3 z-30   bg-slate-500 px-4 py-4   w-[200px]  text-white font-bold rounded-2xl'>
                        <h1 className=''>Welcome to <span className='text-lg md:text-xl'>LOLAFLO</span></h1>
                        <span className='text-xs animate-pulse'>Shop here</span>
                        </div>
                   
                </div>


              
                
        </Carousel> 
    </div> 
  )
}

export default Slide