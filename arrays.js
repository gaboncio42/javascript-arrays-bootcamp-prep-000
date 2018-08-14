var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var newCandy = "foo";

function addElementToBeginningOfArray (chocolateBars, newCandy) {
  return [newCandy, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray (chocolateBars, newCandy) {
  chocolateBars.unshift(newBar);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, newBar) {
  return [...chocolateBars, newBar];
}

function destructivelyAddElementToEndOfArray(chocolateBars, newBar) {
  chocolateBars.push(newBar);
  return chocolateBars;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.slice(1);
}