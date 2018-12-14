$(document).ready(function(){

    // The GOAL is a random number between 19 and 120
    var goal = Math.floor(Math.random() * (120-19+1) + 19)
    $("#random-number").text(goal);

    // Initialize SCORE to 0
    var score = 0;
    $("#total-score").text(score)

    // Initialize WINS and LOSSES to 0
    var wins = 0;
    $("#wins").text("Wins: " + wins);

    var losses = 0;
    $("#losses").text("Losses: " + losses);

    // Create an empty arry to hold the 4 RANDOM VALUES 
    var randValue = [];

    // Create 4 RANDOM VALUES between 1 and 12. Push to empty array.
    for (i = 0; i < 4; i++){
        randValue.push(Math.floor(Math.random() * (12) + 1));
        
    }
    console.log(randValue);

    // Add RANDOM NUMBER to the SCORE when IMAGE is selected.
    $("#crystal-1").on("click", function(){
        // If the SCORE is greater than the GOAL then the user loses. 
        if (score > goal){
            alert("You Lose!");

            // Incriment LOSSES
            losses++;
            $("#losses").text("Losses: " + losses);
        }
        // If the SCORE euqals GOAL then user wins. 
        else if (score == goal){
            alert("You Win!");

            // Incriment WINS
            wins++;
            $("#wins").text("Wins: " + wins);
        }
        // Else add Random Number to the Score
        else{
            score += randValue[0]
            $("#total-score").text(score);
        }    
    })
    $("#crystal-2").on("click", function(){
        // If the SCORE is greater than the GOAL then the user loses
        if (score > goal){
            alert("You Lose!");

            // Incriment LOSSES
            losses++;
            $("#losses").text("Losses: " + losses);
        }
        // If the SCORE euqals GOAL then user wins
        else if (score == goal){
            alert("You Win!");

            // Incriment WINS
            wins++;
            $("#wins").text("Wins: " + wins);
        }
        else{
            score += randValue[1]
            $("#total-score").text(score);  
        }     
    })
    $("#crystal-3").on("click", function(){
        // If the SCORE is greater than the GOAL then the user loses
        if (score > goal){
            alert("You Lose!");

            // Incriment LOSSES
            losses++;
            $("#losses").text("Losses: " + losses);
        }
        // If the SCORE euqals GOAL then user wins
        else if (score == goal){
            alert("You Win!");

            // Incriment WINS
            wins++;
            $("#wins").text("Wins: " + wins);
        }
        else{
            score += randValue[2]
            $("#total-score").text(score);
        } 
    })
    $("#crystal-4").on("click", function(){
        // If the SCORE is greater than the GOAL then the user loses
        if (score > goal){
            alert("You Lose!");

            // Incriment LOSSES
            losses++;
            $("#losses").text("Losses: " + losses);
        }
        // If the SCORE euqals GOAL then user wins
        else if (score == goal){
            alert("You Win!");

            // Incriment WINS
            wins++;
            $("#wins").text("Wins: " + wins);
        }
        else{
            score += randValue[3]
            $("#total-score").text(score);
        }
    })
})