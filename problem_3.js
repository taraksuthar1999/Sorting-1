/**
 * TC: O(n^2)
 * SC: O(1)
 * simply using selection sort
 * @param {number[]} arr [1, 2, 3, 9, 5, 7, 6]
 * @param {*} r 1
 * @returns 
 */
function kthLargest(arr, r) {
    if (arr.length == 0) return -1
    const n = arr.length - 1
    for (let i = 0; i <= n; i++) {
        let max = arr[i]
        let index = i
        let j = i + 1
        while (j <= n) {
            if (arr[j] > max) {
                max = arr[j]
                index = j
            }
            j++
        }
        if (arr[i] < max) {
            let temp = arr[i]
            arr[i] = max
            arr[index] = temp
        }
        if (r == i + 1) return max
    }
    return -1
}

console.log(kthLargest([1, 2, 3, 9, 5, 7, 6], 1))

// https://leetcode.com/problems/kth-largest-element-in-an-array/