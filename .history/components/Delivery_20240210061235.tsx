import { HomeIcon } from '@radix-ui/react-icons'
import {  BadgeCheckIcon, PlaneIcon, ShipIcon } from 'lucide-react'
import React from 'react'

const details = [
    {
        name: 'Fast Delivery',
        icon: <PlaneIcon/>,
        desc: 'Fast Delivery',
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
        desc: 'Door to door secure shipping',
    },
]

function Delivery() {
  return (
    <div className=' bg-rose-150 '>
        {details?.map((b, i) => (
            <div className='grid grid-cols-1 sm:grid-col-2' key={i}>
                <h2 className='text-red-500'>{b.icon}</h2>
                <h2>{b.name}</h2>
                <h3>{b.desc}</h3>
                

            </div>
        ))}
        
    </div>
    
  )
}

export default Delivery