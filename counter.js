var namesGreeted = [];

function counter (name){
  var countGreet = 0;
  if (name){
    namesGreeted.push({name: name});
    countGreet = namesGreeted.length;
  }
  return countGreet;
};
