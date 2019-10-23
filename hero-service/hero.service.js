const config = require('./config');
const axios = require('axios').default;

async function getHeroes() {
    return [
        {
            id: 1,
            name: 'Cooper',
            powers: [1, 4]
        }
    ];
}

async function getHero() {
    return (await getHeroes())[0];
}

async function fightThreat(heroId, threatId) {
    const response = await axios.get(`${config.THREAT_SERVICE}/threats/${threatId}`);
    const threat = response.data;

    const hero = await getHero();
    let success = false;

    console.log(hero);
    console.log(threat);

    if (hero.powers.length >= threat.powersRequired.length) {
        await axios.delete(`${config.THREAT_SERVICE}/threats/${threatId}`);
        success = true;
    }

    return {
        threatId,
        heroId,
        success
    };
}

module.exports = {
    getHeroes: getHeroes,
    getHero: getHero,
    fightThreat: fightThreat
};