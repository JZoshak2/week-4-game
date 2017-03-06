// Initial Variable Setup
var redCrystalNumber = Math.floor((Math.random() * 12) + 1)
var blueCrystalNumber = Math.floor((Math.random() * 12) + 1)
var yellowCrystalNumber = Math.floor((Math.random() * 12) + 1)
var greenCrystalNumber = Math.floor((Math.random() * 12) + 1)
var numberToGuess = Math.floor((Math.random() * 102) + 19);
var scoreCounter = 0;
var wins = 0;
var losses = 0;
$("#numberToGuess").html("Guess this number: " + numberToGuess);
$("#currentScore").html(scoreCounter);
$("#wins").html("Wins: " + wins);
$("#losses").html("Losses: " +losses);


// a reset function - starts the game over.
var reset = function() {
	redCrystalNumber = Math.floor((Math.random() * 12) + 1)
	blueCrystalNumber = Math.floor((Math.random() * 12) + 1)
	yellowCrystalNumber = Math.floor((Math.random() * 12) + 1)
	greenCrystalNumber = Math.floor((Math.random() * 12) + 1)
	numberToGuess = Math.floor((Math.random() * 102) + 19);
	scoreCounter = 0;
	$("#numberToGuess").html("<p>Guess this number:  " + numberToGuess + "</p>");
	$("#currentScore").html(scoreCounter);
	$("#wins").html("Wins: " + wins);
	$("#losses").html("Losses: " +losses);
}

//checks if win coniditions are met. 
var winChecker = function() {
	if (scoreCounter === numberToGuess) {
		wins += 1;
		$("#winLoss").html("<h2>You Win!</h2>");
		reset();
	}

	else if (scoreCounter > numberToGuess) {
		losses += 1;
		$("#winLoss").html("<h2>You Lose!</h2>");
		reset();
	}
}



$("#redCrystal").on("click", function() {
	scoreCounter += redCrystalNumber;
	$("#currentScore").html(scoreCounter);
	winChecker();
});

$("#yellowCrystal").on("click", function() {
	scoreCounter += yellowCrystalNumber;
	$("#currentScore").html(scoreCounter);
	winChecker();
});

$("#blueCrystal").on("click", function() {
	scoreCounter += blueCrystalNumber;
	$("#currentScore").html(scoreCounter);
	winChecker();
});

$("#greenCrystal").on("click", function() {
	scoreCounter += greenCrystalNumber;
	$("#currentScore").html(scoreCounter);
	winChecker();
});
