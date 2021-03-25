import { useDeno } from 'aleph'
import React, { useState, useEffect } from "react";
import Items from '../components/items.tsx'
import Nav from '../components/nav.tsx'
import Reminder from '../components/reminder.tsx'

export default function Post() {
  const post = useDeno(async () => {
    return await (await fetch("http://localhost:5000/api/products")).json();
  });
  const user_items = [];
  const data = post.data;

  for (const p in data) {
    const item = data[p];
    //TODO let users enter custom msgbody for each msgtype for each item
    user_items.push(<Reminder key={item._id} msgtype="is-warning" item={item.name} msgbody="it's low!"/>);
  }
  
  return user_items;
}