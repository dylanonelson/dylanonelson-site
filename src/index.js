import React from 'react';
import ReactDOM from 'react-dom';
import Links from './components/Links';
import Name from './components/Name';
import Stars from './components/Stars';
import Title from './components/Title';

const styles = {
  background: '#073642',
  color: '#93a1a1',
  fontFamily: 'monospace',
  minHeight: '100vh',
  minWidth: '100wh',
  paddingTop: 50,
};

class Main extends React.Component {
  render() {
    return (
      <main style={styles}>
        <Name />
        <Title />
        <Links />
        <Stars />
      </main>
    )
  }
}

let inBrowser = true;

try { document.body }
catch (e) { inBrowser = false }
finally {
  if (inBrowser) {
    document.addEventListener('DOMContentLoaded', () => {
      ReactDOM.render(<Main />, document.getElementById('root'));
    })
  }
}

module.exports = Main;
