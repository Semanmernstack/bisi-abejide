import { MessageCircle, MessageCircleIcon } from 'lucide-react'
import React, { useState } from 'react'
import SubAi from './SubAi'


function Ai() {
    const [open, setOpen] = useState(false)

    const handleSubmit = () => {
      setOpen(true)
    }
    
    
    
  return (
    <div onClick={handleSubmit}  className=''>
      <MessageCircleIcon/>
       
        
       
    </div>
  )
}

export default Ai