import { useDeno } from 'aleph'
import React from 'react'
import Items from '../components/items.tsx'
import Nav from '../components/nav.tsx'
import Reminder from '../components/reminder.tsx'

export default function Test() { 
  return (
    <section className="section">
      <div className="container">
      <Nav />
</div>
<section className="section">
  <div className="columns">
    <div className="column">
  <Reminder msgtype="is-warning" item="ham" msgbody="it's at a specified level!"/>
  </div>
  <div className="column">
  <Reminder msgtype="is-info" item="milk" msgbody="it's low!"/>
  </div>
  <div className="column">
  <Reminder msgtype="is-danger" item="banana" msgbody="it's gone!"/>
  </div>
  </div>
  </section>
  <section className="section">
<Items />
</section>
</section>
  )
}
