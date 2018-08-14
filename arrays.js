chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return chocolateBars.unshift("foo");
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var f = "foo";
  return (f,...chocolateBars);
}