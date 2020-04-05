type Connections = string[]

class Graph {
  adjacencyList: {
    [vertex: string]: Connections
  }

  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(vertex1: string, vertex2: string) {
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }

  removeEdge(vertex1: string, vertex2: string) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    )
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    )
  }

  removeVertex(vertex: string) {
    const connections = this.adjacencyList[vertex].slice()
    connections.forEach((connection) => this.removeEdge(vertex, connection))
    delete this.adjacencyList[vertex]
  }

  depthFirstRecursive(
    vertex: string,
    result: string[] = [],
    visited: any = {}
  ): string[] {
    if (!vertex) return []

    result.push(vertex)
    visited[vertex] = true

    for (let connection of this.adjacencyList[vertex]) {
      if (!visited[connection]) {
        this.depthFirstRecursive(connection, result, visited)
      }
    }

    return result
  }

  depthFirstIter(start: string): string[] {
    const stack = [] // [b,d,d]
    const result = [] // [a,c,e,f]
    const visited = {} // {a,c,e,f}

    stack.push(start)
    visited[start] = true

    while (stack.length) {
      const vertex = stack.pop()
      result.push(vertex)

      for (let neighbor of this.adjacencyList[vertex]) {
        if (!visited[neighbor]) {
          stack.push(neighbor)
          visited[neighbor] = true
        }
      }
    }

    return result
  }

  breadthFirst(start: string): string[] {
    const result = []
    const queue = []
    const visited = {}
    let vertex, neighbor

    queue.push(start)
    visited[start] = true

    while (queue.length) {
      vertex = queue.shift()
      result.push(vertex)

      for (neighbor of this.adjacencyList[vertex]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          queue.push(neighbor)
        }
      }
    }

    return result
  }
}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')
graph.addEdge('C', 'E')
graph.addEdge('D', 'E')
graph.addEdge('D', 'F')
graph.addEdge('E', 'F')

console.log(graph.adjacencyList)
console.log(graph.depthFirstRecursive('A'))
console.log(graph.breadthFirst('A'))
