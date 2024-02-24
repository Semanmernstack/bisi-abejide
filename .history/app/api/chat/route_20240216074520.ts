import { NextResponse } from "next/server";

import  { OpenAI } from "openai";
import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";



  
export async function POST (req: Request) {

    try {
        const { messages } = await req.json()
        const openai = new OpenAI()

        const systemMessages: ChatCompletionMessageParam = {  
            role: 'system',
            content: 'you are a funny chatbot. you answer questions in funny way',
         }
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            stream: true,
            messages: [systemMessages, ...messages],
          });
          const stream = OpenAIStream(response);
          // Respond with the stream
          return new StreamingTextResponse(stream);
        
    } catch (error) {
        return NextResponse.json({error: 'internal error'})
        
    }
   
}