let _threats = [];
async function getThreats() {
    return _threats;
}

async function createThreat(threat) {
    _threats.push(threat);
}

async function deleteThreat(threatId, powers) {
    const threat = _threats.filter(x => x.id == threatId);
    if (threat && threat.powersRequired.length < powers.length) {
        _threats.splice(_threats.indexOf(threat), 1);
    }
}

module.exports = {
    getThreats: getThreats,
    createThreat: createThreat,
    deleteThreat: deleteThreat
};