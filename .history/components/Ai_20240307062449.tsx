import {  Bot, MessageCircleIcon, SendHorizontal, XCircle } from 'lucide-react'
import React, { useState } from 'react'
import SubAi from './SubAi'
import ReactMarkdown from "react-markdown";

import { SocialIcon } from 'react-social-icons'
import { Message, useChat } from 'ai/react';

import Link from 'next/link';
import { cn } from '@/lib/utils';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


function Ai() {
  
  
    
    
    
  return ( 
    
    <div className=''>
      <Popover >
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent className=' mx-auto h-full bg-slate-200 max-w-2xl'>Place content for the popover here.</PopoverContent>
      </Popover>

     
    
     

       
    </div>
    
  )
}

export default Ai



