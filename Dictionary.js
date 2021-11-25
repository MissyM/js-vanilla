/*We have 11 places with 14 roads between theem, as described in the following array*/

const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall",
]

const buildGraph = (edges) => {
  let graph = {}
  const addEdge = (from, to) => {
    if (graph[from] == null) {
      graph[from] = [to]
    } else {
      graph[from].push(to)
    }
  }
  for (let [from, to] of edges.map((r) => r.split("-"))) {
    addEdge(from, to)
    addEdge(to, from)
  }
  return graph
}

console.log(buildGraph(roads))
