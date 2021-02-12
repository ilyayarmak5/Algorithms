// // Realization of a queue
// function Queue() {
//   this.elements = [];
// }
// // Add element to queue
// Queue.prototype.equeue = function (e) {
//   this.elements.push(e);
// };
// // Remove element from queue
// Queue.prototype.dequeue = function () {
//   return this.elements.shift();
// };
// // Check if queue is empty
// Queue.prototype.isEmpty = function () {
//   return this.elements.length == 0;
// };
// // Check queue's length
// Queue.prototype.length = function () {
//   return this.elements.length;
// };

// // Initialize a graph with adjacency matrix

// let graphAdj;
// let queue;
// let visited;

// const initGraph = (maxVertex) => {
//   queue = new Queue();
//   visited = new Array(maxVertex);
//   graphAdj = new Array(maxVertex);
//   for (let i = 0; i < graphAdj.length; i++) {
//     graphAdj[i] = new Array(maxVertex);
//   }
//   for (let i = 0; i < graphAdj.length; i++) {
//     for (let j = 0; j < graphAdj[i].length; j++) {
//       graphAdj[i][j] = 0;
//     }
//   }
//   return graphAdj;
// };

// // Print a graph
// const printGraph = () => {
//   let graphline = " ";
//   let i, j;
//   for (i = 0; i < graphAdj.length; i++) {
//     for (j = 0; j < graphAdj[i].length; j++) {
//       graphline += graphAdj[i][j];
//       graphline += " ";
//       if (j === graphAdj.length - 1) {
//         console.log(graphline);
//         graphline = " ";
//       }
//     }
//   }
// };

// // Insertion
// const insertGraph = (a, b) => {
//   for (let i = 0; i < graphAdj.length; i++) {
//     for (let j = 0; j < graphAdj[i].length; j++) {
//       if (i === a && j === b) {
//         graphAdj[i][j] = 1;
//         graphAdj[j][i] = 1;
//       }
//     }
//   }
// };

// // const BFS = (node) => {
// //   visited[node] = true;
// //   queue.enqueue(node);
// //   while (!queue.isEmpty()) {
// //     let visiting = queue.dequeue();
// //     console.log(queue);
// //     for (let j = 0; j < graphAdj[visiting].length; j++) {
// //       if (graphAdj[visiting][j] === 1 && visited[j] === false) {
// //         visited[j] = true;
// //         queue.equeue(j);
// //       }
// //     }
// //   }
// // };
// const BFS = (node) => {
//   visited[node] = true;
//   queue.equeue(node);
//   while (!queue.isEmpty()) {
//     let visiting = queue.dequeue();
//     console.log(`we visited ${visiting}`);
//     for (let j = 0; j < graphAdj[visiting].length; j++) {
//       if (graphAdj[visiting][j] === 1 && visited[j] === false) {
//         visited[j] = true;
//         queue.equeue(j);
//       }
//     }
//   }
// };
// let graph = initGraph(5);
// insertGraph(1, 1);
// insertGraph(2, 5);
// insertGraph(3, 4);
// printGraph();
// BFS(graph[1][1]);

/* Graphs: Breadth-first search */

// function bfs(graph, root) {
//   var nodesLen = {};

//   for (var i = 0; i < graph.length; i++) {
//     nodesLen[i] = Infinity;
//   }
//   nodesLen[root] = 0;

//   var queue = [root];
//   var current;

//   while (queue.length != 0) {
//     current = queue.shift();

//     var curConnected = graph[current];
//     var neighborIdx = [];
//     var idx = curConnected.indexOf(1);
//     while (idx != -1) {
//       neighborIdx.push(idx);
//       idx = curConnected.indexOf(1, idx + 1);
//     }

//     for (var j = 0; j < neighborIdx.length; j++) {
//       if (nodesLen[neighborIdx[j]] == Infinity) {
//         nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
//         queue.push(neighborIdx[j]);
//       }
//     }
//   }
//   return nodesLen;
// }

// var exBFSGraph = [
//   [0, 1, 1, 1, 0],
//   [0, 0, 1, 0, 0],
//   [1, 1, 0, 0, 0],
//   [0, 0, 0, 1, 0],
//   [0, 1, 0, 0, 0],
// ];
// console.log(bfs(exBFSGraph, 1));

const list = [2, 234, 1, 23, 31, 1242, 123123, 12, 23];

const sort = (a, b) => {
  return a - b;
};
list.sort;
console.log(list.sort);
