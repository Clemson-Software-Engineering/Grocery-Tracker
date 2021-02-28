import type { ComponentType } from 'react'
import "style/bulma.min.css"
import React from 'react'

export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {
  return (
    <main>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Hello World - Aleph.js</title>
      </head>
      <Page {...pageProps} />
    </main>
  )
}
