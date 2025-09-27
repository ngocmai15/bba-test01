// Bai 1
function createCharacters() {
    const characters = [
        { name: "Trang", level: 3, health: 654 },
        { name: "Thuy", level: 2, health: 365 },
        { name: "Ngoc", level: 5, health: 1066 }
    ];
    console.log("characters:", characters)

    const newCharacters = characters.map(property =>
    ({
        name: property["name"].toUpperCase(),
        level: property["level"] * 2,
        health: property["health"] * 3
    }));
    console.log("newCharacters:", newCharacters);

    const possibleWinners = characters.filter(property => property.health > 1000);
    console.log("possibleWinners:", possibleWinners);
};

createCharacters();

// Bai 2
function printLeaderBoard() {
    const players = [
        { name: "Mario", score: 1000 },
        { name: "Luigi", score: 900 },
        { name: "Peach", score: 850 },
        { name: "Kiwi", score: 600 },
        { name: "Yoshi", score: 800 }
    ];
    players.sort((a, b) => b.score - a.score);

    for (let i = 0; i < players.length; i++) {
        if (i === 0) {
            console.log(`🥇 ${i + 1}. ${players[i]["name"]} - ${players[i]["score"]}`);
        } else if (i === 1) {
            console.log(`🥈 ${i + 1}. ${players[i]["name"]} - ${players[i]["score"]}`);
        } else if (i === 2) {
            console.log(`🥉 ${i + 1}. ${players[i]["name"]} - ${players[i]["score"]}`);
        } else {
            console.log(`${i + 1}. ${players[i]["name"]} - ${players[i]["score"]}`);
        }
    }
}
printLeaderBoard();