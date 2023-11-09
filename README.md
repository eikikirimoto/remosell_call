# Remosell Call
- aaa
- aaa
- aaa
- kirimoto

# Sample
```
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const server = require('https').createServer(
  {
    key: fs.readFileSync('./privatekey.pem'),
    cert: fs.readFileSync('./cert.pem'),
  },
  app
);

app.get('/', (req, res) => res.send('Hello World!'));

server.listen(port, () => console.log(`Listening on port ${port}!`));
```