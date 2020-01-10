'use strict';

class SingleNoteView {
  constructor(note = new Note()) {
    this.note = note;
  }
  show() {
    return "<div>" + this.note.read() + "</div>"
  }
}

