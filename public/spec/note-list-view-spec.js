
describe('can return two notes', () => {
  let testNoteList2 = new NoteList();
  let testNoteListView = new NoteListView(testNoteList2);
  let foodThatGood = "Favourite food: pesto"
  let drinkThatGood = "Favourite drink: seltzer"
  testNoteList2.add(foodThatGood, drinkThatGood);
  expectedNoteListModel = "<ul><li><div>Favourite food: pest</div></li><li><div>Favourite drink: sel</div></li></ul>"
  console.log(testNoteListView.render());
  assert.isTrue(testNoteListView.render(), expectedNoteListModel)
});

describe('can return one note', () => {
  testNoteList2 = new NoteList();
  testNoteListView = new NoteListView(testNoteList2);
  let thisIsADifferentNote = "nothing!"
  testNoteList2.add(thisIsADifferentNote);
  expectedNoteListModel = "<ul><li><div>nothing!</div></li></ul>"
  assert.isTrue(testNoteListView.render(), expectedNoteListModel);
});

describe('can return no notes', () => {
  testNoteList2 = new NoteList();
  testNoteListView = new NoteListView(testNoteList2);
  expectedNoteListModel = "<ul></ul>"
  assert.isTrue(testNoteListView.render(), expectedNoteListModel);
});
