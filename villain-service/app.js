'use strict';

const express = require('express');
const villainService = require('./villain.service');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
app.use(express.json());

app.get('/version', (req, res) => {
    res.send('Villain service - v1');
});

app.get('/villains', async (req, res) => {
    const data = await villainService.getVillains();
    return res.send(data);
});

app.post('/doEvil', async (req, res) => {
    const data = await villainService.doEvil(req.body);
    return res.status(201).end();
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);