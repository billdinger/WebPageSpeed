
/** This function handles the API respones.
 * @param  {string} caller the name of the calling function
 * @param  {object} message the object to display to the dom
 */
const results = function(caller, message) {
  const done = registerPerformance('createDomNode');
  const time = new Date().toLocaleTimeString();
  const p = document.createElement('p');
  p.appendChild(document.createTextNode(`${time} [${caller}] - ${message}`));
  const ele = document.getElementById('results');
  ele.appendChild(p);
  done();
};

/** Performs a network call either sync or async depending on param.
 * @param  {boolean} async true to make this async, false to make it sync.
 */
const networkWork = function(async) {
  // 1.) Register our performance marker.
  const done = registerPerformance(`networkWork_async_${async}`);

  // 2.) Wipe out existing dom.
  const ele = document.getElementById('results');
  while (ele.firstChild) {
    ele.firstChild.remove();
  };

  // 3.) Create our request + handler.
  const request = new XMLHttpRequest();
  request.onloadend = () => {
    results('networkWork', 'Non Blocking complete!');
    done();
  };
  request.onloadstart = () => {
    results('networkWork', `Starting a async: ${async} HTTP Request.`);
  };
  request.open('GET', 'https://jsonplaceholder.typicode.com/comments', async);
  request.send();
};

(function() {
  const commentsRunning = registerPerformance('comments running');
  const jsonResult = fetch('https://jsonplaceholder.typicode.com/comments').then(function(response) {
    results('fetch', 'retrieved the JSON results.');
    const result = response.json();
    results('fetch', 'finished parsing the json.');
    return result;
  });
  commentsRunning();

  // 1. download some data.
  networkWork(true, 'https://jsonplaceholder.typicode.com/comments');

  // 2.) insert some data into the dom.
  jsonResult.then((data) => {
    const json = registerPerformance('json');
    const resultsEle = document.getElementById('fetchresults');
    data.forEach((comment) => {
      const item = document.createElement('p');
      item.innerHTML = `Name: ${comment.name} Email: ${comment.email}`;
      resultsEle.appendChild(item);
    });
    json();
  });
})();
