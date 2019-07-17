const here = () => {
  console.log('Here.');
};

const timeout = setTimeout(() => {
  console.log('inside set timeout!');
}, 3000);

const there = () => {
  console.log('There');
};

const interval = setInterval(() => {
  console.log('intervalling.');
}, 6000);

class Loop {
  get messages() {
    return this._messages;
  }
  get queue() {
    return this._queue;
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
    } else if (Array.isArray(this._queue) && this.queue.length > 0) {
      this._messages = this._queue;
      this._queue.length = 0;
    } else {
      this.waitForMessages(false);
    }
  }

  loop() {
    while (this.waitForMessages()) {
      queue.execute();
    }
  }
  constructor(messages, queue) {
    this._waitForMessages = true;
    this._messages = messages;
    this._queue = queue;
  }
}

const messages = [
  function() {
    here;
  },
  function() {
    there;
  }
];
const queue = [
  function() {
    timeout;
  },
  function() {
    interval;
  }
];
const loop = new Loop(messages);
loop.loop(messages, queue);
