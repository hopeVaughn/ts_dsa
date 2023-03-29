/*
The quickSort function works by recursively partitioning an array around a pivot value, and then sorting the sub-arrays to the left and right of the pivot.

The partition function is a helper function that partitions the array around the right-most element (the pivot), and returns the index of the partition. The swap function is another helper function that swaps the positions of two elements in an array.

The quickSort function starts by checking if the left index is less than the right index. If it is, it partitions the array using the partition function, and then recursively sorts the sub-arrays to the left and right of the pivot using the quickSort function.

The partition function sets the pivot value to be the right-most element, and the pivot index to be the left-most element. It then iterates over the array from left to right, comparing each element to the pivot value. If the current element is less than the pivot value, it swaps it with the element at the pivot index and increments the pivot index. Finally, it swaps the pivot value with the element at the pivot index, so that the pivot value is in its correct sorted position. The function then returns the pivot index, which represents the partition between the sub-arrays.

The swap function is a simple helper function that swaps the values of two elements in an array. It takes an array and two indices as arguments, and modifies the array in place.

Overall, the quickSort function is a powerful and efficient sorting algorithm that can handle large data sets with ease.
*/

function quickSort(array: number[], left: number = 0, right: number = array.length - 1): number[] {
  // If the left index is less than the right index
  if (left < right) {
    // Partition the array using the right-most element as the pivot
    const pivotIndex = partition(array, left, right);

    // Recursively sort the sub-arrays to the left and right of the pivot
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }

  // Return the sorted array
  return array;
}

function partition(array: number[], left: number, right: number): number {
  // Set the pivot value to be the right-most element
  const pivotValue = array[right];
  // Set the pivot index to be the left-most element
  let pivotIndex = left;

  // Iterate over the array from the left to the right, comparing each element to the pivot value
  for (let i = left; i < right; i++) {
    // If the current element is less than the pivot value
    if (array[i] < pivotValue) {
      // Swap the current element with the element at the pivot index
      swap(array, i, pivotIndex);
      // Increment the pivot index
      pivotIndex++;
    }
  }

  // Swap the pivot value with the element at the pivot index, so that the pivot value is in its correct sorted position
  swap(array, pivotIndex, right);

  // Return the pivot index, which represents the partition between the sub-arrays
  return pivotIndex;
}

function swap(array: number[], i: number, j: number): void {
  // Swap the values of the two specified elements in the array
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}


// Test 1: Sort an array of integers
const arr1 = [3, 7, 1, 9, 4, 6];
console.log(`Original array: ${arr1}`);
const sortedArr1 = quickSort(arr1);
console.log(`Sorted array: ${sortedArr1}`);

// Test 2: Sort an array of floating-point numbers
const arr2 = [3.14, 1.5, 2.71, 0.5, 1.2];
console.log(`Original array: ${arr2}`);
const sortedArr2 = quickSort(arr2);
console.log(`Sorted array: ${sortedArr2}`);

// Test 3: Sort an array of negative numbers
const arr3 = [-3, -7, -1, -9, -4, -6];
console.log(`Original array: ${arr3}`);
const sortedArr3 = quickSort(arr3);
console.log(`Sorted array: ${sortedArr3}`);

// Test 4: Sort an empty array
const arr4: number[] = [];
console.log(`Original array: ${arr4}`);
const sortedArr4 = quickSort(arr4);
console.log(`Sorted array: ${sortedArr4}`);

// Test 5: Sort an array with only one element
const arr5 = [42];
console.log(`Original array: ${arr5}`);
const sortedArr5 = quickSort(arr5);
console.log(`Sorted array: ${sortedArr5}`);