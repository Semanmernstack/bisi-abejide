import Cat from "./Cat"
import Toggle from "./Toggle"
import { motion } from "framer-motion"

function Nav() {
    return (
      <div className='p-3 top-0 z-50 sticky w-full    bg-green-400 rounded-md  '>
          
          <motion.div className='flex py-4 gap-2 items-center justify-between '>
              <div className='flex text-2xl md:text-3xl  font-extrabold font-serif items-center gap-4 text-white'>
                  <span className='text-gray-300'>L</span>
                  <span className='text-slate-500'>O</span>
                  <span className='text-gray-300'>L</span>
                  <span className='text-slate-500'>A</span>
                  <span className='text-gray-300'>F</span>
                  <span className='text-slate-500'>L</span>
                  <span className='  text-gray-300'>O</span>
  
                  
  
  
              </div>
              <div className='flex items-center  space-x-2'>
                  <Cat/>
                  <Toggle/>
              </div>
          </motion.div>
      </div>
    )
  }
  
  export default Nav