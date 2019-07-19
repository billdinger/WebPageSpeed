const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

try {
  console.log('Starting our program.');
  const request = new XMLHttpRequest();
  request.onloadend = () => {
    console.log('Non Blocking complete!');
  };
  request.open('GET', 'https://jsonplaceholder.typicode.com/comments', true);
  request.send();
  console.log('Out of try block.');
} catch (err) {
  console.log('Error found.', err);
} finally {
  console.log('Finally thats done');
}
