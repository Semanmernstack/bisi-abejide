
import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const getProd = async() => {

    const query = `*[_type == 'ankara'][0...8]  | order(_createdAt desc) {
        _id,
          price,
          name,
          "slug": slug.current,
          "category": category -> name,
          "images": images[0].asset->url
          
      }`
      
    
    const data = await client.fetch(query)
   
    return data

}

async function Anka() {
    const datas = await getProd()
  return (
    <div className='flex flex-col transition hover:bg-green-200 ease-in-out delay-150 hover:-translate-y-1  duration-300   '>
    <h1 className=' items-center text-center font-serif font-extrabold justify-center p-4 text-2xl md:text-3xl dark:text-white text-gray-700'>Ankara</h1>
    <div className='grid grid-cols-1 p-4     gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid'>
        
        {datas.map(( p: any ) => (
        <div className='flex space-y-2 border-4  items-center justify-center hover:ease-out  hover:bg-purple-200 rounded-lg p-3  flex-col  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-95  duration-300   ' key={p._id}>
        
            <div >

                <Image
                    src={p.images}
                    alt={p.name}
                    width={100}
                    height={100}
                    className="object-contain rounded-lg border"
                    />
                
                
            
            </div >
            
            <div className="text-center items-center  cursor-pointer p-2 justify-center"    > 
                <h1 className='font-bold tracking-wider text-gray-400' >{p.name}</h1>
                <h1 className='font-bold text-sm transition ease-in-out delay-150  hover:translate-y-1 hover:scale-95  duration-300  dark:text-white   text-violet-800'>View Product </h1>
            </div>

        </div>
        ))}
    </div>
    </div>
    
  )
}

export default Anka