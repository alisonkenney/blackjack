window.onload = function() {

var suitArray = ["hearts", "diamonds", "spades", "clubs"];
var valueArray = [2,3,4,5,6,7,8,9,10,"j","q","k","a"];
var hitButton = $(".hit");
var standButton = $(".stand");
var newGameButton = $(".new-game");
var dealerBox = [$("#box2"), $("#box3"), $("#box4"), $("#box5"), $("#box6")];
var playerBox = [$("#box8"), $("#box9"), $("#box10"), $("#box11"), $("#box12")];
var playerCount = 0;
var dealerCount = 0;
var dealerSum = [];
var playerSum = [];
var result = "";

//var newGameButton = $(".new-game");


	function Card(playerBox, dealerBox) {
		this.suit = "";
		this.value = "";
		this.currentCard = "";
		this.playerBox = playerBox;
		this.dealerBox = dealerBox;
		this.realValue = 0;
		this.cardDiv = "";
	}


	Card.prototype = {

		setSuit: function() {
			this.suit = suitArray[Math.floor(suitArray.length * Math.random())];
		},

		setValue: function() {
			this.value = valueArray[Math.floor(valueArray.length * Math.random())];
		},

		setCard: function() {
			this.currentCard = (this.suit + this.value);
		},

		createCard: function() {
			this.cardDiv = document.createElement("div");
			this.cardDiv.setAttribute("class", this.currentCard);
			
		},

		calcRealValue: function() {
			if (typeof(this.value) === "number") {
				this.realValue = this.value;
			}else if (this.value === "a") {
				this.realValue = 11;
			}else {
				this.realValue = 10;
			}
		},

		start: function() {
			this.setSuit();
			this.setValue();
			this.setCard();
			this.calcRealValue();
			this.createCard();
		}	

	}; 


function onNewGame() {
	newGameButton.click(newGame);
}
onNewGame();

function newGame() {
	playerSum = [];
	dealerSum = [];

		$('#box2').empty();
		$('#box3').empty();
		$('#box4').empty();
		$('#box5').empty();
		$('#box6').empty();
		$('#box8').empty();
		$('#box9').empty();
		$('#box10').empty();
		$('#box11').empty();
		$('#box12').empty();

		var playerCard1 = new Card();
		playerCard1.start();
		playerBox[0].append(playerCard1.cardDiv);
		playerSum.push(playerCard1.realValue);

		var playerCard2 = new Card();
		playerCard2.start();
		playerBox[1].append(playerCard2.cardDiv);
		playerSum.push(playerCard2.realValue);

		var dealerCard1 = new Card();
		dealerCard1.start();
		dealerBox[0].append(dealerCard1.cardDiv);
		dealerSum.push(dealerCard1.realValue);

		var faceDown = document.createElement("div");
		faceDown.setAttribute("class", "cardFaceDown");
		dealerBox[1].append(faceDown);

		playerCount = 2;
		dealerCount = 2;
 	
}

function onHit() {
	hitButton.click(playerMove);
	hitButton.click(playerCheck);
}
onHit();

function playerMove() {

		if (playerCount === 2) {
			var playerCard3 = new Card();
			playerCard3.start();
			playerBox[2].append(playerCard3.cardDiv);
			playerSum.push(playerCard3.realValue);
			playerCount ++;
		}else if (playerCount ===3) {
			var playerCard4 = new Card();
			playerCard4.start();
			playerBox[3].append(playerCard4.cardDiv);
			playerSum.push(playerCard4.realValue);
			playerCount ++;
		}else if (playerCount === 4) {
			var playerCard5 = new Card();
			playerCard5.start();
			playerBox[4].append(playerCard5.cardDiv);
			playerSum.push(playerCard5.realValue);
			playerCount ++;
		}else {

		}

}

function onStand() {
	standButton.click(dealerTurn);
}
onStand();

function dealerTurn() {
	$('#box3').empty();
	var dealerCard2 = new Card();
	dealerCard2.start();
	dealerBox[1].append(dealerCard2.cardDiv);
	dealerSum.push(dealerCard2.realValue);
	result = dealerCheck();

	if (result === "bust") {
		alert("DEALER BUSTED! YOU WIN!");
	} else if (result === "tie") {
		alert("You Tied. Play Again.");
	} else {
		alert("Dealer Wins!");
	}

}

/*function dealerMove() {
	

	var dealerCard4 = new Card();
	dealerCard4.start();

	var dealerCard5 = new Card();
	dealerCard5.start();

}*/

function dealerCheck() {
	var playerTotal = 0;
	playerSum.map(function(item){ 
		playerTotal += item; 
	});	
	
	var dealerTotal = 0; 
	dealerSum.map(function(item){ 
		dealerTotal += item; 
	});
	console.log(dealerTotal);
	if (dealerTotal <= 21) {
		if (dealerTotal < playerTotal) {
			if (dealerCount === 2) {	
				var dealerCard3 = new Card();
				dealerCard3.start();
				dealerBox[2].append(dealerCard3.cardDiv);
				dealerSum.push(dealerCard3.realValue);
				dealerCount ++;
				result = dealerCheck();
			}else if (dealerCount ===3 ) {
				var dealerCard4 = new Card();
				dealerCard4.start();
				dealerBox[3].append(dealerCard4.cardDiv);
				dealerSum.push(dealerCard4.realValue);
				dealerCount ++;
				result = dealerCheck();
			}else if (dealerCount === 4) {
				var dealerCard5 = new Card();
				dealerCard5.start();
				dealerBox[4].append(dealerCard5.cardDiv);
				dealerSum.push(dealerCard5.realValue);
				dealerCount ++;
				result = dealerCheck();
			}else {

			}
		}
		
	}else if (dealerTotal > 21) {
		result = "bust"; 
	}else if (dealerTotal === playerTotal) {
		result = "tie";
	}
	return result;
	
}

function playerCheck() {		
	var playerTotal = 0;
	playerSum.map(function(item){ 
		playerTotal += item; 
	});
	if (playerTotal > 21) {
		alert("YOU BUSTED! Dealer Wins.");
	}
}




};



	/*if (count === 2) {
		if ((dealerTotal > playerTotal) && (dealerTotal < 21)) {
			alert("Dealer Wins. Play Again.");
		}else if ((dealerTotal <= playerTotal)) {
			var dealerCard3 = new Card();
			dealerCard3.start();
			dealerBox[2].append(dealerCard3.cardDiv);
			dealerSum.push(dealerCard3.realValue);
			dealerCheck();
			playerCheck();
				if ((dealerTotal > playerTotal) && (dealerTotal < 21)) {
					alert("Dealer Wins. Play Again.");	
				}
		}
	
	}*/	



