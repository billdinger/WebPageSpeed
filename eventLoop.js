
function callingMe(first, second) {
  console.log(`Calling me with ${first} and ${second}`);
}

function doingThing() {
  callingMe('hello', 'world');
}

function startMeUp(param) {
  console.log(`starting up my program for ${param}`);
  doingThing();
}

const start = startMeUp('KCDC 2019');

class Stack {
  get messages() {
    return this._messages;
  }
  get waitForMessages() {
    return this._waitForMessages();
  }
  set waitForMessages(wait) {
    this._waitForMessages = wait;
  }

  execute() {
    if (Array.isArray(this._messages) && this._messages.length > 0) {
      const funcToExecute = messages.pop();
      funcToExecute();
    } else {
      this.waitForMessages(false);
    }
  }
  constructor(messages) {
    this._waitForMessages = true;
    this._messages = messages;
  }
}

const messages = [
  function() {
start
;},
  function() {
startMeUp('KCDC 2019');
},
  function() {
doingThing();
},
  function() {
callingMe('hello', 'world');
},
];

const loopExample = function eventLoop(queue) {
  while (queue.waitForMessages()) {
    queue.execute();
  }
};

loopExample(new Stack(messages));
