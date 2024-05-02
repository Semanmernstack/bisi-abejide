import {  Bot, MessageCircleIcon, SendHorizontal, XCircle } from 'lucide-react'
import React, { useState } from 'react'


import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function Ai() {
  
  
    
    
    
  return ( 
    
    
  <div className=' flex m-5 relative   bg-green-500 animate-bounce  ' >

  <Popup className='text-lg ' trigger={<button>Vision Statement</button>} position="center center">
    <div className='p-5  absolute mx-auto overflow-scroll overflow-x-hidden  gap-2 flex flex-col  border'>
      <h3 className='p-3 text-sm space-y-2 max-w-3xl mx-auto text-ellipsis  '>Lolaflocouture is a fashion house that designs mainly female clothing. The designs were made for modern elegant women who want to look good in casual or classic outfits. Lolaflocouture clothing is making a statement in their band that you can look traditional and trendy, stylish, cute, and elegant.</h3>
     
    </div>
  </Popup>
     
  </div>
    
  )
}

export default Ai



