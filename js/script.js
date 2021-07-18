$(document).ready(function() {
	
  var magic8Ball = {};
    magic8Ball.listOfAnswers = ["It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
    magic8Ball.askQuestion = function(question) { // define the method
      $("#8ball").attr("src", "img/magic8ball-back.png");
      $("#answer").fadeIn(4000);
      var randomNumber = Math.random(); // create a random number
      var randomNumberArray = randomNumber * this.listOfAnswers.length; // make the random number between 0 and the number of items in your array
      var randomIndex = Math.floor(randomNumberArray); // round down the number to be a whole number
      var randomAnswer = this.listOfAnswers[randomIndex]; // use that number to index a random number from the answers array
      $("#answer").text(randomAnswer);
      console.log('The answer to the question, "' + question + '" is "' + randomAnswer + '."');
    };	
  
  $("#answer").hide();
  
  var onClick = function () {
    $("#answer").hide();
    $("#8ball").attr("src", "img/magic8ball-front.png");
    setTimeout ( function () {
      var question = prompt ("ASK A YES OR NO QUESTION!") 
      $("#8ball").effect("shake");
      magic8Ball.askQuestion(question)
    }, 500);
  };
  
  $("#questionButton").click(onClick); 
  /* 
  replaces this code:
  magic8Ball.askQuestion("Will I ever learn JavaScript?");
  */

});