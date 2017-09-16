$(document).ready(function() 
{
  //Define initial Variables
  var winCntr = 0;
  var lossCntr = 0;
  var totalScore = 0;

  //Display values to html
  $("#winCntr").html(winCntr);
  $("#lossCntr").html(lossCntr);

  //objective number
  var goal;
  function matchingNumber() {
  goal = Math.floor(Math.random() * 1000);
  }

  matchingNumber();
  console.log(goal);

  $("#randomNumber").html(goal);

  // activate on every cyrstal selection
  function content() 
  {
    $("#totalScore").html(totalScore);
    if (totalScore === goal)
    {
      alert("You Win");
      winCntr++;
      totalScore = 0;
      $("#totalScore").html(totalScore);
      $("#winCntr").html(winCntr);
      matchingNumber();
      $("#randomNumber").html(goal);
    }
    else if (goal < totalScore) 
    {
      alert("You went over " + goal + ", you lose!");
      lossCntr++;
      totalScore = 0;
      $("#totalScore").html(totalScore);
      $("#lossCntr").html(lossCntr);
    }
  }

  //Setting button "rock1"
  $("#rock1").on("click", function()
  {
    totalScore = totalScore + 25;
    content();
    
  });

  //Setting button "rock2"
  $("#rock2").on("click", function()
  {
    totalScore = totalScore + 10;
    content();    
  });

  //Setting button "rock3"
  $("#rock3").on("click", function()
  {
    totalScore = totalScore + 100;
    content();
    
  });
  
  //Setting button "rock4"
  $("#rock4").on("click", function()
  {
    totalScore = totalScore + 1;
    content();
    
  });

});