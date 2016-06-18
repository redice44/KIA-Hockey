'use strict';

class logger {
  constructor() {
  }

  setLevel(level) {
    if (Number.isInteger(level)) {
      this.logLevel = level;
      console.log(`Logger Level set to ${level}`);
    } else {
      // Shouldn't happen, but should catch it at some point.
      console.err(new Error(`Logger Error: Update Level is not a number. ${level}`));
    }
  }

  log(message, level = 0) {
    if (Number.isInteger(level) && level <= this.logLevel)
    {
      console.log(`${'='.repeat(level * 4 + 3)} ${message}`);
    }
  }
}

const Logger = new logger();

export default Logger;