//New Game:
//On load, the player will need to click "New Game" in order to start a new game.
//On click of "New Game", the dealer will have a face up card appear in #box2 and a face down card appear in #box2.
//On click of "New Game", the player will have a face up card appear in both #box8 and #box9
//These cards will be chosen at random using an array for suits and an array for values.
//Use Math.Random to generate the suit and value

//Setting a card:
//I need to create a new div "card" with a unique id that adds the value to the suit
//I then need to append that div to the "#blocks"


//Function onNewGame()
	//on click of the new game button run function new Game
	//newGameButton.addEventListener("on click", newGame);
//Function newGame()
	//create var playerCard1 and set it equal to new Card().start()
	//Append to playerBox[0]
		//playerBox[0].appendChild(playerCard1.cardDiv);
	//create var playerCard2 and set it equal to new Card().start()
	//Append to playerBox[1]
		//playerBox[1].appendChild(playerCard2.cardDiv);
	//create var dealerCard1 and set it equal to new Card().start()
	//Append to dealerBox[0]
		//dealerBox[0].appendChild(dealerCard1.cardDiv);
	//create varCardDown = create new element('div')
	//set varCardDown attribute to class "facedDown"
	//append varCardDown to dealerBox[1]
	//SetCount = 2
		

//Function onHit
	//On click of the hit button run function playerCard 
	//hitButton.addEventListener("on click", playerCard;
//Function playerCard()
	//if count is equal to 2 create a variable playerCard3 and set it to new Card().start()
			//this will inherit all things in my Card prototype
		//Append playerCard3 to playerBox 11
			//playerBox[10].appendChild(playerCard3.cardDiv)	
		//Count += 1	
	//else if count is equal to 3 create a variable playerCard4 and set it to new Card().start()
		//Append playerCard4 to playerBox 11
			//playerBox[11].appendChild(playerCard4.cardDiv)
		//Count += 1
	//else if count is equal to 4 create variable playerCard5 and set it to new Card().start()
		//Append playerCard5 to playerBox 12
			//playerBox[12].appendChild(playerCard5.cardDiv)
	//else			



