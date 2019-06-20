function leftChildIndex(parent) {
    return 2 * parent + 1;
}

function hasLeftChild(array, index, end) {
    return leftChildIndex(index) < array.length && leftChildIndex(index) < end; 
}
function hasRightChild(array, index, end) {
    return rightChildIndex(index) < array.length && rightChildIndex(index) < end;
}

function rightChildIndex(parent) {
    return leftChildIndex(parent) + 1;
}
function parentIndex(child) {
    return Math.floor((child - 1) / 2);
}

function swap(array, a, b) {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

/**
 * We suppose the tree is already in heap state. 
 * If the parent is smaller than one of its children, swap them and downheap the switched node. 
 * @param {*} array 
 * @param {*} root 
 * @param {*} end 
 */
function downHeap(array, root, end = array.length) {
    let max = root;

    if (root >= end) {
        return;
    }

    if (
        hasLeftChild(array, root, end) && 
        array[leftChildIndex(root)] > array[root]
    ) {
        max = leftChildIndex(root);
    }
    if (
        hasRightChild(array, root, end) &&
        array[rightChildIndex(root)] > array[root] && 
        array[rightChildIndex(root)] > array[max]
    ) {
        max = rightChildIndex(root);
    }

    if (max !== root) {
        swap(array, root, max);
        downHeap(array, max, end);
    }
}

/**
 * Build heap from array. 
 * Call downheap() from every parent node starting with the left-down mosts node.
 * @param {*} array 
 */
function build(array) {
    let root = parentIndex(array.length - 1);

    while(root >= 0) {
        downHeap(array, root);
        root--;
    }
}

function heapSort(array) {
    build(array);

    let lastIndex = array.length - 1;

    while (lastIndex > 0) {
        swap(array, 0, lastIndex);
        downHeap(array, 0, lastIndex--);
    }
}

const a = [7, 6, 1, 3, 9, 2, 4, 8, 5];

console.log(a);
heapSort(a);
console.log(a);