function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = Number.MAX_SAFE_INTEGER
        let index = i + 1
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j]
                index = j
            }
        }
        if (arr[i] > min) {
            let temp = arr[i]
            arr[i] = min
            arr[index] = temp
        }
    }
    console.log(arr)
}

selectionSort([1, 8, 7, 5, 6, 11, 2])