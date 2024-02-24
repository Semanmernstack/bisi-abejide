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
    <div className='flex flex-col text-center justify-center   text-sm'>
       <div>
        <Link href={''}>
            <Image src={whatsapp} alt="whatsapp" width={7} height={7} />
        </Link>
        <Link href={''}>
            <Image src={instagram} alt="whatsapp" width={7} height={7} />
        </Link>
        <Link href={''}>

            <Image src={instagram} alt="whatsapp" width={7} height={7} />
        </Link>
        <Link href={''}>
            <Image src={facebook} alt="whatsapp" width={7} height={7} />
        </Link>
        
       
       
        

       </div>
        
        
    </div>
  )
}

export default Icon