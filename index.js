require('babel-register')({
  presets: ['es2015', 'react']
});

const app = require('./server');
const config = require('./config');

app.listen(process.env.PORT || config.get('PORT'));
