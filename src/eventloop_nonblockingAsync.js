const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const doingAThing = function(message) {
  console.log(`Doing something for ${message}`);
};

const nonBlockingAThing = function() {
  const request = new XMLHttpRequest();
  request.onloadstart = () => {
    console.log('Starting a non-blocking HTTP Request.');
  };
  request.onloadend = () => {
    console.log('Non Blocking complete!');
  };
  request.open('GET', 'https://apps.myconf.app/api/conferences/kcdc2019/Conference', true);
  request.send();
};

console.log('*** Starting non-blocking demo. ***');
doingAThing('start');
nonBlockingAThing();
nonBlockingAThing();
doingAThing('end');
console.log(`*** Done with non-blocking demo. ***`);

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Press any key to quit.', () => {
  console.log('quitting.');
  rl.close();
});
