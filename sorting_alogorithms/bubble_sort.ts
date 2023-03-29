/*
In this implementation, the function bubbleSort takes an array of numbers as an input and returns a sorted array using the bubble sort algorithm.

The algorithm works by iterating through the array multiple times, comparing adjacent pairs of elements and swapping them if they are in the wrong order. The outer loop runs length - 1 times, while the inner loop runs length - 1 - i times in each iteration of the outer loop, where i is the current iteration of the outer loop.

This algorithm has a time complexity of O(n^2), where n is the length of the input array, and is generally not suitable for sorting large arrays due to its poor performance. However, it can be useful for sorting small arrays or as a learning exercise to understand sorting algorithms.
*/

function bubbleSort(array: number[] | string[]): number[] | string[] {
  // Get the length of the input array
  const length = array.length;

  // Iterate over the input array up to the second-to-last element
  // Each iteration moves the largest unsorted element to the end of the array
  for (let i = 0; i < length - 1; i++) {
    // Iterate over the unsorted portion of the array
    // Each iteration swaps adjacent elements if they are in the wrong order
    for (let j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        // Swap adjacent elements if they are in the wrong order
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  // Return the sorted array
  return array;
}

// Test 1: Sort an array of integers
const arr1 = [3, 7, 1, 9, 4, 6];
console.log(`Original array: ${arr1}`);
const sortedArr1 = bubbleSort(arr1);
console.log(`Sorted array: ${sortedArr1}`);

// Test 2: Sort an array of floating-point numbers
const arr2 = [3.14, 1.5, 2.71, 0.5, 1.2];
console.log(`Original array: ${arr2}`);
const sortedArr2 = bubbleSort(arr2);
console.log(`Sorted array: ${sortedArr2}`);

// Test 3: Sort an array of strings
const arr3 = ["banana", "apple", "cherry", "durian", "fig"];
console.log(`Original array: ${arr3}`);
const sortedArr3 = bubbleSort(arr3);
console.log(`Sorted array: ${sortedArr3}`);

// Test 4: Sort an empty array
const arr4: number[] = [];
console.log(`Original array: ${arr4}`);
const sortedArr4 = bubbleSort(arr4);
console.log(`Sorted array: ${sortedArr4}`);

// Test 5: Sort an array with only one element
const arr5 = [42];
console.log(`Original array: ${arr5}`);
const sortedArr5 = bubbleSort(arr5);
console.log(`Sorted array: ${sortedArr5}`);