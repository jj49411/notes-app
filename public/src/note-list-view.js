'use strict';

class NoteListView {
  constructor (noteList = new NoteList()) {
    this.noteList = noteList;
  }
  render(){
    return "<ul>" + this.noteList.showNotes().map(note => {
      return "<li><div>" + note.slice(0, 20) + "</div></li>"
    }).join("") + "</ul>"
  }
}

