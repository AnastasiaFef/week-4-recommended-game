$(document).ready(function(){

	// * There will be four crystals displayed as buttons on the page.

	var rand=0;
	var score=0;

	var pup=[];

	var wins =0;
	var losses =0;

	randNum();
	setPupCuteness();

	//   * The player will be shown a random number at the start of the game.
	// * The random number shown at the start of the game should be between 19 - 120.
	function randNum(){
		rand=Math.floor(Math.random()*101+19);
		console.log("rand is: "+rand);
		$("#random_number").html(rand);
	}

	// Assign values to cristals
	function setPupCuteness(){
		for(var i=0; i<4; i++){
			pupCuteness=Math.floor(Math.random()*11+1);
			console.log("pupCuteness "+pupCuteness)
			if(pup.indexOf(pupCuteness)===-1){
				console.log("pup.indexOf(pupCuteness) "+pup.indexOf(pupCuteness))
				pup.push(pupCuteness);
				console.log("new pup value");
			}
			else{
				i--;
				console.log("repeated pup value, deducting 1 from i");
			}
		}
		console.log("pup array is: "+ pup);
		for(var i=0; i<pup.length; i++){
			$("#pup"+i).attr('data-cuteness', pup[i]);
		}
	}


	//   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
	// * Each crystal should have a random hidden value between 1 - 12.
	$(".pup").on("click",function(){
		console.log("clicked");

		var cuteness = $(this).attr('data-cuteness');
		console.log(cuteness);

	//     * Your game will hide this amount until the player clicks a crystal.
	//     * When they do click one, update the player's score counter.
		cuteness= parseInt(cuteness);
		score += cuteness;
		$("#score").html(score);
	
	//   * The player wins if their total score matches the random number from the beginning of the game.
		if(score === rand){
			// winner:
			$("#result").html("You are satisfied now!");
			wins++;

			if(wins===1){
				$("#wins").html("Satisfied: "+wins+" time");
			}
			else{
				$("#wins").html("Satisfied: "+wins+" times");
			}


			restart();
		}
	//   * The player loses if their score goes above the random number.
		else if(score > rand){
			//looser:
			$("#result").html("Too much cuteness - you have exploded!");
			losses++;

			if(losses===1){
				$("#losses").html("Exploded: "+losses+" time");
			}
			else{
				$("#losses").html("Exploded: "+losses+" times");
			}
			restart();
		}
	})
	//   * The game restarts whenever the player wins or loses.
	function restart(){
	//     * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
		rand=0;
		score=0;
		pup=[];
		randNum();	
		setPupCuteness();
		$("#score").html("0");
	}
	//   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
	




})