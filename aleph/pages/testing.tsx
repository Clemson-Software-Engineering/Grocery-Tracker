import React from "https://esm.sh/react"
import { useDeno } from "https://deno.land/x/aleph/mod.ts"

export default function Post() {
  const post = useDeno(async () => {
    const { data } = await fetch(
        "https://api.icndb.com/jokes/random/1",
        {method: "GET"},
    ).then((res) => res.json());
    console.log(data);
    return data;
  });

  return (
    <h1>{post}</h1>
  )
}