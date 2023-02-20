$(document).ready(function () {
  console.log("doc is ready");

  //let revName;

  $("#btnGetFacts").click(function () {
    $("#coolNameFactsOutput").html();
    // handle it if input is blank

    let userName = $("#userName").val();
    console.log("user name = ", userName);

    console.log("spirit animal f/n = ", getSpiritAnimal(userName));

    console.log("you clicked the button");

    $("#coolNameFactsOutput").html(getSpiritAnimal(userName) + (vowel_count(userName)));

  });
});



function getSpiritAnimal(name) {

  if (name.length == 3) {
  return "You are slug!";
} else if (name.length > 10) {
  return "Ur spirit animal is a centipede because its longer than 10...";
} else if (name.length == 4) {
  return "Ur spirit animal is a cat!";
} else if (name.length == 5) {
  return "UR SPIRIT ANIMAL ARE A DOGE MUCH WOW!!!";
} else if (name.length == 6) {
  return "ur spirit animal is a coyote?";
} else if (name.length == 7) {
  return "Ur spirit animal is a mouse i think.";
} else {
  return "Ur spirit animal is a snake, creepy.";}
}


function vowel_count(name)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < name.length ; x++)
  {
    if (vowel_list.indexOf(name[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return " Also you have " + vcount + " vowels in your name which is kinda cool right?";
}





