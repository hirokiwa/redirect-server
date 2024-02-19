require('dotenv').config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

console.log(process.env.REDIRECT_URL_1)

const DEFAULT_URL = 'https://example.com';
const REDIRECT_URL_1 = process.env.REDIRECT_URL_1 ?? DEFAULT_URL;
const REDIRECT_URL_2 = process.env.REDIRECT_URL_2 ?? DEFAULT_URL;
const REDIRECT_URL_3 = process.env.REDIRECT_URL_3 ?? DEFAULT_URL;

app.get('/', (_, res) => {
  res.redirect(301, '/1');
});

app.get('/1', (_, res) => {
  res.redirect(301, REDIRECT_URL_1);
});

app.get('/2', (_, res) => {
  res.redirect(301, REDIRECT_URL_2);
});

app.get('/3', (_, res) => {
  res.redirect(301, REDIRECT_URL_3);
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
