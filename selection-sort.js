function swap(array, a, b) {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[min] > array[j]) {
                min = j;
            }
        }

        swap(array, i, min);
    }
}

const a = [7, 6, 1, 3, 9, 2, 4, 8, 5];
console.log(a);
selectionSort(a);
console.log(a);