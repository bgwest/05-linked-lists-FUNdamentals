'use strict';

const linkedListCopy = {};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.data = {
      node: '',
      length: 0,
    };
  }

  insertAtHead(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.data.length = this.data.length + 1;
    return this;
  }

  remove(offset) {
    let captureNode = this.head;
    const formerNode = captureNode;
    if (captureNode.value === offset) {
      this.head = captureNode.next;
    } else {
      while (captureNode.value !== offset) {
        // formerNode = captureNode;
        captureNode = captureNode.next;
      }
      formerNode.next = captureNode.next;
    }
    this.data.length = this.data.length - 1;
    return formerNode;
  }

  find(value) {
    if (!Number(value)) {
      return null;
    }

    if (!this.head) {
      throw new Error('__ERROR__ The list is empty');
    }

    if (this.head.value === value) {
      return this.head;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        // aka -- the value you passed into find();
        const offset = currentNode.next.value;
        return this.remove(offset);
      }
      currentNode = currentNode.next;
    }
    return null;
  }
}

linkedListCopy.run = new LinkedList();

//! Ben arrays start at 0 - for my differentiation making linkedlist start at 1
for (let insertValue = 1; insertValue <= 10; insertValue++) {
  linkedListCopy.run.insertAtHead(insertValue);
}

// for manual testing manual test
// const removeNumberFive = linkedListCopy.run.find(5);
// uncomment below consoles to test output
// console.log(removeNumberFive);
// console.log(linkedListCopy.data);

module.exports = linkedListCopy;
