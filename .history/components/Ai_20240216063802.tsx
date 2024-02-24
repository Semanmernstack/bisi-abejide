import {  Bot, MessageCircleIcon, SendHorizontal, XCircle } from 'lucide-react'
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

interface AIChatBoxProps {
  open: boolean;
  onClose: () => void;
}

function Ai({open, onClose}: AIChatBoxProps) {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
    

  
    
    
    
  return ( 
    
    <div
    className={cn(
      "bottom-0 right-0 z-50 w-full max-w-[500px] p-1 xl:right-36",
      open ? "fixed" : "hidden",
    )}
  > 
     <button onClick={onClose} className="mb-1 ms-auto block">
     
        <XCircle size={30} className="rounded-full bg-background" />
      </button>
      <div className="flex h-[600px] flex-col rounded border bg-background shadow-xl">
        <div className="mt-3 h-full overflow-y-auto px-3" >
          {messages.map((message) => (
            <ChatMessage message={message} key={message.id} />
          ))}
      </div>
      
      <form onSubmit={handleSubmit} className="m-3 flex gap-1">
         
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Say something..."
            className="grow rounded border bg-background px-3 py-2"
            
          />
          <button
            type="submit"
            className="flex w-10 flex-none items-center justify-center disabled:opacity-50"
            disabled={input.length === 0}
            title="Submit message"
          >
            <SendHorizontal size={24} />
          </button>
        </form>   
      

        

       
    </div>
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
