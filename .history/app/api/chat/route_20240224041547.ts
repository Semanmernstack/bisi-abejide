import { NextResponse } from "next/server";

import  { OpenAI } from "openai";
import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";


export const runtime = 'edge';
 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});
  
export async function POST (req: Request) {

        const body = await req.json();
        const messages = body.messages;
    
        

        
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            stream: true,
            messages: messages,
          });
          const stream = OpenAIStream(response);
          // Respond with the stream
          return new StreamingTextResponse(stream);
          console.log(response)
        
   
   
}