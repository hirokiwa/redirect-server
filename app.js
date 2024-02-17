const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const REDIRECT_URL = process.env.REDIRECT_URL || 'https://example.com';

app.get('/', (_, res) => {
  res.redirect(301, '/1');
});

app.get('/1', (_, res) => {
  res.redirect(301, REDIRECT_URL);
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
