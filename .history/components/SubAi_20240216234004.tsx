import { MessageCircleCode } from 'lucide-react';
import React, { useState } from 'react'
import Ai from './Ai';


function SubAi() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);
  return (
    <div    className='flex items-center justify-between right-4 bottom-20 z-50 fixed  bg-slate-500 rounded-sm text-white  max-w-sm border p-2 '  >
        <button onClick={() => setChatBoxOpen(true)}>
        <MessageCircleCode size={34} />
        </button>
      <Ai open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </div>
  )
}

export default SubAi