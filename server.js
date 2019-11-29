const express = require ('express');
const next = require ('next');
const  {parse} = require('url');


const port = parseInt (process.env.PORT, 10) || 4000;
const dev = process.env.NODE_ENV !== 'production';
const app = next ({dev});
const handle = app.getRequestHandler ();

app.prepare ().then (() => {
  const server = express ();

  server.use ((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse (req.url, true);
    const {pathname, query} = parsedUrl;

    switch (pathname) {
      case '/':
      case '/recipes':
        app.render (req, res, '/recipes/[filter]', query);
        break;

      default:
        handle (req, res, parsedUrl);
    }
  });

  server.listen (port, err => {
    if (err) throw err;
    console.log (`> Ready on http://localhost:${port}`);
  });
});
