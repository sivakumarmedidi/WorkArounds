/**
 * Given an integer N, construct all possible binary search trees with N nodes.
*/

function Node(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
}

function makeTrees(low, high) {
    const trees = [];

    if(low > high) {
        trees.push(null);
        return trees;
    }

    for(let i = low; i <= high; i++) {
        let leftTrees = makeTrees(low, i - 1);
        let rightTrees = makeTrees(i + 1, high);

        leftTrees.forEach(leftTree => {
            rightTrees.forEach(rightTree => {
                trees.push(new Node(i, leftTree, rightTree));
            });
        });
    }

    return trees;
}

function countPossibleTrees(low, high) {
    let count = 0;

    if(low > high) {
        return count+1;
    }

    for(let i = low; i <= high; i++) {
        let leftTreesCount = countPossibleTrees(low, i - 1);
        let rightTreesCount = countPossibleTrees(i + 1, high);

        count = count + (leftTreesCount*rightTreesCount)
    }

    return count;
}

console.log(JSON.stringify(makeTrees(1,3)));
console.log(JSON.stringify(countPossibleTrees(1,5)));