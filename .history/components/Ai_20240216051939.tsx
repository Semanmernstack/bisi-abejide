import {  Bot, MessageCircleIcon } from 'lucide-react'
import React, { useState } from 'react'
import SubAi from './SubAi'
import ReactMarkdown from "react-markdown";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { SocialIcon } from 'react-social-icons'
import { Message, useChat } from 'ai/react';
import { Input } from './ui/input'
import Link from 'next/link';
import { cn } from '@/lib/utils';
interface Mess {
  messages: Message[]
}



function Ai() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
    const [open, setOpen] = useState(false)

  
    
    
    
  return ( 
    <div className='bottom-12 p-3 right-4    text-red-800 fixed z-50'>
      
      <Popover >
        <PopoverTrigger className='text-2xl font-extrabold'><MessageCircleIcon className=''/></PopoverTrigger>
        <PopoverContent className='flex flex-col p-3 gap-2 w-[300px] h-[400px]'>
         <div>
            <h1 className='text-bold'>welcome to LOLAFLO</h1>
            <span className='text-sm'>Get In Touch with us</span>
         </div>
         <div>
         {messages.map(message => (
        <div  className="whitespace-pre-wrap">
           <ChatMessage message={message} key={message.id} />
        </div>
        ))}

        <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
          
        />
        <button type='submit'>send</button>
        </form>
        </div>
        
         
        </PopoverContent>
      </Popover>
       
        
       
    </div>
  )
}

export default Ai


interface ChatMessageProps {
  message: Message;
}

function ChatMessage({ message: { role, content } }: ChatMessageProps) {
  const isAiMessage = role === "assistant";

  return (
    <div
      className={cn(
        "mb-3 flex items-center",
        isAiMessage ? "me-5 justify-start" : "ms-5 justify-end",
      )}
    >
      {isAiMessage && <Bot className="mr-2 flex-none" />}
      <div
        className={cn(
          "rounded-md border px-3 py-2",
          isAiMessage ? "bg-background" : "bg-foreground text-background",
        )}
      >
        <ReactMarkdown
          components={{
            a: ({ node, ref, ...props }) => (
              <Link
                {...props}
                href={props.href ?? ""}
                className="text-primary hover:underline"
              />
            ),
            p: ({ node, ...props }) => (
              <p {...props} className="mt-3 first:mt-0" />
            ),
            ul: ({ node, ...props }) => (
              <ul
                {...props}
                className="mt-3 list-inside list-disc first:mt-0"
              />
            ),
            li: ({ node, ...props }) => <li {...props} className="mt-1" />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}