function twoRandomScores() {
    var score1 = Math.random(10);
    var score2 = Math.random(10);
    return score1 + score2;
}
twoRandomScores();

var randomScore = Math.floor(Math.random()*52)+1;
console.log("I got the score " + randomScore);

var deal = Math.floor(Math.random()*52)+1;
var final = deal%13;
console.log(final);


var outcome;
var deal = Math.floor(Math.random()*40)+1;
if (deal%2 === 0) {
    var outcome = "even";
}else if (deal%2 !== 0) {
    var outcome = "odd";
}

confirm("Are you ready to move on?");