
	// Create an arry that list all the options A-Z
		var choices = ["a","b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    //Variables for wins, losses and ties.  They start with 0.
    	var wins = 0;
    	var losses = 0;
    	var guesses =1;
    	var remainingGuesses =10;
        var maxTries = 10;
    	
    // // This function is run whenever the user presses a key.
    
    	document.onkeyup = function(event) {
    	
    	// Determines which key was pressed.  
    	var playerGuess = event.key;
    	console.log(playerGuess); 
   
    	var displayPlayerGuess = document.getElementById("playerGuess");
    	document.getElementById("displayPlayerGuess").textContent =playerGuess;
    	//Above currently displays one letter on screen	

    	document.getElementById("wins").textContent	= wins;
    	document.getElementById("guesses").textContent	= guesses;
    	document.getElementById("remainingGuesses").textContent	= remainingGuesses;

		var displayWins = document.getElementById("wins");			
   
    // Randomly chooses a choice from the options array. This is the Computer's guess.
      	var watsonGuess = choices[Math.floor(Math.random() * choices.length)];
      		document.getElementById("displayWatsonGuess").innerHTML= watsonGuess;

      	var displayWatsonGuess = document.getElementById("watsonGuess");
      	document.getElementById('displayWatsonGuess').textContent = watsonGuess;

        if (guesses > maxTries) {
            var gameOver = document.getElementById("youLose")
            document.getElementById("youLose").textContent = "GAME OVER";
            }


        //keeps track and appends your guesses so far

    	if (playerGuess	=== watsonGuess) {
    		wins++ ;
    	} else {	
    		remainingGuesses--;
    	   	
    	}

     	if (playerGuess !== watsonGuess) {
    		guesses++ ;
    	    	   	
    }



		}