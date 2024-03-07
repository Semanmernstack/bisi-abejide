import {  Bot, MessageCircleIcon, SendHorizontal, XCircle } from 'lucide-react'
import React, { useState } from 'react'
import SubAi from './SubAi'
import ReactMarkdown from "react-markdown";

import { SocialIcon } from 'react-social-icons'
import { Message, useChat } from 'ai/react';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface AIChatBoxProps {
  open: boolean;
  onClose: () => void;
}

function Ai({open, onClose}: AIChatBoxProps) {
  const { messages, input, isLoading, error, handleInputChange, handleSubmit } = useChat();
    
  const lastMessageIsUser = messages[messages.length - 1]?.role === "user";
  
    
    
    
  return ( 
    
    <div className='bg-slate-200 text-white'>
      <h1 className='bg-red-500 px-2 py-2 text-center flex justify-center font-bold'>NOTICE</h1>
    
        

       
    </div>
    
  )
}

export default Ai



