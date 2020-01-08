import { AssertionError } from "assert";

describe('can display a note', () => {
  var noteController = new NoteController();
  noteController.add("Favourite drink: seltzer")
  noteController.render();
  noteController.displayHTML();
  assert.isTruthy(document.getElementById("app").innerHTML.include("Favourite drink: seltzer"))
});