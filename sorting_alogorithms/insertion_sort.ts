/*
In this implementation, the function insertionSort takes an array of numbers as an input and returns a sorted array using the insertion sort algorithm.

The algorithm works by iterating through the array and inserting each element into its correct position in the sorted portion of the array. The outer loop runs length - 1 times, while the inner loop runs until the key element is in its correct position in the sorted portion of the array.

This algorithm also has a time complexity of O(n^2), but it can perform better than selection sort and bubble sort for small or nearly sorted arrays. However, it is still not suitable for sorting large arrays.
*/
function insertionSort(array: number[]): number[] {
  const length = array.length;
  for (let i = 1; i < length; i++) {
    const key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;
  }
  return array;
}
