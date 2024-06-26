export default function appendToEachArrayValue(array, appendString) {
    for (const i of array) {
      array[array.indexOf(i)] = appendString + i;
    }
  
    return array;
  }
  