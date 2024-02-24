"use client"

import Cat from "./Cat"
import Toggle from "./Toggle"
import { motion } from "framer-motion"

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
                    className='flex flex-col text-2xl md:text-3xl  font-extrabold font-serif items-center gap-4 text-white'>
                    <div className="flex gap-4  text-xl">
                    <span className='text-gray-300'>L</span>
                  <span className='text-slate-500'>O</span>
                  <span className='text-gray-300'>L</span>
                  <span className='text-slate-500'>A</span>
                  <span className='text-gray-300'>F</span>
                  <span className='text-slate-500'>L</span>
                  <span className='  text-gray-300'>O</span>  
                    </div>
                  
                  <div  className="flex text-center justify-center text-gray-400 text-xs ">
                    <h1>Elegant | Simple | Casual</h1>
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