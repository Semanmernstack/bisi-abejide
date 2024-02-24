import { NextResponse } from "next/server";
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { OpenAIStream, StreamingTextResponse } from 'ai';

export async function POST (req: Request) {
    try {
        const body = await req.json()
        const messages = body.messages
        const openai = new OpenAI()

        const systemMessages: ChatCompletionMessageParam ={  
            role: 'system',
            content: 
                    "you are a funy chatbot, you answer questions in funny way"
         }
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            stream: true,
            messages: [systemMessages, ...messages]
          });
          const stream = OpenAIStream(response);
          // Respond with the stream
          return new StreamingTextResponse(stream);
        
    } catch (error) {
        return NextResponse.json('')
        
    }
   
}