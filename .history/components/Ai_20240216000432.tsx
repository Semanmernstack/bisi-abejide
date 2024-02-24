import {  MessageCircleIcon } from 'lucide-react'
import React, { useState } from 'react'
import SubAi from './SubAi'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { SocialIcon } from 'react-social-icons'
import { useChat } from 'ai/react';
import { Input } from './ui/input'



function Ai() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
    const [open, setOpen] = useState(false)

  
    
    
    
  return ( 
    <div className='bottom-12 right-4    text-red-800 fixed z-50'>
      
      <Popover >
        <PopoverTrigger className='text-2xl font-extrabold'><MessageCircleIcon className=''/></PopoverTrigger>
        <PopoverContent className='flex flex-col gap-2 w-[300px] h-[400px]'>
         <div>
            <h1 className='text-bold'>welcome to LOLAFLO</h1>
            <span className='text-sm'>Get In Touch with us</span>
         </div>
         <div>
         {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
        ))}

        <form onSubmit={handleSubmit}>
        <Input
          className="fixed bottom-0 w-full p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
        </form>
        </div>
        
         
        </PopoverContent>
      </Popover>
       
        
       
    </div>
  )
}

export default Ai