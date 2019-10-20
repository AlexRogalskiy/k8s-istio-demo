'use strict';

const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.get('/version', (req, res) => {
    res.send('I\'m hero service - v2');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);