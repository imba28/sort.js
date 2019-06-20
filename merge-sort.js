function merge(array, left, mid, right) {
    let countLeft = mid - left + 1; // [left, mid] inclusive mid
    let countRight = right - mid; // ]mid, right] exclusive mid

    const sorted = [];

    let i = 0; // current left index
    let j = 0; // current right index

    while (i < countLeft && j < countRight) { // while both arrays have items
        if (array[left + i] < array[mid+j+1]) { // if right min value is greater
            sorted.push(array[left + i]); // push left value
            i++;
        } else { // if left min values is greater
            sorted.push(array[mid+j+1]); // push right value
            j++;
        }
    }

    while(i < countLeft) { // copy remaining left items, if there are any
        sorted.push(array[left + i]);
        i++;
    }

    while (j < countRight) { // copy remaning right items, if there are any
        sorted.push(array[mid+j+1]);
        j++;
    }

    for (let i = left; i <= right; i++) {
        array[i] = sorted[i - left];
    }
}

function mergeSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
        const middle = Math.floor((left + right) / 2);
        mergeSort(array, left, middle);
        mergeSort(array, middle + 1, right);
        merge(array, left, middle, right);
    }
}

const a = [7, 6, 1, 3, 9, 2, 4, 8, 5];
console.log(a);
mergeSort(a);
console.log(a);