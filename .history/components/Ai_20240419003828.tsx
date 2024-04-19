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
    
    <div className='p-2 max-w-2xl bg-slate-400 mx-auto h-full'>
      <Popover  >
        <PopoverTrigger>Welcome to LOLAFLO store</PopoverTrigger>
        
      </Popover>

     
    
     

       
    </div>
    
  )
}

export default Ai



