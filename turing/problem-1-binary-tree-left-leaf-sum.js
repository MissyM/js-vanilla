/** Find the sum of all the left leafs of a binary tree */


function treeLeftLeafSum(rootNode) {
  let sum = 0

  let nodeToVisit = []
  let currentNode = rootNode

  while (currentNode) {

    // do something with the node (currentNode.value)

    // add child nodes
  
    if (currentNode.left) {
      if (currentNode.left.left === null && currentNode.left.right === null) {
        sum += currentNode.left.value
      }

      nodeToVisit.push(currentNode.left)
    }

    if (currentNode.right) {
      nodeToVisit.push(currentNode.right)
    }
  
    // takes the next node from nodesToVisit
    currentNode = nodeToVisit.shift()
  }

  return sum
}

// Tree data structure

class TreeNode {
  constructor(value, left = null, right = null) {
   this.value = value
   this.left = left
   this.right = right
  }
}

let tree1 = new TreeNode(10,
  new TreeNode(2,
    new TreeNode(13),
    new TreeNode(5,
      new TreeNode(8,
        new TreeNode(1,
          new TreeNode(2),
          new TreeNode(4,
          new TreeNode(1),
          new TreeNode(9)
          )
        )
      )
    )
  ),
  new TreeNode(3,
    new TreeNode(5,
      new TreeNode(4),
      new TreeNode(2)
    ),
    new TreeNode(3,
      new TreeNode(8,
        null,
        new TreeNode(5)
      ),
      new TreeNode(2)
    )
  )
)

const result = treeLeftLeafSum(tree1)

console.log('result:', result)
