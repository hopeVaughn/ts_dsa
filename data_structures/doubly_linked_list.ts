/*
The code below implements a doubly linked list data structure in TypeScript. A doubly linked list is a linked data structure that consists of a set of sequentially linked nodes, each containing a val value and two pointers: prev that points to the previous node, and next that points to the next node in the sequence.

The code begins with the definition of the ListNode class, which defines the structure of each node in the doubly linked list. The ListNode class has three properties: val, which stores the value of the node, prev which stores the reference to the previous node, and next which stores the reference to the next node. The constructor function is used to create a new node with the given val, prev and next values.

The DoublyLinkedList class is defined next, which maintains a reference to the head and tail nodes of the list, and also keeps track of the current size of the list. The constructor function initializes the head, tail, and size properties to null, null, and 0, respectively.

The class also defines three methods for the doubly linked list:

addAtHead(val) adds a new node with the given val value to the beginning of the list. It creates a new node with the val value, sets its next pointer to the current head node, sets the head node's prev pointer to the new node, and updates the head pointer to point to the new node.
addAtTail(val) adds a new node with the given val value to the end of the list. It creates a new node with the val value, sets its prev pointer to the current tail node, sets the tail node's next pointer to the new node, and updates the tail pointer to point to the new node.
get(index) returns the value of the node at the given index in the list. It traverses the list to find the node at the given index and returns its val value. If the index is out of bounds, it returns -1.
deleteAtIndex(index) deletes the node at the given index in the list. It traverses the list to find the node at the given index, sets the next pointer of the previous node to the node after the one to be deleted, and sets the prev pointer of the next node to the node before the one to be deleted. If the node being deleted is the head node, it updates the head pointer to point to the next node in the list, and if the node being deleted is the tail node, it updates the tail pointer to point to the previous node in the list. The size of the list is decremented by one.
Finally, the example usage code creates a new instance of the DoublyLinkedList class and calls the addAtHead, addAtTail, and deleteAtIndex methods to add and delete nodes from the list, demonstrating the functionality of the doubly linked list data structure.
*/

// Define the node class for the doubly linked list
class ListNode {
  val: any;
  next: ListNode | null;
  prev: ListNode | null;

  // Constructor to create a new node with a given value, next node, and previous node
  constructor (val: any, next: ListNode | null = null, prev: ListNode | null = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

// Define the doubly linked list class
class DoublyLinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  size: number;

  // Constructor to create a new doubly linked list with a null head and tail, and a size of 0
  constructor () {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Method to add a node with a given value to the beginning of the list
  addAtHead(val: any): void {
    const newNode = new ListNode(val, this.head, null);
    if (this.head !== null) {
      this.head.prev = newNode;
    } else {
      this.tail = newNode;
    }
    this.head = newNode;
    this.size++;
  }

  // Method to add a node with a given value to the end of the list
  addAtTail(val: any): void {
    const newNode = new ListNode(val, null, this.tail);
    if (this.tail !== null) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.size++;
  }

  // Method to get the value of the node at a given index in the list
  get(index: number): any {
    // If the index is out of bounds, return -1
    if (index < 0 || index >= this.size) {
      return -1;
    }

    // Traverse the list to find the node at the given index, and return its value
    let curr: ListNode;
    if (index < this.size / 2) {
      curr = this.head!;
      for (let i = 0; i < index; i++) {
        curr = curr.next!;
      }
    } else {
      curr = this.tail!;
      for (let i = this.size - 1; i > index; i--) {
        curr = curr.prev!;
      }
    }
    return curr.val;
  }

  // Method to delete the node at a given index in the list
  deleteAtIndex(index: number): void {
    // If the index is out of bounds, return
    if (index < 0 || index >= this.size) {
      return;
    }

    // Traverse the list to find the node at the given index
    let curr: ListNode;
    if (index < this.size / 2) {
      curr = this.head!;
      for (let i = 0; i < index; i++) {
        curr = curr.next!;
      }
    } else {
      curr = this.tail!;
      for (let i = this.size - 1; i > index; i--) {
        curr = curr.prev!;
      }
    }

    // If the node has a previous node, set its next to the node after the one to be deleted. Otherwise, set the head to the node after the one to be deleted.
    if (curr.prev !== null) {
      curr.prev.next = curr.next;
    } else {
      this.head = curr.next;
    }

    // If the node has a next node, setthe next node's previous to the node before the one to be deleted. Otherwise, set the tail to the node before the one to be deleted.
    if (curr.next !== null) {
      curr.next.prev = curr.prev;
    } else {
      this.tail = curr.prev;
    }

    // Decrement the size of the list
    this.size--;
  }
}

// Example usage
console.log("Creating a new doubly linked list");
const myList = new DoublyLinkedList();
console.log("Adding 1 to the head of the list");
myList.addAtHead(1);
console.log("Expected output: [1], Actual output: ", myList);
console.log("Adding 3 to the tail of the list");
myList.addAtTail(3);
console.log("Expected output: [1, 3], Actual output: ", myList);
console.log("Adding 2 to the head of the list");
myList.addAtHead(2);
console.log("Expected output: [2, 1, 3], Actual output: ", myList);
console.log("Deleting the node at index 1");
myList.deleteAtIndex(1);
console.log("Expected output: [2, 3], Actual output: ", myList);






