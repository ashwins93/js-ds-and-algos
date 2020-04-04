class MaxHeap {
  constructor(initialVals = []) {
    this.values = [...initialVals]
  }

  insert(number) {
    this.values.push(number)
    let index = this.values.length - 1
    let parentIndex

    while (index > 0) {
      parentIndex = Math.floor((index - 1) / 2)
      if (this.values[index] > this.values[parentIndex]) {
        this.swap(index, parentIndex)
        index = parentIndex
      } else {
        break
      }
    }
  }

  extractMax() {
    if (!this.values.length) return
    if (this.values.length === 1) return this.values.pop()

    this.swap(0, this.values.length - 1)
    const rtnVal = this.values.pop()

    let parentIndex = 0
    let leftChildIdx, rightChildIdx, largerChildIdx
    leftChildIdx = 2 * parentIndex + 1
    rightChildIdx = 2 * parentIndex + 2

    while (
      leftChildIdx < this.values.length ||
      rightChildIdx < this.values.length
    ) {
      largerChildIdx = this.maxIndex(leftChildIdx, rightChildIdx)

      if (this.values[parentIndex] < this.values[largerChildIdx]) {
        this.swap(parentIndex, largerChildIdx)
        parentIndex = largerChildIdx
        leftChildIdx = 2 * parentIndex + 1
        rightChildIdx = 2 * parentIndex + 2
      } else {
        return rtnVal
      }
    }
    return rtnVal
  }

  maxIndex(left, right) {
    if (left >= this.values.length) return right
    if (right >= this.values.length) return left

    if (this.values[left] > this.values[right]) {
      return left
    }
    return right
  }

  swap(a, b) {
    let temp = this.values[a]
    this.values[a] = this.values[b]
    this.values[b] = temp
  }
}

// [16,14,10,11,9]
//       16
//   14     10
// 11  9  12

const heap = new MaxHeap()
heap.insert(17)
console.log(heap.extractMax())
console.log(heap.values)
heap.insert(14)
heap.insert(16)
heap.insert(11)
heap.insert(9)
heap.insert(10)
heap.insert(12)
console.log(heap.values)
console.log(heap.extractMax())
console.log(heap.values)
