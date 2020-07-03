import React from 'react';
import Head from 'next/head';
import Main from '../Main';

function DefaultPage() {
  return (
    <div className="container">
      <Head>
        <title> ContactApp - main page </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </div>
  );
}

export default DefaultPage;
