import {useState, useEffect} from 'react';
import Head from "next/head";
import Table from "../components/table.js";
import Nav from "../components/nav.js";
import Reminder from "../components/reminder.js";

export default function Home({data}) {
  const [search, setSearch] = useState("User");
  const [fields, setFields] = useState([]);

  const placeholder = {
    "User": "aaliyah, aaron, adi", 
    "Item": "ginger, guava, ganja"
  }

  return (
    <section className="section">
      <Head>
        <title>Grocery Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Nav />
      </div>
      <div className="columns">
      <div className="column">
      </div>
      <div className="column">
      <Reminder msgtype="is-danger" item="Eggs" msgbody="Custom msg"/>
      </div>
      <div className="column">
      </div>
      </div>
      <section className="section">
        <h2 className="title is-2">Search for {search}</h2>
        <div className="field is-grouped">
        <div className="field has-addons">
            <div className="control">
              <div className="select">
                <select name="search-field" value={search} onChange={(e) => setSearch(e.target.value)}>
                  <option value="User">User</option>
                  <option value="Item">Item</option>
                </select>
              </div>
            </div>
          </div>
          <p className="control is-expanded">
          <input className="input" type="text" placeholder={placeholder[search]} onChange={(e) => setFields(e.target.value.split(", "))}/>
          </p>
          <p className="control">
            <a className="button is-info" type="submit" onClick={() => console.log(fields)}>Search</a>
          </p>
        </div>
      </section>
      <Table data={data}/>
    </section>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/api/products")
  const json = await res.json()
  const data = json.data
  
  return {
    props: {
      data
    }
  }
}
