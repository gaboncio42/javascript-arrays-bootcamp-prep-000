 var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return chocolateBars.unshift("foo");
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  chocolateBars = ["foo",...chocolateBars];
  return chocolateBars;
}