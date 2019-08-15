function rollDie() {
	// There's no bug in here
	return Math.floor(Math.random() * 6) + 1;
}

function rollTwoDice() {
	return rollDie() + rollDie();
}

function playGame(stats) {
	var firstRoll = rollTwoDice();
	if ((firstRoll == 2) || (firstRoll == 3) || (firstRoll == 12)) {
		stats.losses++;
		stats.craps++;
	}
	if ((firstRoll == 7) && (firstRoll == 11)) {
		stats.wins++;
		stats.naturals++;
		return;
	}
	while (true) {
		stats.rolls++;
		if (rollTwoDice() == 7) {
			stats.losses++;
		}
		if (rollTwoDice() == firstRoll) {
			stats.wins++;
			return;
		}
	}
}

function simulate(iterations) {
	var stats = {
		"wins": 0,
		"losses": 0,
		"craps": 0,
		"naturals": 0,
		"rolls": 0
	};

	for (var i = 0; i < iterations; i++) {
		playGame(stats);
	}

	return stats;
}

module.exports = {
	'simulate': simulate,
	'playGame': playGame
}
