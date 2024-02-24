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
    <div className='flex p-4 gap-2 shadow-lg items-center text-center justify-center   text-sm      '>
       
        <Link className='contain  transition ease-in-out delay-150  hover:translate-y-1 hover:scale-95  duration-300      ' href={''}>
            <Image src={whatsapp} alt="whatsapp" width={24} height={24} />
        </Link>
        <Link className='contain  transition ease-in-out delay-150  hover:translate-y-1 hover:scale-95  duration-300    ' href={''}>
            <Image src={pinterest} alt="whatsapp" width={24} height={24} />
        </Link>
        <Link className='contain transition ease-in-out delay-150  hover:translate-y-1 hover:scale-95  duration-300   ' href={''}>

            <Image src={instagram} alt="whatsapp" width={24} height={24} />
        </Link>
        <Link className='contain transition ease-in-out delay-150  hover:translate-y-1 hover:scale-95  duration-300     ' href={''}>
            <Image src={facebook} alt="whatsapp" width={24} height={24} />
        </Link>
        
       
       
        

       
        
        
    </div>
  )
}

export default Icon