import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { ArrowBottomRightIcon, ThickArrowRightIcon } from '@radix-ui/react-icons'
import { ArrowBigRight, MoreHorizontal, MoreHorizontalIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function getProduct() {
    const query = `*[_type == 'product'][0...8]  | order(_createdAt desc) {
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

async function Product() {
    const datas = await getProduct()

  return (
    <div className='flex flex-col transition bg-white   ease-in-out delay-150 hover:-translate-y-1  duration-300  '>
        <h1 className=' items-center text-center font-serif font-extrabold justify-center p-4 text-2xl md:text-3xl dark:text-white text-gray-700'> Categories</h1>
        <div className='grid grid-cols-1 p-4     gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid'>
            
        {datas.map(( p: any ) => (
        <div className='flex space-y-2 border-shadow shadow-xl  items-center justify-center hover:ease-out  hover:bg-purple-200 rounded-lg p-3  flex-col  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-95  duration-300   ' key={p._id}>
          
          <div >

          <Image
                  src={p.images}
                  alt={p.name}
                  width={200}
                  height={200}
                  className="object-contain rounded-lg border"
                />
            
            
          
          </div >
          
          <Link className="text-center items-center bg-green-500 px-2 py-2 rounded-xl text-white   cursor-pointer p-2 justify-center"    href={`/product/${p.slug}`}> 
            
            <h1 className='font-bold text-sm transition ease-in-out delay-150  hover:translate-y-1 hover:scale-95  duration-300  dark:text-white   text-violet-800'>{p.category} </h1>
            <h3 className='text-sm flex gap-2 items-center'>Show Category <span><ThickArrowRightIcon/></span></h3>
          </Link>

        </div>
      ))}
        </div>
        

       

    </div>
  )
}

export default Product