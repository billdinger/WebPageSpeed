## Performance Checklist
Sourced from industry strandard best practices

[Mozilla Developer Network's Performance Best Practices](https://developer.mozilla.org/en-US/Firefox/Performance_best_practices_for_Firefox_fe_engineers)
[Google's web performance fundamentals](https://developers.google.com/web/fundamentals/performance/why-performance-matters/)
[Google's page speed insight](https://developers.google.com/speed/docs/insights/rules)
[Akamai's performance best practices](https://developer.akamai.com/blog/2017/06/14/optimizing-cacheability-web-app-performance/)

### Basics
1. Has a set of baseline scans been completed for existing site?
2. Is there a [performance budget](https://www.performancebudget.io/) set? 
3. Is performance monitoring setup using RUM or other metrics?
4. Are pages [TTFP](https://en.wikipedia.org/wiki/Time_to_first_byte) under 1s?
5. Does the [page load](https://developers.google.com/web/tools/chrome-devtools/network-performance/reference#load) in under 3s on an environment other than local?
6. Don't guess, measure - have you used the [performance api](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API) and the [built in browser tooling](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/) to evaluate bottlenecks on critical pages?
7. Are you using [caching and etags for static assets](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag)

### CSS
1. CSS is minified and compressed  
2. CSS is not located in body  
3. There are 2 or fewer 1st party CSS files (bundle your CSS)
4. Critical path CSS is inline in head
5. For animation use [CSS Transforms](https://developer.mozilla.org/en-US/Apps/Fundamentals/Performance/Performance_fundamentals) instead of absolute positioning to let the GPU do        hardware acceleration.
6. Use [BEM Syntax](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations#use_block_element_modifier) for its performance selector impact.

### Javascript
1. JS is [minified and compressed](https://developers.google.com/web/fundamentals/performance/webpack/).
2. JS required for page load is in head.
3. JS not required for page load is locate right above </body> tag or uses defer tag.
4. No blocking XHR calls are being made.
5. JS files are [being loaded asynchronously or defered](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
6. JS files are [bundled](https://webpack.js.org/guides/getting-started/) (i.e. prefer 1-2 JS files per site).
7. Javascript file size is kept below 100KB minified and gzipped.
8. Is [Session Storage/Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) used instead of Cookies for temporary storage of values for Javascript?
9. Is [TreeShaking](https://webpack.js.org/guides/tree-shaking/) enabled to remove unnecessary javascript?
10. Have NPM packages been pruned [or checked](https://www.npmjs.com/package/webpack-bundle-analyzer) for unused or unnecessary third party bundles?
11. Are Transformations/Animations [handled in CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations) wherever possible?
12. Are your [event handlers tied to user interactions debounced](https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086)?
13. When modifying the DOM are you selecting elements as low in the DOM tree as possible?
14. Are you [batching repaint & reflow events](https://developers.google.com/speed/docs/insights/browser-reflow) into one call?
15. Are you avoiding [uninterruptible reflows](https://developer.mozilla.org/en-US/Firefox/Performance_best_practices_for_Firefox_fe_engineers#Detecting_and_avoiding_synchronous_reflow)?
16. Are you avoiding JQuery and use native APIs such as [document.GetElementyById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) for DOM selection?
17. Are you accessing the DOM elements, assigning to a variable, and then performing operations on them instead of multiple DOM selector calls?

### HTML
1.  Are your HTML pages < 35KB?
2. Is your [DOM tree as small as possible](https://developers.google.com/web/tools/lighthouse/audits/dom-size) (i.e. avoid dozens or hundreds of nested DOM elements)?

### Assets
1. Are static assets being served from a cookie free domain ?
2. Are images sizes being manipulated from the HTML?  
3. Are images lazy loaded ?
4. Are image assets web optimized?
5. Are any hidden images being loaded?

### Third Party / Analytics
1. Are ad/analytics tags or third party libraries being loaded asynchronously?
2. Are ad/analytics tags or third party libraries being loaded after [Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/)?
3. Have third party tags been assessed for Single Point of Failure/Blocking concerns?
4. Are third party scripts being served up from a CDN?
5. Has a performance test with all third party tags disabled been executed to establish       delta values against benchmarked values?
6. Has a performance test been ran with all tags enabled and the below items checked for     [forced reflows](https://gist.github.com/paulirish/5d52fb081b3570c81e3a)?
