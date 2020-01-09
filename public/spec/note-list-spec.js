describe('can return note list', () => {
  var testNoteList = new NoteList();
  testNoteList.add("Yehays", "Oh no", "Maybe");
  var firstNote = testNoteList.showNotes()[0]
  assert.isTrue(firstNote, "Yehays");
});