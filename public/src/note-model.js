'use strict';

// var assert = {
//   isTrue: function(expect, actual) {
//     if(expect === actual) {
//       console.log(":)");
//     }else{
//       console.log(":(");
//     }
//   }
// }

class Note {
  constructor(text = null) {
    this.text = text;
  }
  write(text) {
    this.text = text;
  }
  read() {
    return this.text;
  }
}


