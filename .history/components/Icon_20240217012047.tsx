import React from 'react'
import { SocialIcon } from 'react-social-icons'
function Icon() {
  return (
    <div className='text-sm'>
        <SocialIcon className='text-lg font-normal'  network="facebook" url="www.vimeo.com" />
        <SocialIcon style={{ color: 'green' }}   network="instagram" url="www.vimeo.com" />
        <SocialIcon network="pinterest" url="www.vimeo.com" />
        <SocialIcon network="whatsapp"  url="www.vimeo.com" />
        
        
    </div>
  )
}

export default Icon