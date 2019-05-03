function secondLargest(root) {
    if(!root) {
        return null;
    }

    let node = root;
    while(node.right && node.right.right) {
        node = node.right
    }

    if(node.right) {
        return node;
    } else if (node.left) {
        return node.left;
    } else {
        return null;
    }
}

