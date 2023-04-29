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
    let data: number[] = [];
    if (this.root === null) return data;
    let queue: TreeNode[] = [this.root];

    while (queue.length) {
      let node: TreeNode = queue.shift()!;
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder(): number[] {
    let data: number[] = [];
    function traverse(node: TreeNode) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    if (this.root) traverse(this.root);
    return data;
  }

  DFSPostOrder(): number[] {
    let data: number[] = [];
    function traverse(node: TreeNode) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    if (this.root) traverse(this.root);
    return data;
  }

  DFSInOrder(): number[] {
    let data: number[] = [];
    function traverse(node: TreeNode) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    if (this.root) traverse(this.root);
    return data;
  }
}

const binaryTree = new BinarySearchTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(13);
binaryTree.insert(11);
binaryTree.insert(2);
binaryTree.insert(16);
binaryTree.insert(7);
console.log(binaryTree);
