var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var newArr = [element, ...array];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var newArr = [...array, element];
  return newArr;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array, index) {
  array.shift(element);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  array.push(element);
  return array;
}

function removeElementFromEndOfArray(array, element) {
  array.slice(-1);
}

