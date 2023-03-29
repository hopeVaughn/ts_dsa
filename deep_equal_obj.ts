/*
This function takes two objects as arguments and returns true if they are deeply equal, or false if they are not. Here's how the function works:

First, we check if the two objects are strictly equal using the === operator. If they are, we can immediately return true.

Next, we check if the two objects are both non-null objects using the typeof operator and the null keyword. If either object is not an object or is null, we can immediately return false.

We get the keys of each object using the Object.keys() method.

If the objects have a different number of keys, they are not equal, so we can immediately return false.

We iterate over the keys of the first object using a for...of loop.

For each key, we check if the second object has the same key using the includes() method. If it doesn't, we can immediately return false.

We then recursively check if the values of the keys are equal using the deepEqual() function itself. This allows us to perform a deep equal check on nested objects.

If we make it through all the checks, the objects are equal, so we can return true.

Note that this function only works for objects and not for other data types such as arrays or primitive values. If you need to perform a deep equal check on other types, you'll need to modify the function accordingly.
*/

function deepEqual(obj1: Record<string, any>, obj2: Record<string, any>): boolean {
  // Check if the objects are strictly equal
  if (obj1 === obj2) {
    return true;
  }

  // Check if the objects are both non-null objects
  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return false;
  }

  // Get the keys of each object
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // If the objects have a different number of keys, they are not equal
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Iterate over the keys of the first object
  for (const key of keys1) {
    // If the second object doesn't have the same key, they are not equal
    if (!keys2.includes(key)) {
      return false;
    }

    // Recursively check if the values of the keys are equal
    if (!deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  // If we made it through all the checks, the objects are equal
  return true;
}

// Test case 1: Two objects with different values
const obj1 = { name: 'John', age: 30 };
const obj2 = { name: 'John', age: 40 };
console.log(deepEqual(obj1, obj2)); // Expected output: false

// Test case 2: Two objects with the same values
const obj3 = { name: 'John', age: 30 };
const obj4 = { name: 'John', age: 30 };
console.log(deepEqual(obj3, obj4)); // Expected output: true

// Test case 3: Two objects with different keys
const obj5 = { name: 'John', age: 30 };
const obj6 = { name: 'John', city: 'New York' };
console.log(deepEqual(obj5, obj6)); // Expected output: false

// Test case 4: Two objects with nested objects
const obj7 = { name: 'John', address: { city: 'New York', state: 'NY' } };
const obj8 = { name: 'John', address: { city: 'New York', state: 'NY' } };
const obj9 = { name: 'John', address: { city: 'San Francisco', state: 'CA' } };
console.log(deepEqual(obj7, obj8)); // Expected output: true
console.log(deepEqual(obj7, obj9)); // Expected output: false
