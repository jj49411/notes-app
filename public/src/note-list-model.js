// var assert = {
//   isTrue: function(expect, actual) {
//     if(expect === actual) {
//       console.log(":)");
//     }else{
//       console.log(":(");
//     }
//   }
// }

class NoteList {
  constructor (notes = []) {
    this.notes = notes
  }
  add(...notes) {
    notes.forEach(note => {
      this.notes.push(new Note(note))
    });
  }
  showNotes(){
  return this.notes.map(note => note.read());
  }
}


