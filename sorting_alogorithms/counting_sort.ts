/*
In this implementation, the function countingSort takes an array of numbers as an input and returns a sorted array using the counting sort algorithm.

The algorithm works by counting the number of occurrences of each element in the input array and then using this information to sort the array. The counting is done using an auxiliary array, countArray, which stores the count of each element. The running sum of the counts is then calculated to determine the position of each element in the output array, which is built by iterating over the input array in reverse order.

This algorithm has a time complexity of O(n + k), where n is the length of the input array and k is the range of values in the input array. It is particularly useful when the range of values in the input array is small compared to the size of the input array. However, it may use more memory than other sorting algorithms due to the need to create the auxiliary array.
*/

function countingSort(array: number[]): number[] {
  const length = array.length;
  const countArray = new Array(length).fill(0);

  // Count the number of occurrences of each element
  for (let i = 0; i < length; i++) {
    countArray[array[i]]++;
  }

  // Calculate the running sum of counts
  for (let i = 1; i < length; i++) {
    countArray[i] += countArray[i - 1];
  }

  const result = new Array(length);
  for (let i = length - 1; i >= 0; i--) {
    result[countArray[array[i]] - 1] = array[i];
    countArray[array[i]]--;
  }

  return result;
}
