var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var newCandy = "foo";

function addElementToBeginningOfArray (chocolateBars, newCandy) {
  return [newCandy, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray (chocolateBars, newCandy) {
  chocolateBars.unshift(newBar);
  return chocolateBars;
}