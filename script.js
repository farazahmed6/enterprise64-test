// a. Write a JavaScript function that takes an array of numbers and returns the largest number.
// b. Example: find Largest ([1, 3, 7, 2]) should return 7.

function largestElement(arr) {
  let largestnumber = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > largestnumber) {
      largestnumber = arr[i];
    }
  }
  return largestnumber;
}

arr = [1, 3, 7, 2];
number = largestElement(arr);
console.log("The largest number in array is " + number);
