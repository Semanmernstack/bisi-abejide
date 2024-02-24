import React from 'react'
import Mailing from './Mailing'
import Delivery from './Delivery'
import Ai from './Ai'

function Footer() {
  return (
    <div >
        <div>
            <Mailing/>
            <Ai/>
            <Delivery/>
        </div>
    </div>
  )
}

export default Footer