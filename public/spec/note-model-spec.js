
describe("can returns a note", () => {
  var testNote = new Note();
  testNote.write('It is a note');
  assert.isTrue(testNote.read(), 'It is a note');
});

describe('can return any given string', () => {
  var testNote2 = new Note();
  testNote2.write("I am very very calm I promise.")
  assert.isTrue(testNote2.read(), 'I am very very calm I promise.');
});