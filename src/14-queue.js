const ListNode = require('../extensions/list-node');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  get size() {
    throw new Error('Not implemented');
  }

  enqueue(element) {
    const newNode = new ListNode(element);
    if (!this.head) {
      this.head = newNode;
    } else {
      let tail = this.head;
      while (tail.next !== null) {
        tail = tail.next;
      }
      tail.next = newNode;
    }
  }

  dequeue() {
    if (!this.head) {
      return undefined;
    }
    const del = this.head.value;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
    }
    return del;
  }
}

module.exports = Queue;
