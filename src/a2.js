var BinaryTreeNode = /** @class */ (function () {
    function BinaryTreeNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return BinaryTreeNode;
}());
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
    }
    BinaryTree.prototype.insert = function (value) {
        var newNode = new BinaryTreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode); //рекурсивно вызываем метод если в дереве более одного элемента
        }
    };
    BinaryTree.prototype.insertNode = function (node, newNode) {
        //проверяем левую ветку 
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
            // проверяем правую ветку
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    };
    BinaryTree.prototype.depthTraversal = function () {
        console.log("Обход элементов в глубину:");
        this.depthTraversalNode(this.root);
    };
    BinaryTree.prototype.depthTraversalNode = function (node) {
        if (node !== null) {
            // обрабатываем левое дерево
            this.depthTraversalNode(node.left);
            // обрабатываем правое дерево
            this.depthTraversalNode(node.right);
            //значения узлов
            console.log(node.value);
        }
    };
    BinaryTree.prototype.breadthTraversal = function () {
        console.log("Breadth-First Traversal:");
        if (this.root === null) {
            return;
        }
        var queue = [];
        queue.push(this.root);
        while (queue.length > 0) {
            var node = queue.shift();
            if (node !== undefined) {
                // Выводим значение текущего узла
                console.log(node.value);
                // Добавляем левое и правое поддерево в очередь
                if (node.left !== null) {
                    queue.push(node.left);
                }
                if (node.right !== null) {
                    queue.push(node.right);
                }
            }
        }
    };
    return BinaryTree;
}());
var tree = new BinaryTree();
tree.insert("F");
tree.insert("B");
tree.insert("G");
tree.insert("A");
tree.insert("D");
tree.insert("I");
tree.insert("C");
tree.insert("E");
tree.insert("H");
tree.depthTraversal();
tree.breadthTraversal();
