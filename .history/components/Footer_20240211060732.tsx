"use client"
import React, { useState } from 'react'
import Mailing from './Mailing'
import Delivery from './Delivery'
import Ai from './Ai'

function Footer() {
  const [open, setOpen] = useState (true)
  const onClick=(() =>setOpen(false))
  return (
    <div >
        <div>
            <Mailing/>
            <Ai   open ={ open} onClick = {onClick}  />
            <Delivery />
        </div>
    </div>
  )
}

export default Footer