class Queue {
  elements
  constructor(){
    this.elements = []
  }

  size(){
    return this.elements.length
  }

  add(item) {
    this.elements.push(item)
    return this.elements
  }

  peek() {
    return this.elements[0]
  }

  dequeue() {
    return this.elements.shift()
  } 
}

module.exports = Queue