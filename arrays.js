var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
newBar = ['foo'];

function addElementToBeginningOfArray(chocolateBars, newBar) {
  return ("newBar",..."chocolateBars");
}

function destructivelyAddElementToBeginnigOfArray(chocolateBars, newBar) {
  chocolateBars.unshift("newBar");
  return chocolateBars;
}