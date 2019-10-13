import React from 'react';
import { CookiesProvider } from 'react-cookie';
import { hot } from 'react-hot-loader/root';
import '@babel/polyfill';

const App = () => (
  <CookiesProvider>
        Hello
  </CookiesProvider>
);

export default hot(App);
