const config = require('./config').default;
const axios = require('axios');

let _villains = [];
async function getVillains() {
    return _villains;
}

async function doEvil(threat) {
    return axios.post(`${config.THREAT_SERVICE}/threats`, threat);
}

module.exports = {
    getVillains: getVillains,
    doEvil: doEvil
};