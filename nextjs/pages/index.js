import {useState, useEffect} from 'react';
import Head from "next/head";
import Table from "../components/table.js";
import Nav from "../components/nav.js";
import Reminder from "../components/reminder.js";

export default function Home() {
  //TODO states for fetching data and generating content
  const [] = useState(0);

  return (
    <section className="section">
      <Head>
        <title>Grocery Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Nav />
      </div>
      {/* these reminders should be deleted and generated */}
      <section className="section">
        <div className="columns">
          <div className="column">
            <Reminder msgtype="is-warning" item="ham" msgbody="it's low!" />
          </div>
          <div className="column">
            <Reminder
              msgtype="is-info"
              item="milk"
              msgbody="it's at a specified level!"
            />
          </div>
          <div className="column">
            <Reminder msgtype="is-danger" item="banana" msgbody="it's gone!" />
          </div>
        </div>
        {/* search bar and options to search by items or names */}
      </section>
      <section className="section">
        {/* <Table /> */}
      </section>
    </section>
  );
}
