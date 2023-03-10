/**
 * TC: O(n)
 * SC: O(n)
 * simply using count sort
 * @param {number[]} arr array of numbers containing 0s,1s and 2s
 */
function sortColors(arr) {
    const count = new Array(3).fill(0)
    for (let i of arr) {
        count[i]++
    }
    const res = []
    for (let i in count) {
        for (let j = 0; j < count[i]; j++) {
            res.push(Number(i))
        }
    }
    console.log(res)
}

sortColors([2, 0, 2, 1, 1, 0])

// https://leetcode.com/problems/sort-colors/