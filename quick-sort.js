const randomArray = require("./randomArray");

function swap(array, a, b) {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

function partition(array, left, right) {
    const pivot = array[left];
    swap(array, left, right);

    let storeIdx = left;
    for (let i = left; i < right; i++) {
        if (array[i] < pivot) {
            swap(array, i, storeIdx);
            storeIdx++;
        }
    }

    swap(array, storeIdx, right);
    return storeIdx;
}

function quicksort(array, left = 0, right = array.length - 1) {
    if (right <= left) {
        return;
    }
    
    const pivotIndex = partition(array, left, right);
    quicksort(array, left, pivotIndex - 1);
    quicksort(array, pivotIndex + 1, right);
}

const a = randomArray(1024);
console.log(a);
quicksort(a);
console.log(a);