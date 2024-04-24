import React from 'react'
import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import Link from 'next/link'

const getProd = async() => {

    const query = `*[_type == 'turban'][0...50]  | order(_createdAt desc) {
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
async function Tuban() {
    const datas = await getProd()
  return (
    <div className='flex flex-col transition  bg-[#e6e6e6]  ease-in-out delay-150 hover:-translate-y-1  duration-300   '>
    <h1 className=' items-center text-center bg-[#7CFC00] py-2 px-2 font-serif font-extrabold justify-center p-2 text-2xl md:text-3xl dark:text-white text-gray-700'>Turban</h1>
    <div className='grid grid-cols-1 p-2    gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid'>
        
        {datas.map(( p: any ) => (
        <div className='flex space-y-2  shadow-xl hover:bg-[#0FFF50] items-center justify-center hover:ease-out  rounded-lg p-3  flex-col  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-95  duration-300   ' key={p._id}>
        
            <div >

                <Image
                    src={p.images}
                    alt={p.name}
                    width={150}
                    height={150}
                    className="object-cover rounded-lg border"
                    />
                
                
            
            </div >
            
            <Link  href={`/turban/${p.slug}`} className="text-center items-center bg-green-600 px-2 py-2 rounded-xl  cursor-pointer p-2 justify-center"    > 
                <h1 className='font-bold tracking-wider text-gray-400' >{p.name}</h1>
                <h1 className='font-bold text-sm transition ease-in-out delay-150  hover:translate-y-1 hover:scale-95  duration-300  dark:text-white   text-violet-800'>View Product </h1>
            </Link>

        </div>
        ))}
    </div>
    </div>
  )
}

export default Tuban