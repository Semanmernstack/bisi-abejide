"use client"
import React, { useState } from 'react'
import Mailing from './Mailing'
import Delivery from './Delivery'
import Ai from './Ai'
import NewsLet from './NewsLet'
import SubAi from './SubAi'

function Footer() {
  
  return (
    <div >
        <div>
            <NewsLet/>
            <SubAi   />
            <Delivery />
        </div>
    </div>
  )
}

export default Footer