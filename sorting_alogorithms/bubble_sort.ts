/*
In this implementation, the function bubbleSort takes an array of numbers as an input and returns a sorted array using the bubble sort algorithm.

The algorithm works by iterating through the array multiple times, comparing adjacent pairs of elements and swapping them if they are in the wrong order. The outer loop runs length - 1 times, while the inner loop runs length - 1 - i times in each iteration of the outer loop, where i is the current iteration of the outer loop.

This algorithm has a time complexity of O(n^2), where n is the length of the input array, and is generally not suitable for sorting large arrays due to its poor performance. However, it can be useful for sorting small arrays or as a learning exercise to understand sorting algorithms.
*/

function bubbleSort(array: number[]): number[] {
  const length = array.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}