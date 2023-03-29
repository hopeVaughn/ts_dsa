/*
In this implementation, the ListNode class represents each node in the linked list, and the LinkedList class represents the linked list as a whole. The ListNode class has a val property, which holds the value of the node, and a next property, which points to the next node in the list.

The LinkedList class has a head property, which points to the first node in the list, and a size property, which keeps track of the number of nodes in the list. It also has four methods:

addAtHead(val: any): Adds a node with the given value at the beginning of the list.
addAtTail(val: any): Adds a node with the given value at the end of the list.
get(index: number): Returns the value of the node at the given index in the list.
deleteAtIndex(index: number): Deletes the node at the given index in the list.
*/

// Define the node class for the linked list
class ListNode {
  val: any;
  next: ListNode | null;

  // Constructor to create a new node with a given value and next node
  constructor (val: any, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

// Define the linked list class
class LinkedList {
  head: ListNode | null;
  size: number;

  // Constructor to create a new linked list with a null head and a size of 0
  constructor () {
    this.head = null;
    this.size = 0;
  }

  // Method to add a node with a given value to the beginning of the list
  addAtHead(val: any): void {
    const newNode = new ListNode(val, this.head);
    this.head = newNode;
    this.size++;
  }

  // Method to add a node with a given value to the end of the list
  addAtTail(val: any): void {
    const newNode = new ListNode(val);

    // If the list is empty, set the new node as the head
    if (this.head === null) {
      this.head = newNode;
    } else {
      // Traverse the list to find the last node, and set its next to the new node
      let curr = this.head;
      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
    this.size++;
  }

  // Method to get the value of the node at a given index in the list
  get(index: number): any {
    // If the index is out of bounds, return -1
    if (index < 0 || index >= this.size) {
      return -1;
    }

    // Traverse the list to find the node at the given index, and return its value
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr!.next;
    }
    return curr!.val;
  }

  // Method to delete the node at a given index in the list
  deleteAtIndex(index: number): void {
    // If the index is out of bounds, return
    if (index < 0 || index >= this.size) {
      return;
    }

    // If deleting the head, set the next node as the new head
    if (index === 0) {
      this.head = this.head!.next;
    } else {
      // Traverse the list to find the node before the one to be deleted, and set its next to the node after the one to be deleted
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr!.next;
      }
      curr!.next = curr!.next!.next;
    }
    this.size--;
  }
}

const list = new LinkedList();
list.addAtHead(1);
list.addAtTail(2);
list.addAtTail(3);
console.log(list.get(1)); // Output: 2
list.deleteAtIndex(1);
console.log(list.get(1)); // Output: 3
