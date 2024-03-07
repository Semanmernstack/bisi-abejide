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
          "category": category[0] -> name,
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
    <div className="bg-[#e6e6e6] mt-24 p-1">   
                                                                                                                                                                                                                                                                                  
    <div className="">
      <div className="flex  text-center justify-center items-center">
        <h2 className="text-2xl  italic bg-green-400 px-2 py-2 flex text-center font-bold  text-gray-900">
           {params.category} Section
        </h2>
      </div>

      <div className="mt-2 border-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3    gap-2 lg:grid-cols-4  ">
        {datas?.map((p: any) => (
          <div key={p._id} className="p-3  border-2 shadow-2xl  flex flex-col text-center justify-center ">
            <div className="  object-contain flex text-center justify-center  rounded-lg">
              <Image
                src={p.images}
                alt="Product image"
                width={130}
                height={100}
               
                
                
               
              />
            </div>

            <div className="mt-2 flex flex-col">
              <div>
                <h1 className="text-sm text-gray-700">
                  <Link className='flex flex-col space-y-1' href={`/product/${p.slug}`}>
                   <h2 className=' font-bold text-slate-950'> {p.name}</h2>
                    <span className='font-semibold px-2 py-2 rounded-lg cursor-pointer bg-green-600'>View Product </span>
                  </Link>
                </h1>
              
              </div>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default page