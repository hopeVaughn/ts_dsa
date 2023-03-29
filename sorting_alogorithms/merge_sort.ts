/*
In this implementation, the function mergeSort takes an array of numbers as an input and returns a sorted array using the merge sort algorithm.

The algorithm works by recursively dividing the array into two halves, sorting each half, and then merging the sorted halves back together. The merge function takes two sorted arrays as inputs and merges them into a single sorted array.

This algorithm has a time complexity of O(n log n), which makes it more efficient than the previous sorting algorithms we've discussed. It is suitable for sorting large arrays, but it can use more memory than other algorithms due to the need to create temporary arrays during the merge process.
*/
function mergeSort(array: number[]): number[] {
  const length = array.length;
  if (length <= 1) {
    return array;
  }
  const mid = Math.floor(length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));
  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

