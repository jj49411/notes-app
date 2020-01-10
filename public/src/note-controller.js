'use strict';

class NoteController {
  constructor(noteListModel = new NoteList()) {
    this.noteListModel = noteListModel;
    this.noteListModel.add("Favourite drink: seltzer")
    this.noteListView = new NoteListView(noteListModel)
  }

  displayHTML(element = document.getElementById("app")) {
    var html = this.noteListView.getHTML();
    element.innerHTML = html;
  }

  hashChange() {
    window.addEventListener("hashchange", this.showContentForCurrentPage)
  }
  //when hash has changed

  getIdFromUrl(location){
    return location.hash.split("#notes/")[1];
  }
  
  showContentForCurrentPage() {
    // console.log(this)
    // console.log(this.controller)
    // console.log(this.controller.showContent)
    // console.log(this.controller.getIdFromUrl)
    this.controller.showContent(this.controller.getIdFromUrl(window.location));
  }
  //get the id of note from Url

  showContent(id) {
    // console.log(this.noteListModel.showNotes())

    var note = this.noteListModel.showNotes().filter(note => note.id === +id)[0]
    // console.log('target note: ', note)
    var singleNote = new SingleNoteView(note) 
    // console.log(singleNote.note);
    // (I can get the id but how to pass the note object?)
    var singleNoteContent = singleNote.show();
    document.getElementById("app").innerHTML = singleNoteContent;
  }


}
var controller = new NoteController();
controller.displayHTML();
controller.hashChange();
