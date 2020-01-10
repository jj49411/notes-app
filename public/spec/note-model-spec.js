// import { resetId } from "../src/note-model";

describe('Note', () => {
  it('each note is created with a unique id', () => {
    resetId();
    var testNote3 = new Note();
    var testNote4 = new Note();
    testNote3.write("I am a note")
    testNote4.write("I am Harrison")
    expect(testNote3.id).toEq(0);
    expect(testNote4.id).toEq(1);
  });
  
  it('can return any given string', () => {
    var testNote2 = new Note();
    testNote2.write("I am very very calm I promise.")
    expect(testNote2.read()).toEq('I am very very calm I promise.');
  });

});