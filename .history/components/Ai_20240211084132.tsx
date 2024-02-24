import { MessageCircle, MessageCircleIcon } from 'lucide-react'
import React, { useState } from 'react'
import SubAi from './SubAi'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"



function Ai() {
    const [open, setOpen] = useState(false)

    const handleSubmit = () => {
      setOpen(true)
    }
    
    
    
  return (
    <div onClick={handleSubmit}  className=''>
      
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
       
        
       
    </div>
  )
}

export default Ai