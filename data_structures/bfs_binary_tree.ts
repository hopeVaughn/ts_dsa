class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(value: number): BinarySearchTree | undefined {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current: TreeNode | null = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value: number): TreeNode | null {
    if (this.root === null) return null;
    let current: TreeNode | null = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return null;
    return current;
  }

  contains(value: number): boolean {
    if (this.root === null) return false;
    let current: TreeNode | null = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  BFS(): number[] {
    if (this.root === null) {
      return [];
    }
    let node = this.root;
    let data: number[] = [];
    let queue: TreeNode[] = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift()!;
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}

//      10
//   5     13
// 2  7  11  16

const binaryTree = new BinarySearchTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(13);
binaryTree.insert(11);
binaryTree.insert(2);
binaryTree.insert(16);
binaryTree.insert(7);
console.log(binaryTree);
