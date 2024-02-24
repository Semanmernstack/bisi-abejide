"use client"
import React, { useState } from 'react'
import Mailing from './Mailing'
import Delivery from './Delivery'
import Ai from './Ai'

function Footer() {
  const [open, setOpen] = useState (false)
  const onClick=(() =>setOpen(true))
  return (
    <div >
        <div>
            <Mailing/>
            <Ai   open = {open} onClick = {onClick}   />
            <Delivery />
        </div>
    </div>
  )
}

export default Footer