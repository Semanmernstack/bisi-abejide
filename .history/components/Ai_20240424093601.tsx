import {  Bot, MessageCircleIcon, SendHorizontal, XCircle } from 'lucide-react'
import React, { useState } from 'react'


import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function Ai() {
  
  
    
    
    
  return ( 
    
    
  <div className=' flex max-w-2xl mx-auto p-5 lg:p-10 bg-red-700 animate-pulse  ' >

  <Popup className='text-lg md:text-xl' trigger={<button>Important Notice</button>} position="bottom center">
    <div className='p-5  gap-2 flex flex-col items-center justify-center border'>
      <span className='p-3 space-y-2 '>Fashion Statement: Lolaflocouture is a fashion house that designs mainly female clothing. The designs were made for modern elegant women who want to look good in casual or classic outfits. Lolaflocouture clothing is making a statement in their band that you can look traditional and trendy, stylish, cute, and elegant.</span>
     
    </div>
  </Popup>
     
  </div>
    
  )
}

export default Ai



