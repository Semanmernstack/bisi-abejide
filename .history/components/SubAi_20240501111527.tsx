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
       className='flex top-60 right-10 z-50 fixed rounded-md text-white     border p-2 '  >
       
       
       
      <Ai />
    </motion.div>
  )
}

export default SubAi