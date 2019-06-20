const watch = require("./stopwatch");
const randomArray = require("./randomArray");

function swap(array, a, b) {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) { // if last element is greather than right most
            for (let j = i; j > 0 && array[j] < array[j-1]; j--) { // while element to the left is bigger
                swap(array, j, j - 1); // swap with element to the left 
            }
        }
    }
}

module.exports = insertionSort;
