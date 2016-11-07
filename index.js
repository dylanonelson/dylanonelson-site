require('babel-register')({
  presets: ['es2015', 'react']
});

const app = require('./server');
const config = require('./config');

app.listen(config.get('PORT'));
