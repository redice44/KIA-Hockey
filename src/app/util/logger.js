'use strict';

class logger {
  constructor(logLevel = 3) {
    this.logLevel = logLevel;
  }

  setLevel(level) {
    if (Number.isInteger(level)) {
      this.logLevel = level;
    } else {
      // Shouldn't happen, but should catch it at some point.
      console.err(new Error(`Logger Error: Update Level is not a number. ${level}`));
    }
  }

  log(message, level = 0) {
    if (Number.isInteger(level) && level <= this.logLevel)
    {
      console.log(`${'='.repeat(level * 2 + 1)} ${message}`);
    }
  }
}

const Logger = new logger();

export default Logger;
