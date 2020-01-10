describe('NoteListView', () => {
  it('can return notes', () => {
    function NoteListDouble(note1, note2) {
      this.note1 = note1;
      this.note2 = note2;
    };
    NoteListDouble.prototype = {
      showNotes: function() {
        return [note1, note2]
      }
    }
    
    function NoteDouble(text, id) {
      this.text = text;
      this.id = id;
    };
    NoteDouble.prototype = {
      read: function() {
        return this.text;
      }
    }
    let note1 = new NoteDouble("Favourite food: pesto", 0)
    let note2  = new NoteDouble("Favourite drink: seltzer", 1)
    let testNoteList = new NoteListDouble(note1, note2)
    
    let testNoteListView = new NoteListView(testNoteList);
    expectedNoteListModel = `<ul><li><div id="note_0"><a href = '#notes/0'>Favourite food: pest...</a></div></li><li><div id="note_1"><a href = '#notes/1'>Favourite drink: sel...</a></div></li></ul>`
    expect(testNoteListView.getHTML()).toEq(expectedNoteListModel)
  });

  it('can return no notes', () => {
    testNoteList2 = new NoteList();
    testNoteListView = new NoteListView(testNoteList2);
    expectedNoteListModel = "<ul></ul>"
    expect(testNoteListView.getHTML()).toEq(expectedNoteListModel) 
  });
});
