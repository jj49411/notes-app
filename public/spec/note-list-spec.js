describe('NoteList', () => {
  it('can return note list', () => {
    var testNoteList = new NoteList();
    testNoteList.add("Yehays", "Oh no", "Maybe");
    var firstNote = testNoteList.showNotes()[0]
    expect(firstNote.read()).toEq("Yehays");
  });
});