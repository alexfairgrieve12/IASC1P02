var myPrompt = prompt("What is your age");

console.log (myPrompt);

var theDate = new Date();

var year = theDate.getFullYear();
var birthyear = year - myPrompt;
window.onload = function(){
  console.log (birthyear);
  document.getElementById("output").innerHTML = birthyear;
}
