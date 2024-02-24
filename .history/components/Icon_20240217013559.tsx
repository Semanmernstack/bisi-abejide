import React from 'react'
import { SocialIcon } from 'react-social-icons'
import whatsapp from '../public/whatsapp.png'
import Image from 'next/image'
function Icon() {
  return (
    <div className='text-sm'>
       <div>
        <Image src={whatsapp} alt="whatsapp" />
       </div>
        
        
    </div>
  )
}

export default Icon