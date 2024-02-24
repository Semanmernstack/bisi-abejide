import React from 'react'
import { SocialIcon } from 'react-social-icons'
import whatsapp from '../public/whatsapp.png'
import instagram from '../public/intagram.jpg'
import facebook from '../public/facebook.png'
import pinterest from '../public/pinterest.png'
import Image from 'next/image'
import Link from 'next/link'
function Icon() {
  return (
    <div className='flex items-center text-center justify-center   text-sm'>
       
        <Link className='contain' href={''}>
            <Image src={whatsapp} alt="whatsapp" width={24} height={24} />
        </Link>
        <Link className='contain' href={''}>
            <Image src={instagram} alt="whatsapp" width={24} height={24} />
        </Link>
        <Link className='contain' href={''}>

            <Image src={instagram} alt="whatsapp" width={24} height={24} />
        </Link>
        <Link className='contain' href={''}>
            <Image src={facebook} alt="whatsapp" width={24} height={24} />
        </Link>
        
       
       
        

       
        
        
    </div>
  )
}

export default Icon