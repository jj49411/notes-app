var assert = {
  isTrue: function(expect, actual) {
    if(expect === actual) {
      console.log(":)");
    }else{
      console.log(":(");
    }
  }
}

var describe = (description, assertion) => {
  console.log(description);
  assertion();
}