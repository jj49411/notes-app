// var assert = {
//   isTrue: function(expect, actual) {
//     if(expect === actual) {
//       console.log("Test passed");
//     }else{
//       console.log("Failed");
//     }
//   },
//   isTruthy: function(assertionToCheck) {
//     if(!assertionToCheck) {
//       console.log("Failed") 
//     }else {
//       console.log("Test passed")
//     }
//   }
// }

// var describe = (description, assertion) => {
//   console.log(description);
//   assertion();
// }

const describe = (description, callback) => {
  console.log(description)
  callback()
}
const it = (msg, callback) => {
  console.log('   ' + msg)
  callback()
}
const matchers = (exp) => ({
  toEq: (val) => {
    if (exp === val) {
      console.log('%c    passed', 'color: #00FF00')
    } else {
      console.log(`%c    Failed. (expect ${exp} to equal ${val})`, 'color: #FF0000')
    }
  },
  isInstanceOf: (val) => {
    if (exp instanceof val) {
      console.log('%c    passed', 'color: #00FF00')
    } else {
      console.log(`%c    Failed. (expect ${exp} to be instance of ${val})`, 'color: #FF0000')
    }
  }
})
const expect = (exp) => matchers(exp)
