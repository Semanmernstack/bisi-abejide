"use client"

import React, { useState } from 'react'
import Ai from './Ai';
import { motion } from "framer-motion"

function SubAi() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);
  return (
    <motion.div   
    initial={{
      x: 500,
      opacity: 0,
      scale:0.5,
  }}
  animate={{
      x:0,
      opacity: 1,
      scale: 1,
  }}
  transition={{
      duration: 1,
  }}
       className='flex items-center justify-between right-4 bottom-10 z-50 fixed  bg-slate-500 rounded-lg text-white  max-w-2xl border p-2 '  >
       
       
       
      <Ai />
    </motion.div>
  )
}

export default SubAi