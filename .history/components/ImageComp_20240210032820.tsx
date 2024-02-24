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
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2  gap-2  sm:items-center ">
            {images?.map((ima: any, index: any) => (
                <div className="flex items-center hover:bg-pink-200  boder shadow-lg" key={index}>
                    <Image
                        onClick={()=> handleClick(ima)}
                        
                         src={urlForImage(ima)}
                         alt="sec"
                         width={100}
                         height={100}
                         className=" rounded-2xl flex gap-2  hover:bg-pink-200  object-contain  cursor-pointer"
                        
                    />
                     
                </div>

            ))}
        </div>
        <div className="shadow-md">
            <Image 
                src={urlForImage(imageState)}
                alt="sec"
                width={300}
                height={300}
                
                className=" rounded-md  object-contain cursor-pointer"
               
           />
            
        </div>
       
        
    </div>
  )
}

export default ImageComp