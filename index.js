class Node {
  constructor (element) {
    this.element = element;
    this.pointer = null;
  }
};

class LinkedList
{
  constructor() {
    this.size = 0;
    this.head = null;

    if (arguments[0]) {
      let x = 0;
      while (arguments[x]) {
        this.add(arguments[x])
        x ++;
      }
    }
  };

  getSize () {
    return this.size;
  };

  getHead () {
    return this.head;
  };

  add (element) {
    let node = new Node(element);
    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;

      while (currentNode.pointer) {
        currentNode = currentNode.pointer;
      }

      currentNode.pointer = node;
    }

    this.size ++;
  };

  remove (element) {
    let currentNode = this.head;
    let previousNode;
    if (currentNode.element === element) {
      this.head = currentNode.pointer;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.pointer;
      }

      previousNode.pointer = currentNode.pointer;
    }

    this.size --;
  };

  isEmpty () {
    return this.size === 0;
  };

  indexOf (element) {
    let currentNode = this.head;
    let index = -1;

    while (currentNode) {
      index ++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.pointer;
    }

    return -1;
  };

  elementAt (index) {
    let currentNode = this.head;
    let count = 0;
    while (count < index) {
      count ++;
      currentNode = currentNode.pointer;
    }
    return currentNode.element;
  }

  addAt (index, element) {
    let node = new Node(element);

    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;

    if (index > this.size) {
      return false;
    }

    if (index === 0) {
      node.pointer = currentNode;
      this.head = node;
    } else {
      while (currentIndex < index) {
        currentIndex ++;
        previousNode = currentNode;
        currentNode = currentNode.pointer;
      }
      node.pointer = currentNode;
      previousNode.pointer = node;
    }
    this.size ++;
  }

  removeAt (index) {
    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;
    if (index < 0 || index >= this.size) {
      return null
    }
    if (index === 0) {
      this.head = currentNode.pointer;
    } else {
      while (currentIndex < index) {
        currentIndex ++;
        previousNode = currentNode;
        currentNode = currentNode.pointer;
      }
      previousNode.pointer = currentNode.pointer
    }
    this.size --;
    return currentNode.element;
  }
}
