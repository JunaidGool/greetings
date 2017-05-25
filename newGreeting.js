function newGreeting(greet, name) {
  var greeting = "";

  if (greet === 'eng') {
    greeting = ("Hello, " + name);
  } else if (greet === 'zul') {
    greeting = ("Sawubona, " + name);
  } else if (greet === 'xho') {
    greeting = ("Molo, " + name);
  } else if (greet === 'afr') {
    greeting = ("Halo, " + name);
  } else {
    greeting = ("Invalid");
  }

  return greeting;
};
