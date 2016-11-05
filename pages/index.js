import React from 'react';
import Links from '../components/Links';
import Name from '../components/Name';
import Stars from '../components/Stars';
import Title from '../components/Title';
import css from 'next/css';
import 'glamor/reset';

const style = css({
  background: '#073642',
  color: '#93a1a1',
  fontFamily: 'monospace',
  height: '100vh',
  paddingTop: 50,
});


const main = () => (
  <main className={style}>
    <Name />
    <Title />
    <Links />
    <Stars />
  </main>
)

export default main;
