require('babel-register')({
  presets: ['env', 'react']
});

const app = require('./server');
const config = require('./config');

app.listen(process.env.PORT || config.get('PORT'));
