import React from 'react'
import { useDeno } from 'aleph'

export default function Items(){

  const post = useDeno(async () => {
    return await (await fetch("http://localhost:5000/api/products")).json();
  });
  const user_items = [];
  const data = post.data;
  
  for (const p in data) {
    const item = data[p];
    user_items.push(   <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                </tr>)
  }

  return(
    <table className="table is-bordered is-fullwidth">
      <tr>
        <th>Item</th>
        <th>Remainder</th>
      </tr>
      {user_items}
    </table>
    )
}