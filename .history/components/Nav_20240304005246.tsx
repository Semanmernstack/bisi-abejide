"use client"

import Image from "next/image"
import Cat from "./Cat"
import Toggle from "./Toggle"
import { motion } from "framer-motion"
import anky from '../public/anky.gif'
import Link from "next/link"

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
                    className='flex flex-col  justify-start   font-serif items-center  text-white'>
                    <Link href={'/'} className="flex flex-col ">
                    
                 
                      <Image className="flex justify-start" src={anky} alt="" width={50} height={40}/>
                     
                    </Link>
                  
                 
  
                  
  
  
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

          <div  className="flex  text-center justify-center text-white text-xs ">
                <h1 className="text-sm font-medium">Elegant | Simple | stylish | vintage | classic</h1>
            </div>
          
      </div>
    )
  }
  
  export default Nav