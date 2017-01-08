const express = require('express');
const MobileDetect = require('mobile-detect');
const Main = require.main.require('./src/');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const server = express();

server.set('view engine', 'hbs');

server.use(express.static('./dist/'));

server.get('/', (req, res) => {
  const mobileDetect = new MobileDetect(req.headers['user-agent']);

  res.render('index', {
    main: ReactDOMServer.renderToString(
      <Main
        mobile={mobileDetect.phone() !== null}
      />)
  });
});

module.exports = server;
