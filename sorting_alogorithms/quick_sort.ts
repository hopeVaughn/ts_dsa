/*
In this implementation, the function quickSort takes an array of numbers as an input and returns a sorted array using the quick sort algorithm.

The algorithm works by partitioning the array around a pivot element, then recursively sorting the two subarrays created by the partition. The partition function takes the left and right indices of the subarray to be partitioned, selects the rightmost element as the pivot, and rearranges the elements in the subarray such that all elements less than the pivot are to its left, and all elements greater than or equal to the pivot are to its right.

This algorithm has a time complexity of O(n log n) on average and O(n^2) in the worst case, but it is generally considered more efficient than the other O(n^2) sorting algorithms we've discussed. It is suitable for sorting large arrays, but its performance can be sensitive to the choice of pivot element.
*/

function quickSort(array: number[], left: number = 0, right: number = array.length - 1): number[] {
  if (left < right) {
    const pivotIndex = partition(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}

function partition(array: number[], left: number, right: number): number {
  const pivotValue = array[right];
  let pivotIndex = left;
  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, pivotIndex);
      pivotIndex++;
    }
  }
  swap(array, pivotIndex, right);
  return pivotIndex;
}

function swap(array: number[], i: number, j: number): void {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
