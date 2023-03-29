/*
In this implementation, the function radixSort takes an array of numbers as an input and returns a sorted array using the radix sort algorithm.

The algorithm works by sorting the array one digit at a time, starting with the least significant digit and moving to the most significant digit. The countingSort function is used as a subroutine to sort the array based on a particular digit. This process is repeated for each digit until the entire array is sorted.

This algorithm has a time complexity of O(kn), where k is the number of digits in the maximum value in the array and n is the length of the array. It is particularly useful when the range of values in the input array is large compared to the size of the input array. However, it may use more memory than other sorting algorithms due to the need to create the auxiliary array.
*/


function radixSort(array: number[]): number[] {
  const length = array.length;
  const max = Math.max(...array);
  let exp = 1;

  while (Math.floor(max / exp) > 0) {
    countingSort(array, exp);
    exp *= 10;
  }

  return array;
}

function countingSort(array: number[], exp: number): void {
  const length = array.length;
  const countArray = new Array(10).fill(0);

  // Count the number of occurrences of each digit
  for (let i = 0; i < length; i++) {
    const digit = Math.floor(array[i] / exp) % 10;
    countArray[digit]++;
  }

  // Calculate the running sum of counts
  for (let i = 1; i < 10; i++) {
    countArray[i] += countArray[i - 1];
  }

  const result = new Array(length);
  for (let i = length - 1; i >= 0; i--) {
    const digit = Math.floor(array[i] / exp) % 10;
    result[countArray[digit] - 1] = array[i];
    countArray[digit]--;
  }

  for (let i = 0; i < length; i++) {
    array[i] = result[i];
  }
}
