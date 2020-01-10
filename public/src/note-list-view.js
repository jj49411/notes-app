'use strict';

class NoteListView {
  constructor (noteList = new NoteList()) {
    this.noteList = noteList;
  }
  getHTML(){
    return "<ul>" + this.noteList.showNotes().map(note => {
      var noteText = note.read();
      var noteId = note.id;
      if(noteText.length > 20) noteText = noteText.slice(0, 20) + "..."
      return `<li><div id="note_${noteId}"><a href = '#notes/${noteId}'>${noteText}</a></div></li>`
    }).join("") + "</ul>"
  }
}

