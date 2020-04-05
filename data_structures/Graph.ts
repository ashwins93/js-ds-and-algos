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
}

const graph = new Graph()
graph.addVertex('Tokyo')
graph.addVertex('Dallas')
graph.addVertex('Aspen')
graph.addVertex('Delhi')
graph.addEdge('Tokyo', 'Dallas')
graph.addEdge('Aspen', 'Dallas')
graph.addEdge('Aspen', 'Tokyo')
graph.addEdge('Delhi', 'Tokyo')
graph.addEdge('Delhi', 'Aspen')

console.log(graph.adjacencyList)
graph.removeVertex('Tokyo')
console.log(graph.adjacencyList)
