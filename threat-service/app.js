'use strict';

const express = require('express');
const threatService = require('./threat.service');
const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
app.use(express.json());

app.get('/version', (req, res) => {
    res.send('Threat service - v1');
});

app.get('/threats', async (req, res) => {
    const data = await threatService.getThreats();
    return res.send(data);
});

app.get('/threats/:threatId', async (req, res) => {
    const data = await threatService.getThreat(req.params.threatId);
    return res.send(data);
});

app.post('/threats', async (req, res) => {
    const data = await threatService.createThreat(req.body);
    return res.status(201).end();
});

app.delete('/threats/:threatId', async (req, res) => {
    await threatService.deleteThreat(req.params.threatId);
    return res.status(202).end();
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);