var testNoteList = new NoteList();
// var testNote1 = new Note("Yehays");
// var testNote2 = new Note("Oh no");
// var testNote3 = new Note("Maybe");
testNoteList.add("Yehays", "Oh no", "Maybe");
var firstNote = testNoteList.showNotes()[0]
assert.isTrue(firstNote, "Yehays");