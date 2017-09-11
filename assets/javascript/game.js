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
  var goal = 76;
  $("#randomNumber").html(goal);

  //Setting button "rock1"
  $("#rock1").on("click", function()
  {
    totalScore = totalScore + 25;
    $("#totalScore").html(totalScore);
      if (totalScore === goal)
      {
        alert("You Win");
        winCntr++;
        totalScore = 0;
        $("#totalScore").html(totalScore);
        $("#winCntr").html(winCntr);
      }
      else if (goal < totalScore) 
      {
        alert("You went over " + goal + ", you lose!");
        lossCntr++;
        totalScore = 0;
        $("#totalScore").html(totalScore);
        $("#lossCntr").html(lossCntr);
      }
  });

  //Setting button "rock2"
  $("#rock2").on("click", function()
  {
    totalScore = totalScore + 50;
    $("#totalScore").html(totalScore);
      if (totalScore === goal)
      {
        alert("You Win");
        winCntr++;
        totalScore = 0;
        $("#totalScore").html(totalScore);
        $("#winCntr").html(winCntr);
      }
      else if (goal < totalScore) 
      {
        alert("You went over " + goal + ", you lose!");
        lossCntr++;
        totalScore = 0;
        $("#totalScore").html(totalScore);
        $("#lossCntr").html(lossCntr);
      }
  });

  //Setting button "rock3"
  $("#rock3").on("click", function()
  {
    totalScore = totalScore + 100;
    $("#totalScore").html(totalScore);
      if (totalScore === goal)
      {
        alert("You Win");
        winCntr++;
        totalScore = 0;
        $("#totalScore").html(totalScore);
        $("#winCntr").html(winCntr);
      }
      else if (goal < totalScore) 
      {
        alert("You went over " + goal + ", you lose!");
        lossCntr++;
        totalScore = 0;
        $("#totalScore").html(totalScore);
        $("#lossCntr").html(lossCntr);
      }
  });
  
  //Setting button "rock4"
  $("#rock4").on("click", function()
  {
    totalScore = totalScore + 1;
    $("#totalScore").html(totalScore);
      if (totalScore === goal)
      {
        alert("You Win");
        winCntr++;
        totalScore = 0;
        $("#totalScore").html(totalScore);
        $("#winCntr").html(winCntr);
      }
      else if (goal < totalScore) 
      {
        alert("You went over " + goal + ", you lose!");
        lossCntr++;
        totalScore = 0;
        $("#totalScore").html(totalScore);
        $("#lossCntr").html(lossCntr);
      }
  });

});