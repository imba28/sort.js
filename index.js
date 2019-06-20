const heapSort = require("./heap-sort");
const insertionSort = require("./insertion-sort");
const mergeSort = require("./merge-sort");
const selectionSort = require("./selection-sort");
const randomArray = require("./randomArray");
const stopWatch = require("./stopwatch");

const result = {};

for (let n = 8; n <= 8192; n <<= 1) {
    result[n] = {};
    const a = randomArray(n);
    benchmark(a, heapSort, insertionSort, mergeSort, selectionSort);
}

console.log(result);

function benchmark(array, ...funcs) {
    funcs.forEach(func => {
        const r = [];
        for (let i = 0; i < 5; i++) {
            const a = array.slice();
            const start = stopWatch();
            func(a);
            const time = start();
            r.push(time);
        }

        r.sort();

        result[array.length][func.name] = r[r.length/2 >> 0];

    });
}