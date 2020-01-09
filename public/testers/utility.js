var assert = {
  isTrue: function(expect, actual) {
    if(expect === actual) {
      console.log("Test passed");
    }else{
      console.log("Failed");
    }
  },
  isTruthy: function(assertionToCheck) {
    if(!assertionToCheck) {
      console.log("Failed") 
    }else {
      console.log("Test passed")
    }
  }
}

var describe = (description, assertion) => {
  console.log(description);
  assertion();
}