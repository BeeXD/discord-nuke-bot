const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send(' Bot is Alive Join our server you will get more code there \n  '));

app.listen(port, () => console.log(`App is listening to http://localhost:${port}`));
