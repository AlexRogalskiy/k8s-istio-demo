'use strict';

const express = require('express');
const heroService = require('./hero.service');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
app.use(express.json());

app.get('/version', (req, res) => {
    res.send('Hero service - v1');
});

app.get('/heroes', async (req, res) => {
    const heroes = await heroService.getHeroes();
    res.send(heroes);
});

app.post('/fightThreat', async (req, res) => {
    const hero = req.body.heroId;
    const threat = req.body.threatId;
    const result = await heroService.fightThreat(hero, threat);
    res.send(result);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);