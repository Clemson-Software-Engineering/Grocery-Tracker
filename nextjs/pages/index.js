import Head from "next/head";
import Items from "../components/items.js";
import Nav from "../components/nav.js";
import Reminder from "../components/reminder.js";

export default function Home() {
  return (
    <section className="section">
      <Head>
        <title>Grocery Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Nav />
      </div>
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
      </section>
      <section className="section">
        {/* <Items /> */}
      </section>
    </section>
  );
}
