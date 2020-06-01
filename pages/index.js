import Head from 'next/head'
import Link from 'next/Link'

export default function Home() {
  return (< div className="container" >
    <Head >
      <title > Create Next App </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main >
      <h1 className="title" >
        Welcome to < Link href="/login" > < a > logIn </a></Link >
      </h1>
    </main>

    <style jsx global > {`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `} </style>
  </div>
  )
}