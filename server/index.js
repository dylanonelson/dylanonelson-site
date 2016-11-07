const express = require('express');
const Main = require.main.require('./src/');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const mainFactory = React.createFactory(Main);

const server = express();

server.set('view engine', 'hbs');

server.use(express.static('./dist/'));

server.get('/', (req, res) => {
  res.render('index', {
    main: ReactDOMServer.renderToString(mainFactory())
  });
});

module.exports = server;
