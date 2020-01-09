describe('can view a single note', () => {
  var note = new Note("Favorite pet: cat");
  var singleNote = new SingleNoteView(note);
  assert.isTrue(singleNote.show(), "<div>Favorite pet: cat</div>")
});