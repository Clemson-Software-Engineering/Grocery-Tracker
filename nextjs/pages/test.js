import {useState, useEffect} from 'react';
import Head from "next/head";
import Table from "../components/table.js";
import Nav from "../components/nav.js";
import Reminder from "../components/reminder.js";

export default function Test() {
    console.log(data)
    return (
        <h1 className="title is-1">hello</h1>
    )
}

export async function getStaticProps(context) {
    const res = await fetch("http://localhost:5000/products")
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { data }, // will be passed to the page component as props
    }
  }