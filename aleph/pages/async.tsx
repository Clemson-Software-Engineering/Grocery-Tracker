import { useDeno } from 'aleph'
import React, { useState, useEffect } from "react";
import Items from '../components/items.tsx'
import Nav from '../components/nav.tsx'
import Reminder from '../components/reminder.tsx'

export default function Async() { 
  


    const post = useDeno(async () => {
      const { data } = await fetch("https://api.icndb.com/jokes/random")
      .then((res) => res.json());
    });
    post();

  return (
    <div>
      <h1>Here's a random joke for you</h1>
      <h2>post</h2>
    </div>
  )
}