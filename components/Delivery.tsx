
import {  BadgeCheckIcon, PlaneIcon, HomeIcon, ShipIcon } from 'lucide-react'
import React from 'react'

const details = [
    {
        name: 'Fast Delivery',
        icon: <PlaneIcon/>,
        desc: '7 days delivery',
    },
    {
        name: 'Free Shipping',
        icon: <ShipIcon/>,
        desc: 'At low cost',
    },
    {
        name: 'Secure',
        icon: <HomeIcon/>,
        desc: 'Door to door secure shipping',
    },
    {
        name: 'Reliable',
        icon: <BadgeCheckIcon/>,
        desc: 'No time wasting',
    },
]

function Delivery() {
  return (
    <div className=' bg-[#e6e6e6] dark:bg-gray-800  py-4 grid grid-cols-1 sm:grid-cols-2 gap-3 '>
        {details?.map((b, i) => (
            <div className='flex flex-col  shadow-lg items-center justify-center ' key={i}>
                <h2 className='text-green-500'>{b.icon}</h2>
                <h2 className='text-xs sm:text-sm md:text-lg dark:text-white font-bold'>{b.name}</h2>
                <span className='text-xs sm:text-sm  dark:text-white md:text-lg italic'>{b.desc}</span> 
                

            </div>
            
        ))}
        
        
    </div>
    
  )
}

export default Delivery