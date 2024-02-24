import { MessageCircle, MessageCircleIcon } from 'lucide-react'
import React, { useState } from 'react'
import SubAi from './SubAi'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { SocialIcon } from 'react-social-icons'



function Ai() {
    const [open, setOpen] = useState(false)

    const handleSubmit = () => {
      setOpen(true)
    }
    
    
    
  return (
    <div  onClick={handleSubmit}  className='bottom-12 right-4  text-red-800 fixed z-50'>
      
      <Popover>
        <PopoverTrigger className='text-2xl md:text-2xl'><MessageCircleIcon/></PopoverTrigger>
        <PopoverContent>
          <h1>welcome to LOLAFLO</h1>
          <span>Get In Touch with us</span>
          <span>
            <SocialIcon/>
          </span>
        </PopoverContent>
      </Popover>
       
        
       
    </div>
  )
}

export default Ai