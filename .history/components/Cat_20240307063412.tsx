"use client"
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { MenuIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Icon from './Icon'

interface P {
    name: string,
    href: string
}

const links: P[] = [
    {
        name: 'Home', href: "/"
    },
    {
        name: 'Ankara ', href: "/Ankara"

    },
    
    {
        name: 'Kaftan ', href: "/Kaftan"
        
    },
    {
        name: 'Turban ', href: "/Turban"
        
    },
    
   
   
   
]
  

function Cat() {
    const pathname = usePathname()
  return (
   
    <div>
        <DropdownMenu >
            <DropdownMenuTrigger className=" flex flex-col w-10 h-9  text-white text-xl  justify-center items-center text-center">
                <MenuIcon/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=''>
                <DropdownMenuLabel className=" flex font-bold font-serif sm:font-bold justify-center gap-1 p-1 border items-center"> CATEGORIES</DropdownMenuLabel>
                <DropdownMenuSeparator />
                
                <DropdownMenuItem className="flex items-center justify-center   flex-col p-3 gap-2    rounded-md">
                {links.map((l, index) => (
                <div key={index} className='flex   rounded-lg  text-zinc-500 md:w-1/2 text-center font-extrabold     p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95  duration-300 '>
                    {pathname === l.href ? (
                        <Link href={l.href} className='text-sm sm:text-lg text-red-800 font-semibold animate-pulse'>
                            {l.name}
                        </Link>

                    ):(
                        <Link href= {l.href }
                        className="flex   p-2 gap-1 italic sm:font-semibold hover:border rounded-lg border-teal-700  text-slate-800 dark:text-white text-sm sm:text-lg font-bold transition duration-100  "
                        >
                            {l.name}
                        </Link>

                    )}

                </div>
            ))}
            <Icon/>

                </DropdownMenuItem>
               
               
            </DropdownMenuContent>
        </DropdownMenu>

    </div>
  )
}

export default Cat