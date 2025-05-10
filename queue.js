class Queue {
  elements
  constructor(){
    this.elements = []
  }

  size(){
    return this.elements.length
  }

  add(element) {
    this.elements.push(element)
    return this.elements
  }

  peek() {

  }

  dequeue() {

  } 
}

module.exports = Queue