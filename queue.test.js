const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()
    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue()
    queue.elements = [1,2,3]
    expect(queue.size()).toEqual(3)
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue()
    queue.elements = [1,2,3]
    expect(queue.add(4)).toEqual([1,2,3,4])
  })
  
  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue()
    queue.elements = [1,2,3]
    expect(queue.peek()).toEqual(1)
  })
  
  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue()
    queue.elements = [1,2,3]
    expect(queue.dequeue()).toEqual(1)
  })
})