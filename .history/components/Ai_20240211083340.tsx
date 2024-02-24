import { MessageCircle, MessageCircleIcon } from 'lucide-react'
import React, { useState } from 'react'
import SubAi from './SubAi'


function Ai() {
    const [open, setOpen] = useState(false)
    
    
    
  return (
    <div  className=''>
      <MessageCircleIcon/>
       
        <SubAi open={open} onClick={() => setOpen(true)}/>
       
    </div>
  )
}

export default Ai