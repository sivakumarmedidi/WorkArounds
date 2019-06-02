function Node(value, children=[]) {
    this.value = value;
    this.children = children;
}

function symmetric(tree1, tree2) {
    if(tree1 && tree2) {
        if(tree1.value === tree2.value) {
            if(tree1.children.length != tree2.children.length) {
                return false
            } else {
                let sym = true;
                let i = 0;
                let len = tree2.children.length;
                while(i < tree1.children.length) {
                    if(!symmetric(tree1.children[i], tree2.children[len-i-1])) {
                        sym = false;
                        break;
                    }
                    i++;
                }
                return sym;
            }
        } else {
            return false;
        }
    } else if (!tree1 && !tree2) {
        return true;
    } else {
        return false;
    }
}

let karyTree = new Node(1);

karyTree.children = [new Node(2, [new Node(1), new Node(2)]), new Node(3, [new Node(1), new Node(1)]), new Node(2, [new Node(2), new Node(1)])];

console.log(symmetric(karyTree, karyTree));