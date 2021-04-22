import {useState, useEffect} from 'react';

export default function Table(props){
  console.log(props.data.data)
  //const [data, setData] = useState([]);
  const user_items = [];
  

/*
  useEffect(async () => {
    const res = await fetch("http://localhost:5000/api/products");
    console.log(res);
    const json = await res.json();
    setData(json);
  }, [])
*/
    //TODO pull up a modal when user clicks on item
    for (const p in props.data) {
      console.log(p)
      const item = props.data[p];
      user_items.push(   <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>{item.user}</td>
                      <td>{item.quantity}</td>
                  </tr>)
    }
  
    return(
      <table className="table is-bordered is-fullwidth">
        <tr>
          <th>Item</th>
          <th>User</th>
          <th>Remainder</th>
        </tr>
        {user_items}
      </table>
      )
  }

