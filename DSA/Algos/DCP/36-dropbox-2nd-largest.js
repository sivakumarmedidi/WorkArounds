function secondLargest(root) {
    if(!root) {
        return null;
    }

    let node = root;
    while(node.right && node.right.right) {
        node = node.right;
    }

    if(node.right) {
        if(node.right.left) {
            return node.right.left
        }
        return node;
    } else if (node.left) {
        return node.left;
    } else {
        return null;
    }
}
function sortedArray(root) {
    let array = [];
    function inorder(node) {
        if(node) {
            inorder(node.left);
            array.push(node.value);
            inorder(node.right);
        }
    }
    inorder(root);
    console.log(array);
}

let bst = {
    value: 10,
    left: {
        value: 9,
        left: {
            value: 7
        },
        right: {
            value: 8
        }
    },
    right: {
        value: 12,
        left: {
            value: 11
        },
        right: {
            value: 13
        }
    }
}

console.log(secondLargest(bst));
sortedArray(bst);


//------DCP Solution
function second_largest(root) {
    let count = 0;
    let val;
    function inorder(node) {
        if(!node || count == 2) {
            return null;
        }
    
        if(node.right) {
            inorder(node.right)
        }
    
        count++;
        if(count == 2) {
            val = node.value
            return;
        }
    
        if(node.left) {
            inorder(node.left)
        }
    }
    
    inorder(root)
    return val;
}

let bst1 = {
    value: 4,
    left: {
        value: 3,
        left: {
            value: 2,
            left: {
                value: 1
            }
        }
    }
}

console.log(secondLargest(bst1));