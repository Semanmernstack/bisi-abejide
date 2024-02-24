import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
async function getCat(category: string){
    const query = `*[_type == "product" && category->name == "${category}"]{
  
           
          _id,
          price,
          name,
          "slug": slug.current,
          "category": category -> name,
          "images": images[0].asset->url
    }

    `
    
    const data = await client.fetch(query)
   
    return data
}

async function page({params,}: {params: {category: string}}) {
    const datas = await getCat(params.category)
    console.log(datas)

  return (
    <div className="bg-green-200 mt-24">   
                                                                                                                                                                                                                                                                                  
    <div className="mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Our Products for {params.category}
        </h2>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {datas.map((p: any) => (
          <div key={p._id} className="group w-full relative flex flex-col items-center justify-center">
            <div className=" ">
              <img
                src={p.images}
                alt="Product image"
               
                
                className="flex w-[200px] h-[200px]  object-contain   lg:h-full lg:w-full"
               
              />
            </div>

            <div className="mt-4 flex items-center gap-5">
              <div>
                <h1 className="text-sm text-gray-700">
                  <Link className='flex flex-col space-y-1' href={`/product/${p.slug}`}>
                   <h2> {p.name}</h2>
                    <span>view </span>
                  </Link>
                </h1>
               
              </div>
              <p className="text-sm font-medium text-gray-900">
                ${p.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default page