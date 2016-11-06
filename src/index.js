import React from 'react';
import ReactDOM from 'react-dom';
import Links from './components/Links';
import Name from './components/Name';
import Stars from './components/Stars';
import Title from './components/Title';
import { style } from 'glamor';
import 'glamor/reset';

const styles = style({
  background: '#073642',
  color: '#93a1a1',
  fontFamily: 'monospace',
  height: '100vh',
  paddingTop: 50,
});


const Main = () => (
  <main className={styles}>
    <Name />
    <Title />
    <Links />
    <Stars />
  </main>
)

document.addEventListener('DOMContentLoaded', () => (
  ReactDOM.render(<Main />, document.getElementById('root'))
));
