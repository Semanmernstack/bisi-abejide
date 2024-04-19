"use client"
import React, { FormEvent, useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

function Mail() {
    const [input, setInput] = useState<string>("")
    const [mailError, setMailError] = useState<string> ("")
    const [mailOk, setMailOk] = useState<string>("")

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const email = input;
        
        
        const res = await fetch("/api/mailSub", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({email}),
          
        })
        
        const data = await res.json()
        if (data.error) {
            setMailError('Hey you already subscribe to trizzas cake')
            
            return
        }
        setMailOk(data.res)
        setInput("")
       
        
    }

    
  return (
    <div className='flex flex-col items-center w-full  '>
        <form className="flex  flex-col p-3 w-full " onSubmit={handleSubmit}>
            <div className='gap-2 flex  flex-col md:flex-row items-center'>
                <Input type="email"
                    placeholder='Subscribe for news letter'
                    value={input}

                    onChange={(e) => setInput(e.target.value)}
                    required
                    className="outline-none flex-1 w-full text-white shadow-md  border-2 h-10 md:h-8   p-4 rounded-lg   from-fuchsia-400 "

                 />
                 <Button className="text-sm   text-center justify-center flex cursor-pointer  text-white bg-zinc-500 p-2  sm:text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95  duration-300  rounded-xl md:rounded-2xl " type='submit' disabled={!input}    >
                    Subscribe
                 </Button>
            </div>
            
        </form>
        {(mailOk || mailError ) && ( 
            <div className="mt-5 text-sm text-center justify-center font-extrabold">
             {mailOk ?(<p className="  bg-red-900 px-2 py-2 mb-2 text-white"> Subscription Sucessful !! </p>):(<p className="bg-green-500 p-1">You already Subscribed</p>)}
            </div>
        )}    
       
    </div>
  )
}

export default Mail