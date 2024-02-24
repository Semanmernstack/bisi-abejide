import { MessageCircle, MessageCircleIcon } from 'lucide-react'
import React, { useState } from 'react'
import SubAi from './SubAi'


function Ai() {
    const [open, setOpen] = useState(false)

    const handleSubmit = () => {
      setOpen(false)
    }
    
    
    
  return (
    <div onClick={handleSubmit}  className=''>
      <MessageCircleIcon/>
      <h1>jj</h1>
       
        
       
    </div>
  )
}

export default Ai