var namesGreeted = [];
var countGreet = 0;

function counter(name) {
  if (name) {
    namesGreeted.push({
      name: name
    });
    countGreet = namesGreeted.length;
  }
  return countGreet;
};
