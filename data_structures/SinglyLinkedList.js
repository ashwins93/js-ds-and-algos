class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    let newNode = new Node(val)
    if(this.head === null) {
      this.head = this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++

    return this
  }

  pop() {
    if(!this.length) return

    let previous = this.head
    let current = this.head

    while(current.next) {
      previous = current
      current = current.next
    }

    previous.next = null
    this.tail = previous
    this.length--

    if(this.length ===  0) {
      this.head = null
      this.tail = null
    }

    return current.val
  }

  shift() {
    if(!this.length) return

    let result = this.head
    this.head = this.head.next
    this.length--

    if(this.length ===  0) {
      this.tail = null
    }

    return result.val
  }

  unshift(val) {
    const newNode = new Node(val)
    if(!this.head) {
      this.head = this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
    return this
  }

  get(index) {
    if(index < 0 || index >= this.length) {
      return null
    }

    let currentIndex = 0
    let currentNode = this.head

    while(currentIndex !== index) {
      currentNode = currentNode.next
      currentIndex++
    }

    return currentNode
  }

  set(index, value) {
    const node = this.get(index)

    if(!node) return false

    node.val = value

    return true

  }

  insert(position, value) {
    if(position < 0 || position > this.length) return false

    if(position === 0) {
      return !!this.unshift(value)
    }

    if(position === this.length) {
      return !!this.push(value)
    }

    const newNode = new Node(value)
    const prevNode = this.get(position - 1)

    newNode.next = prevNode.next
    prevNode.next  = newNode

    this.length++

    return true
  }

  remove(index) {
    if(index < 0 || index >= this.length) return

    if(index === 0) return this.shift()
    if(index === this.length - 1) return this.pop()

    const prevNode = this.get(index - 1)
    const removedNode = prevNode.next

    prevNode.next = removedNode.next
    removedNode.next = null
    this.length--

    return removedNode
  }

  reverse() {
    {
      let temp = this.head
      this.head = this.tail
      this.tail = temp
    }

    let prev = null
    let next = null
    let node = this.tail


    while(node) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }

    return this
  }

  toArray() {
    let result = []

    let e = this.head

    while(e) {
      result.push(e.val)
      e = e.next
    }
    return result
  }
}

const list = new SinglyLinkedList()

list.push(3)
console.log(list.toArray())
list.push(5)
console.log(list.toArray())
list.push(6)
list.push(8)
console.log(list.toArray())
console.log(list.pop())
console.log(list.toArray())
console.log(list.shift())
list.unshift(7)
console.log(list.toArray())
console.log(list.get(1))
list.set(1, 90)
list.insert(1, 35)
console.log(list.insert(4, 70))
console.log(list.remove(2))
console.log(list.toArray())
list.reverse()
console.log(list.toArray())
