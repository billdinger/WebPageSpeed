
/** This functions updates the results area of the page to notify you
 * when a call is made.
 * @param  {string} caller the name of the calling function
 * @param  {object} message the object to display to the dom
 */
const updateResults = function(caller, message) {
  const done = registerPerformance('createDomNode');
  const time = new Date().toLocaleTimeString();
  const p = document.createElement('p');
  p.appendChild(document.createTextNode(`${time} [${caller}] - ${message}`));
  const ele = document.getElementById('results');
  ele.appendChild(p);
  done();
};

/** This takes the data passed to it - which should be a simple object
 * with name, email. It registers its performance and writes it to the DOM.
 * @param  {object} data
 * @param  {boolean} clear
 */
const updateFetchResults = function(data, clear) {
  const done = registerPerformance('fetchResults');
  // 1.) attach to dom.
  const resultsEle = document.getElementById('fetchresults');

  // 2.) If clear is set, wipe out previous results.
  if (clear) {
    resultsEle.innerHTML = '';
  }

  // 3.) Add to the DOM.
  data.forEach((comment) => {
    const item = document.createElement('p');
    item.innerHTML = `Name: ${comment.name} Email: ${comment.email}`;
    resultsEle.appendChild(item);
  });

  // 4.) Mark as complete.
  done();
};

/** Performs a network call either sync or async depending on param.
 * @param  {boolean} async true to make this async, false to make it sync.
 */
const networkWork = function(async) {
  // 1.) Register our performance marker.
  const done = registerPerformance(`networkWork_async_${async}`);

  // 2.) Create our request.
  const request = new XMLHttpRequest();

  // 3.) set our events.
  request.onloadend = () => {
    updateResults('networkWork', `Call of type ${async} complete`, false);
    done();
    updateFetchResults(JSON.parse(request.responseText), false);
  };
  request.onloadstart = () => {
    updateResults('networkWork',
        `Starting a async: ${async} HTTP Request.`, false);
  };

  // 4.) Open & Send requests.
  request.open('GET', 'https://jsonplaceholder.typicode.com/comments', async);
  request.send();
};


// On page load execute.
(function() {
  // 1.) Register our performance marker for page load.
  const done = registerPerformance('page load');

  // 2.) download some data from the intertubes.
   networkWork(true, 'https://jsonplaceholder.typicode.com/comments');

  // 3.) all done.
  done();
})();
