'use strict';
var id = 0;

class Note {
  constructor(text = null) {
    this.text = text;
    this.id = id++;
  }
  write(text) {
    this.text = text;
  }
  read() {
    return this.text;
  }
}

(function(exports) {
  function resetId() {
    id = 0;
  }
  exports.resetId = resetId;
})(this)
