document.getElementById("countButton").addEventListener("click", greet);
document.getElementById("clearButton").addEventListener("click", ClearFields);
document.getElementById("clearStorage").addEventListener("click", reset_counter);
var clicks = 0;
var usersGreeted = {};
if (window.localStorage.getItem['usersGreeted']){
  usersGreeted = JSON.parse(window.localStorage.getItem['usersGreeted']);
}else{
  window.localStorage.setItem ('usersGreeted',document.getElementById("input").value);
}
// you want to start clicks from the localStorage value if it's there
function loadStats (){
  if (window.localStorage.getItem('clicks')) {
    clicks = window.localStorage.getItem('clicks');
    document.getElementById("clicks").innerHTML = clicks;
} else{
  window.localStorage.setItem ('clicks',0);
} //checks if data has been saved before so Clicks value does not become null
}
function greet() {
  var name = document.getElementById("input").value;
  var counterElem = document.getElementById('clicks');
//  if (usersGreeted[name] === undefined){
//    clicks ++;
//    document.getElementById("output").innerHTML = "Succesfully Added " + name;
//     counterElem.innerHTML = clicks;
//    usersGreeted[name] = 0;
//    localStorage['usersGreeted'] = JSON.stringify(usersGreeted);
// };
  if (name.length == 0) {
    document.getElementById("output").innerHTML = "Please Enter Name" + name;
    clicks = clicks
    document.getElementById("nameOutput").innerHTML = "Field cannot be blank " ;
  }
  if (document.getElementById("eng").checked && name.length > 0 && usersGreeted[name] === undefined) {
    document.getElementById("output").innerHTML = "Hello, " + name;
    clicks ++;
    counterElem.innerHTML = clicks;
    usersGreeted[name] = 0;
    localStorage['usersGreeted'] = JSON.stringify(usersGreeted);
    document.getElementById("nameOutput").innerHTML = "The last greeting has been counted, new greeting required " ;
  }
  else if (document.getElementById("zul").checked && name.length > 0 && usersGreeted[name] === undefined) {
    document.getElementById("output").innerHTML = "Sawubona, " + name;
    clicks ++;
    counterElem.innerHTML = clicks;
    usersGreeted[name] = 0;
    localStorage['usersGreeted'] = JSON.stringify(usersGreeted);
    document.getElementById("nameOutput").innerHTML = "The last greeting has been counted, new greeting required " ;
  }
  else if (document.getElementById("xho").checked && name.length > 0 && usersGreeted[name] === undefined)  {
    document.getElementById("output").innerHTML = "Molo, " + name;
    clicks ++;
    counterElem.innerHTML = clicks;
    usersGreeted[name] = 0;
    localStorage['usersGreeted'] = JSON.stringify(usersGreeted);
    document.getElementById("nameOutput").innerHTML = "The last greeting has been counted, new greeting required " ;
  }
  else if (document.getElementById("afr").checked && name.length > 0 && usersGreeted[name] === undefined)   {
    document.getElementById("output").innerHTML = "Hallo, " + name;
    clicks ++;
    counterElem.innerHTML = clicks;
    usersGreeted[name] = 0;
    localStorage['usersGreeted'] = JSON.stringify(usersGreeted);
    document.getElementById("nameOutput").innerHTML = "The last greeting has been counted, new greeting required " ;
  }
  // store the new value of clicks in localStorage
  window.localStorage.setItem("on_load_counter",clicks)
  window.localStorage.setItem("clicks",clicks)
  document.getElementById("clicks").innerHTML = clicks;
}
var stringInput = " ";
function ClearFields() {
  document.getElementById("input").value = "";
  document.getElementById("output").innerHTML = "" + name;
  document.getElementById("nameOutput").innerHTML = "" + name;
  }
  function reset_counter() {
    window.localStorage.clear();
    clicks = 0;
    document.getElementById("clicks").innerHTML = clicks;
  }
