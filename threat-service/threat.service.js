let _threats = [];
async function getThreats() {
    return _threats;
}

async function getThreat(id) {
    return _threats.find(x => x.id == id);
}

async function createThreat(threat) {
    _threats.push(threat);
}

async function deleteThreat(threatId) {
    const threat = _threats.filter(x => x.id == threatId);
    _threats.splice(_threats.indexOf(threat), 1);
}

module.exports = {
    getThreats: getThreats,
    getThreat: getThreat,
    createThreat: createThreat,
    deleteThreat: deleteThreat
};