class PNode {
  val: string
  priority: number
  constructor({ val, priority }: { val: string; priority: number }) {
    this.val = val
    this.priority = priority
  }
}

class PriorityQueue {
  values: PNode[]

  constructor() {
    this.values = []
  }

  swap(a: number, b: number) {
    let temp = this.values[a]
    this.values[a] = this.values[b]
    this.values[b] = temp
  }

  minIdx(leftIdx: number, rightIdx: number) {
    if (leftIdx >= this.values.length) return rightIdx
    if (rightIdx >= this.values.length) return leftIdx

    if (this.values[leftIdx].priority < this.values[rightIdx].priority) {
      return leftIdx
    }

    return rightIdx
  }

  enqueue(node: { val: string; priority: number }) {
    this.values.push(new PNode(node))
    let index = this.values.length - 1
    let parentIndex

    while (index > 0) {
      parentIndex = Math.floor((index - 1) / 2)

      if (this.values[index].priority < this.values[parentIndex].priority) {
        this.swap(index, parentIndex)
        index = parentIndex
      } else {
        break
      }
    }
  }

  dequeue() {
    if (!this.values.length) return
    if (this.values.length === 1) return this.values.pop()

    this.swap(0, this.values.length - 1)
    const rtnVal = this.values.pop()
    let idx = 0,
      leftIdx = idx * 2 + 1,
      rightIdx = idx * 2 + 2,
      smallerIdx

    while (leftIdx < this.values.length || rightIdx < this.values.length) {
      smallerIdx = this.minIdx(leftIdx, rightIdx)

      if (this.values[idx].priority > this.values[smallerIdx].priority) {
        this.swap(idx, smallerIdx)
        idx = smallerIdx
        leftIdx = idx * 2 + 1
        rightIdx = idx * 2 + 2
      } else {
        return rtnVal
      }
    }
    return rtnVal
  }
}

const queue = new PriorityQueue()
queue.enqueue({
  val: 'headache 🤕',
  priority: 3,
})
queue.enqueue({
  val: 'flu 🤢',
  priority: 2,
})
queue.enqueue({
  val: 'cold 🤧',
  priority: 3,
})
queue.enqueue({
  val: 'heavily injured 😵',
  priority: 1,
})

console.log(queue.values)
console.log(queue.dequeue())
console.log(queue.values)
console.log(queue.dequeue())
console.log(queue.values)
queue.enqueue({
  val: 'cancer 🤮',
  priority: 1,
})
console.log(queue.values)
