describe('SingleNoteView', () => {
  it('can view a single note', () => {
    var note = new Note("Favorite pet: cat");
    var singleNote = new SingleNoteView(note);
    expect(singleNote.show()).toEq("<div>Favorite pet: cat</div>")
  });
});