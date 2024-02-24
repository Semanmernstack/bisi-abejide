import React from 'react'
interface P {
    open: boolean
    onClick:() => void
    
}

function SubAi({open, onClick}:P) {
  return (
    <div    className='flex items-center justify-between right-4 bottom-20 z-50 fixed w-full bg-slate-500 rounded-sm text-white  max-w-sm border p-2 '  >
         <div className='w-full'>
            <h2>hi</h2>
            <h2>kkkkk</h2>
        </div>
        <div>
           <button >X</button> 

        </div>
    </div>
  )
}

export default SubAi