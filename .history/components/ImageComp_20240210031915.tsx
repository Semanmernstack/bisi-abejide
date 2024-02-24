"use client"
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import React, { useState } from 'react'

function ImageComp({images}: any) {
    const [imageState, setImageState] = useState(images[0])
    const handleClick = (ima: any) => {
        setImageState(ima)
    }
  return (
    <div className=" flex flex-col bg-transparent">
        <div className="p-5 grid grid-cols-3  gap-2  sm:items-center md:justify-center ">
            {images?.map((ima: any, index: any) => (
                <div className=" items-center justify-center hover:bg-pink-200  boder shadow-lg" key={index}>
                    <Image
                        onClick={()=> handleClick(ima)}
                        
                         src={urlForImage(ima)}
                         alt="sec"
                         width={70}
                         height={70}
                         className=" rounded-md  hover:bg-pink-200  object-contain  cursor-pointer"
                        
                    />
                     
                </div>

            ))}
        </div>
        <div className="shadow-md">
            <Image 
                src={urlForImage(imageState)}
                alt="sec"
                width={160}
                height={160}
                className=" rounded-md h-full  w-full  object-cover  cursor-pointer"
               
           />
            
        </div>
       
        
    </div>
  )
}

export default ImageComp