

class NoteListView {
  constructor (noteList = new NoteList()) {
    this.noteList = noteList;
  }
  render(){
    return "<ul>" + this.noteList.showNotes().map(note => {
      return "<li><div>" + note + "</div></li>"
    }).join("") + "</ul>"
  }
}

