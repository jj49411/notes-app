// import { resetId } from "../src/note-model";

// import { resetId } from "../src/note-model";

describe('NoteController', () => {
  it('can display a note', () => {
    resetId();
    var elementDouble = document.createElement("div")
    elementDouble.innerHTML = "hello"
    var noteController = new NoteController();
    console.log(noteController)
    noteController.displayHTML(elementDouble);
    expect(elementDouble.innerHTML).toEq('<ul><li><div id="note_0"><a href="#notes/0">Favourite drink: sel...</a></div></li></ul>')
  });

  it('should display the full note upon clicking', () => {
    resetId();
    var noteList = new NoteList();
    noteList.add("Favourite drink: coke")
    var noteController = new NoteController(noteList);
    noteController.displayHTML();
    noteController.hashChange();
    console.log(document.getElementById("app"))  
    console.log(document.getElementById("note_0").href)  
    document.getElementById("note_0").click();
    // setTimeout(function() {
    expect(document.getElementById("app").textContent).toEq("Favourite drink: coke")
    // }, 1000)
  });
});

