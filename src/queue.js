const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {



  constructor() {
    this.fisrstNode = {
      last: null,
      next: null,
      value: null
    }
  }

  getUnderlyingList() {

    return this.fisrstNode

  }

  enqueue(value) {

    if (!this.fisrstNode.value) {
      this.fisrstNode.value = value

      this.lastNodeLink = this.fisrstNode
    } else {
      const node = {}
      node.value = value
      node.next = null

      this.lastNodeLink.next = node
      this.lastNodeLink = node
    }

  }

  dequeue() {
    const fistNode = {...this.fisrstNode}
    this.fisrstNode =   this.fisrstNode.next
    return fistNode.value
  }
}

module.exports = {
  Queue
};
