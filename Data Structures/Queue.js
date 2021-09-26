function Queue() {
  this.queue = []
}

Queue.prototype.enqueue = function(e) {
  this.queue.push(e)
}

Queue.prototype.deQueue = function() {
  return this.queue.shift()
}

Queue.prototype.isEmpty = function() {
  return this.queue.length == 0
}

Queue.prototype.peek = function() {
  return !this.isEmpty() ? this.queue[0] : null
}

Queue.prototype.length = function() {
  return this.queue.length
}

let queue = new Queue()

for (let i = 0; i < 7; i++) {
  queue.enqueue(i)
}

console.log(queue.peek())






