const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

const port = 8000;

app.use(
  '/',
  proxy({
    target: 'https://api.imgur.com',
    changeOrigin: true,
    logLevel: 'debug',
  })
);

app.listen(port);
