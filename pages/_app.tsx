import React from 'react';
import { AppProps } from 'next/app';
import '../styles/common.css';

// const mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
// mongoose.connect(`${process.env.REACT_APP_DB_CONNECT}`, {useNewUrlParser: true, useUnifiedTopology: true});

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Component {...pageProps} />
);

export default MyApp;
