import { MessageCircleIcon } from 'lucide-react'
import React from 'react'
interface P {
    open: boolean
    onClick:() => void
    
}

function Ai({open, onClick}:P) {
  return (
    <div onClick={onClick} className='right-0 bottom-20 z-50 fixed max-w-xs border p-2 '>
        <MessageCircleIcon/>
    </div>
  )
}

export default Ai