'use strict';

class NoteController {
  constructor(noteListModel = new NoteList()) {
    this.noteListModel = noteListModel;
  }
  displayHTML() {
    this.noteListModel.add("Favourite drink: seltzer")
    var noteListView = new NoteListView(this.noteListModel)
    var html = noteListView.render();
    document.getElementById("app").innerHTML = html;
  }

}
var controller = new NoteController();
controller.displayHTML();
