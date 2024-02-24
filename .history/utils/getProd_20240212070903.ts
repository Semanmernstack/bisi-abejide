import { client } from "@/sanity/lib/client"

import React from 'react'

export async function getProd() {
  
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

}

export default getProd
 