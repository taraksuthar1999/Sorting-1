/**
 * 
 * @param {number[]} arr 
 */
function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i]
        let j = i - 1
        while (j >= 0 && temp < arr[j]) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = temp
    }
    console.log(arr)
}

insertionSort([1, 8, 7, 5, 6, 11, 2])