/**
 * This problem was asked by Microsoft.

Suppose an arithmetic expression is given as a binary tree. Each leaf is an integer and each internal node is one of '+', '−', '∗', or '/'.

Given the root to such a tree, write a function to evaluate it.

For example, given the following tree:

    *
   / \
  +    +
 / \  / \
3  2  4  5
You should return 45, as it is (3 + 2) * (4 + 5).
*/

function evaluateArthimaticTree(root) {
    if(root) {
        switch(root.value) {
            case "-": 
                return evaluateArthimaticTree(root.left) - evaluateArthimaticTree(root.right);
            case "+":
                return evaluateArthimaticTree(root.left) + evaluateArthimaticTree(root.right);
            case "*":
                return evaluateArthimaticTree(root.left) * evaluateArthimaticTree(root.right);
            case "/":
                return evaluateArthimaticTree(root.left) / evaluateArthimaticTree(root.right);
            default:
                return root.value;
        }
    } else {
        return 0;
    }
}

const tree = {
    value: "*",
    left: {
        value: "+",
        left: {
            value: 3
        },
        right: {
            value: 2
        }
    },
    right: {
        value: "+",
        left: {
            value: 4
        },
        right: {
            value: 5
        }
    }
}

console.log(evaluateArthimaticTree(tree));