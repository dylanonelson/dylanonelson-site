import MobileDetect from 'mobile-detect';
import React from 'react';
import ReactDOM from 'react-dom';
import Links from './components/Links';
import Name from './components/Name';
import Stars from './components/Stars';
import Title from './components/Title';

const fonts = [
  '"Triplicate T4c"',
  'Anonymous Pro',
  'Profont',
  'Monofur',
  'Proggy',
  '"Droid Sans Mono"',
  '"DejaVu Sans Mono"',
  'Consolas',
  'Inconsolata',
  'Courier',
  '"Apercu Mono"',
  '"Maison Mono"',
  '"GT Pressura Mono"',
  'Nitti',
  '"Letter Gothic"',
  '"Pica 10 Pitch"',
  'Pitch',
  'Source Code Pro',
  'Menlo',
  'Ubuntu Mono',
  '"Andale Mono"',
  'monospace',
];

const styles = {
  background: '#073642',
  color: '#93a1a1',
  fontFamily: fonts.join(', '),
  height: '100%',
  minHeight: '100vh',
  minWidth: '100vw',
  width: '100%',
  paddingTop: 50,
};

class Main extends React.Component {
  render() {
    return (
      <main style={styles}>
        <Name
          mobile={this.props.mobile}
        />
        <Title
          mobile={this.props.mobile}
        />
        <Links
          mobile={this.props.mobile}
        />
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
    var mobileDetect = new MobileDetect(window.navigator.userAgent);

    document.addEventListener('DOMContentLoaded', () => {
      ReactDOM.render(
        <Main
          mobile={mobileDetect.phone() !== null}
        />,
        document.getElementById('root')
      );
    })
  }
}

module.exports = Main;
