import Head from 'next/head'
import Link from 'next/Link'
import Main from './main/index'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title> ContactApp - main page </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main/>

    </div>
  )
}