import { PriorityQueue } from './PriorityQueue'

type Vertex = string
type Connection = {
  vertex: Vertex
  weight: number
}

class WeightedGraph {
  adjacencyList: {
    [key: string]: Connection[]
  }

  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex: Vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(vertex1: string, vertex2: string, weight: number) {
    this.adjacencyList[vertex1].push({ vertex: vertex2, weight })
    this.adjacencyList[vertex2].push({ vertex: vertex1, weight })
  }

  shortestPath(from: Vertex, to: Vertex): Vertex[] {
    const distances: { [vertex: string]: number } = {}
    const previous: { [vertex: string]: Vertex | null } = {}
    const queue = new PriorityQueue()

    for (let vertex in this.adjacencyList) {
      from === vertex ? (distances[vertex] = 0) : (distances[vertex] = Infinity)
      previous[vertex] = null
      queue.enqueue({ val: vertex, priority: distances[vertex] })
    }

    while (queue.values.length) {
      const vertex = queue.dequeue().val

      if (vertex === to) break

      for (let neighbor of this.adjacencyList[vertex]) {
        let distanceFromStart = distances[vertex] + neighbor.weight
        if (distanceFromStart < distances[neighbor.vertex]) {
          distances[neighbor.vertex] = distanceFromStart
          previous[neighbor.vertex] = vertex
          queue.enqueue({
            val: neighbor.vertex,
            priority: distances[neighbor.vertex],
          })
        }
      }
    }

    let currentVertex = to
    const result = [currentVertex]

    while (currentVertex !== from) {
      currentVertex = previous[currentVertex]
      result.unshift(currentVertex)
    }

    return result
  }
}

const graph = new WeightedGraph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addEdge('A', 'B', 4)
graph.addEdge('A', 'C', 2)
graph.addEdge('C', 'D', 2)
graph.addEdge('B', 'E', 3)
graph.addEdge('D', 'E', 3)
graph.addEdge('C', 'F', 4)
graph.addEdge('D', 'F', 1)
graph.addEdge('F', 'E', 1)

console.log(graph.adjacencyList)
console.log(graph.shortestPath('A', 'E'))
console.log(graph.shortestPath('C', 'E'))
