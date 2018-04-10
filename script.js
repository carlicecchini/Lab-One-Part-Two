var user = prompt('Enter a Number!')

var total = 0;

for (var num = 1; num <= user; num++) {
  total = total += num;
}

alert(total);
 
========================================================

var question = prompt('Do you want to play?');
 
do{
  var words = prompt('Enter a word.');
  console.log(words);
  var repeat = prompt('Do you want to play again?');
}while (repeat=== "yes");

========================================================

var questiontwo = 0;
var begin = ['Would you like to print your name?', 'Would you like to print this again?']
var name = "Hello. My name is Carli";
var y = "!";
x = 0
y = ''

while (begin !== "no" && beginagain !== "no"){
  var questiontwo = prompt(begin[x]);
  if (questiontwo === "no"){
  {break;}
  }
  else if (questiontwo ==="yes" && beginagain !=="no"){
    console.log(name+=y);
  }
  var beginagain =prompt(begin[1]);
  if (questiontwo !=="no" && beginagain ==="yes"){
    console.log(name+="!");
    x =1;
    y ="!";
  }
}
=========================================================

var QuestionThree =prompt('What time of day is it?');
var meal = ['Since it is morning, you should be eating breakfast. We suggest eggs and toast.', 'Since it is noon, you should be eating lunch. We suggest a salad.', 'Since it is evening, you should be eating dinner. We suggest chicken and rice.'] 


if (QuestionThree == 'morning'){
    console.log(meal[0]);
}
else if (QuestionThree == 'noon'){
    console.log(meal[1]);
}
else if (QuestionThree == 'evening'){
    console.log(meal[2]);
}
