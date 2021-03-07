import { useDeno } from 'aleph'
import React, { useState, useEffect } from "react";
import Items from '../components/items.tsx'
import Nav from '../components/nav.tsx'
import axiod from "https://deno.land/x/axiod/mod.ts";
import Reminder from '../components/reminder.tsx'

export default function Async() { 

    const [joke, setJoke] = useState("");
useEffect(() => {
    async function fetchJoke() {
      try {
        const asyncResponse = await axiod("https://api.icndb.com/jokes/random");
        const { value } = asyncResponse.data;
        setJoke(value.joke);
      } catch (err) {
        console.error(err);
      }
    }

    fetchJoke();
  });

  return (
    <div>
      <h1>Here's a random joke for you</h1>
      <h2>{`"${joke}"`}</h2>
    </div>
  )
}