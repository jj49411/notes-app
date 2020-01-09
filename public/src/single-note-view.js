'use strict';

// class SingleNoteView {
//   constructor(note) {
//     this.note = note;
//   }
//   show(note) {
//     return "<div>" + this.note + "</div>"
//   }
// }


class SingleNoteView {
  constructor(note = new Note()) {
    this.note = note;
  }
  show() {
    return "<div>" + this.note.read() + "</div>"
  }
}



// var singleNote = new SingleNoteView();
// document.addEventListener("click", function(e) {
//   if(e.target.tagName == "LI") {
//     console.log("this");
//   }
  
// });

// console.log(document.getElementById("app").getElementsByTagName("ul")[0].querySelectorAll("li"))

