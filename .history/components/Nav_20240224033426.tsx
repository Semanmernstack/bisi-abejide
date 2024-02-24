"use client"

import Image from "next/image"
import Cat from "./Cat"
import Toggle from "./Toggle"
import { motion } from "framer-motion"
import ank from '../public/ank.gif'

function Nav() {
    return (
      <div    className='p-3 top-0 z-50 sticky w-full bg-[#228B22] rounded-md  '>
          
          <div    className='flex py-4 gap-2 items-center justify-between '>
              <motion.div 
                     initial={{
                        x: -500,
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
                    className='flex flex-col md:text-3xl   font-serif items-center  text-white'>
                    <div className="flex bg bg-[#228B22] font-extrabold text-2xl">
                    
                 
                      <Image src={ank} alt="" width={100} height={100}/>
                    </div>
                  
                  <div  className="flex  text-center justify-center text-white text-xs ">
                    <h1>Elegant | Simple | stylish | fashionable</h1>
                 </div>
  
                  
  
  
              </motion.div>
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
                className='flex items-center  space-x-2'>
                  <Cat/>
                  <Toggle/>
              </motion.div>
          </div>
          
      </div>
    )
  }
  
  export default Nav