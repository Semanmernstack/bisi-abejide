import { NextResponse } from "next/server";

import  { OpenAI } from "openai";
import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
  })
  const openai = new OpenAIApi(config)
  export const runtime = 'edge'
  
export async function POST (req: Request) {

    try {
        const body = await req.json()
        const messages = body.messages
        
       

        const systemMessages: ChatCompletionMessageParam = {  
            role: 'system',
            content: 
                    'you are a funny chatbot. you answer questions in funny way',
         }
        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            stream: true,
            messages
          });
          const stream = OpenAIStream(response);
          // Respond with the stream
          return new StreamingTextResponse(stream);
        
    } catch (error) {
        return NextResponse.json('')
        
    }
   
}