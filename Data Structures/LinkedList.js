class ListNode {
  constructor(data) {
    this.data = data
    this.nextNode = null
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  emptyList() {
    this.head = null;
  }
  
  numNodes() {
    let count = 0;
    var start = this.head

    while(start) {
      count++;
      start = start.nextNode
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

let node1 = new ListNode(2)
let node2 = new ListNode(4)
node1.nextNode = node2;

let list = new LinkedList(node1)
console.log(list.head.nextNode);
console.log('number of nodes: ' + list.numNodes());

