
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
    <div className='  dark:bg-gray-800   py-4 grid grid-cols-1 sm:grid-cols-2 gap-3'>
        {details?.map((b, i) => (
            <div className='flex flex-col border-1  text-center justify-center items-center  bg-[#e6e6e6] p-2 gap-2 shadow-lg ' key={i}>
                <h2 className='text-green-500 '>{b.icon}</h2>
                <h4 className='text-xs sm:text-sm md:text-lg dark:text-white font-bold'>{b.name}</h4>
                <h5 className='text-xs sm:text-sm  dark:text-white md:text-lg italic'>{b.desc}</h5> 
                

            </div>
            
        ))}
        
        
    </div>
    
  )
}

export default Delivery