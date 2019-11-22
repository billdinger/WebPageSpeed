const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const doingAThing = function(message) {
  console.log(`Doing something for ${message}`);
};

const blockingAThing = function() {
  const request = new XMLHttpRequest();
  request.onloadend = () => {
    console.log('Non Blocking complete!');
  };
  request.onloadstart = () => {
    console.log('Starting a blocking HTTP Request.');
  };
  request.open('GET', 'https://drive.google.com/open?id=1vuXOzkaGWd-mJHmA_UW08j-7AoCQ0Wed', false);
  request.send();
};

// Blocking demo.
console.log('*** Starting blocking demo. ***');
doingAThing('start');
blockingAThing();
blockingAThing();
doingAThing('end');
console.log(`*** Done with blocking demo. ***`);

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question('Press any key to quit.', () => {
  console.log('quitting.');
  rl.close();
});
