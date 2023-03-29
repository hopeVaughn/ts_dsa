/*
In this implementation, the function heapSort takes an array of numbers as an input and returns a sorted array using the heap sort algorithm.

The algorithm works by first building a max heap from the input array, then repeatedly extracting the maximum element from the heap and swapping it with the last element of the heap, reducing the size of the heap by one each time.

The heapify function is used to maintain the max heap property, which states that the value of a node must be greater than or equal to the values of its children. The swap function is a helper function used to swap elements in the array.

This algorithm has a time complexity of O(n log n) and is generally considered efficient for sorting large arrays. However, it can be less efficient than quick sort for smaller arrays and has a larger memory overhead due to the need to build and maintain the heap.
*/

function heapSort(array: number[]): number[] {
  const length = array.length;

  // Build max heap
  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    heapify(array, length, i);
  }

  // Heap sort
  for (let i = length - 1; i > 0; i--) {
    swap(array, 0, i);
    heapify(array, i, 0);
  }

  return array;
}

function heapify(array: number[], length: number, index: number): void {
  let largest = index;
  const left = 2 * index + 1;
  const right = 2 * index + 2;

  if (left < length && array[left] > array[largest]) {
    largest = left;
  }

  if (right < length && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== index) {
    swap(array, index, largest);
    heapify(array, length, largest);
  }
}

function swap(array: number[], i: number, j: number): void {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
