"use client"
import React, { useState } from 'react'
import Mailing from './Mailing'
import Delivery from './Delivery'
import Ai from './Ai'
import NewsLet from './NewsLet'
import SubAi from './SubAi'
import Contacts from './Contacts'
import Icon from './Icon'

function Footer() {
  
  return (
    <div >
        <div>
            <NewsLet/>
            <SubAi   />
            <Delivery />
            <Icon/>
            <Contacts/>
        </div>
    </div>
  )
}

export default Footer