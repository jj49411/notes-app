'use strict';

class Note {
  constructor(text = null) {
    this.text = text;
  }
  write(text) {
    this.text = text;
  }
  read() {
    return this.text;
  }
}


