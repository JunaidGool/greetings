var nameElem = document.getElementById("input");
var counterElem = document.getElementById('clicks');
var msgOutput = document.getElementById("output");
var engLang = document.getElementById("eng");
var zulLang = document.getElementById("zul");
var xhoLang = document.getElementById("xho");
var afrLang = document.getElementById("afr");
var greet = "";

// get namesGreeted
if (window.localStorage.getItem['namesGreeted']){
  namesGreeted = JSON.parse(window.localStorage.getItem['namesGreeted']);
}else{
  window.localStorage.setItem ('namesGreeted',document.getElementById("input").value);
}

// get clicks and persist on screen
if (window.localStorage.getItem('clicks')) {
  clicks = window.localStorage.getItem('clicks');
  document.getElementById("clicks").innerHTML = clicks;
} else{
window.localStorage.setItem ('clicks',0);
} //checks if data has been saved before so Clicks value does not become null

document.getElementById("greet").addEventListener("click", function(){
// select language via radio button
  if (engLang.checked){
    greet = engLang.value
  } else if  (zulLang.checked){
    greet = zulLang.value;
  } else if (xhoLang.checked){
    greet = xhoLang.value;
  } else if (afrLang.checked){
    greet = afrLang.value;
  }
// display greeting output, language and name
  var message = newGreeting(greet, nameElem.value);
  document.getElementById("output").innerHTML = message;
// display and count visitors greeted
  var count = counter(nameElem.value);
  document.getElementById('clicks').innerHTML = count;
// store the new value of namesGreeted in localStorage
  window.localStorage.setItem("namesGreeted", JSON.stringify(namesGreeted));
// store the new value of clicks in localStorage
  window.localStorage.setItem("clicks",count);
  document.getElementById("clicks").innerHTML = count;
});

document.getElementById("clearButton").addEventListener("click", function(){
  // clear fields
    var clear = ClearFields();
});
