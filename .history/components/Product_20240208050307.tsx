import { client } from '@/sanity/lib/client'
import React from 'react'

async function getProduct() {
    const query = `*[_type == 'product']  | order(_createdAt desc) {
        _id,
          price,
          name,
          "slug": slug.current,
          "category": category -> name,
          "images": images[0].asset->url
          
      }`
      console.log(query)
    
    const data = await client.fetch(query)
   
    return data
    
}

async function Product() {
    const datas = await getProduct()

  return (
    <div>Product</div>
  )
}

export default Product