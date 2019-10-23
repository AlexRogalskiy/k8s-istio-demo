async function getHeroes() {
    return [
        {
            id: 1,
            type: 'spider-dog',
            displayName: 'Cooper',
            powers: [1, 4],
            img: 'cooper.jpg',
            busy: false
        },
        {
            id: 2,
            type: 'flying-dogs',
            displayName: 'Jack & Buddy',
            powers: [2, 5],
            img: 'jack_buddy.jpg',
            busy: false
        },
        {
            id: 3,
            type: 'dark-light-side',
            displayName: 'Max & Charlie',
            powers: [3, 2],
            img: 'max_charlie.jpg',
            busy: false
        },
        {
            id: 4,
            type: 'captain-dog',
            displayName: 'Rocky',
            powers: [1, 5],
            img: 'rocky.jpg',
            busy: false
        }
    ];
}

async function fightThreat(heroId, threatId, heroPowers, powersRequired) {
    return {
        threatId: threat,
        heroId: hero,
        success: heroPowers.length >= powersRequired
    };
}

async function getPowers() {
    return ["Flying", "Teleporting"];
}

module.exports = {
    getHeroes: getHeroes,
    fightThreat: fightThreat
};