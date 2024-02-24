import { MessageCircleIcon } from 'lucide-react'
import React from 'react'
interface P {
    open: boolean
    onClick:() => void
    
}

function Ai({open, onClick}:P) {
  return (
    <div  className='right-4 bottom-20 z-50 fixed w-full bg-slate-500 rounded-sm text-white  max-w-sm border p-2 '>
        <div className='w-full'>
            <h2>hi</h2>
            <h2>kkkkk</h2>
        </div>
        <div>
           <button onClick={onClick} >X</button> 

        </div>
       
    </div>
  )
}

export default Ai