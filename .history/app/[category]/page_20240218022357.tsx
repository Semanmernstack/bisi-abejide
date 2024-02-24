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
    <div className="bg-[#e6e6e6] mt-24 p-3">   
                                                                                                                                                                                                                                                                                  
    <div className="">
      <div className="flex justify-center text-center items-center">
        <h2 className="text-2xl italic bg-green-400 px-2 py-2 flex text-center font-bold tracking-tight text-gray-900">
           {params.category} Section
        </h2>
      </div>

      <div className="mt-6 border grid grid-cols-1 p-3   gap-2 sm:grid-cols-2 lg:grid-cols-4 ">
        {datas.map((p: any) => (
          <div key={p._id} className="p-32q11 border-slate-400 items-center">
            <div className=" w-full object-contain">
              <Image
                src={p.images}
                alt="Product image"
                width={150}
                height={150}
               
                
                
               
              />
            </div>

            <div className="mt-2 flex flex-col">
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