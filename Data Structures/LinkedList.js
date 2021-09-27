class ListNode {
  constructor(data) {
    this.data = data
    this.nextNode = null
  }
}

class LinkedList {
  constructor(head) {
    this.head = null
  }

  emptyList() {
    this.head = null;
  }
  
  numNodes() {
    let count = 0;
    let start = this.head
    while(start) {
      count++;
      start = start.next
    }
  
    return count
  }
  
  getLast() {
    let start = this.head
  
    while(start) {
      start = start.next;
    }
  
    return start
  }
  
  getFirst() {
    return this.head
  }
}

let node1 = ListNode(2)
let node2 = ListNode(4)
node1.nextNode = node2;

