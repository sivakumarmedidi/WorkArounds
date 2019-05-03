class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


class printCousins:

    def __init__(self, tree, node):
        self.findLevel(tree, node, 0, None)
        self.printCousins(tree, 0, None)


    def findLevel(self, tree, node, level, parent):
        if(tree == node):
            self.nodeLevel = level
            self.parent = parent

        if(tree.left):
            self.findLevel(tree.left, node, level+1, tree)
        
        if(tree.right):
            self.findLevel(tree.right, node, level+1, tree)

    def printCousins(self, tree, level, parent):
        if(level == self.nodeLevel and parent != self.parent):
            print(tree.value)

        if(tree.left):
            self.printCousins(tree.left, level+1, tree)

        if(tree.right):
            self.printCousins(tree.right, level+1, tree)
    
    
tree = Node(1)
tree.left = Node(2)
tree.right = Node(3)
tree.left.left = Node(4)
tree.left.right = Node(5)
tree.right.right = Node(6)

printCousins(tree, tree.left.left)