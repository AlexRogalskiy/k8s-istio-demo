'use strict';

const express = require('express');
const heroService = require('./heroes');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/version', (req, res) => {
    res.send('Hero service - v1');
});

app.get('/heroes', async (req, res) => {
    const heroes = await heroService.getHeroes();
    res.send(heroes);
});

app.post('/fightThreat', async (req, res) => {
    const hero = req.body['heroId'];
    const threat = req.body['threatId'];
    const powers = await heroService.getPowers();
    const result = await heroService.fightThreat(hero, threat, powers, [1, 2, 3]);
    res.send(result);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);